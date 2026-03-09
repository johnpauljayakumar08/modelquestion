import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

interface AdminDashboardProps {
  setActivePage: (page: string) => void;
}

interface Registration {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  currentClass: string;
  board: string;
  school: string;
  city: string;
  parentName: string;
  parentPhone: string;
  created_at: string;
}

interface Contact {
  id: number;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  role: string;
  message: string;
  created_at: string;
}

export default function AdminDashboard({ setActivePage }: AdminDashboardProps) {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [activeTab, setActiveTab] = useState<'registrations' | 'contacts'>('registrations');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Search terms for filtering
  const [regSearch, setRegSearch] = useState('');
  const [contactSearch, setContactSearch] = useState('');

  // Pagination
  const [regCurrentPage, setRegCurrentPage] = useState(1);
  const [contactCurrentPage, setContactCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [regRes, contactRes] = await Promise.all([
        fetch('https://onsindia.net/api/registrations'),
        fetch('https://onsindia.net/api/contacts')
      ]);

      if (!regRes.ok || !contactRes.ok) throw new Error('Failed to fetch data');

      const regData = await regRes.json();
      const contactData = await contactRes.json();

      setRegistrations(regData);
      setContacts(contactData);
    } catch (err) {
      setError('Failed to load data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const searchData = <T extends Record<string, any>>(data: T[], term: string): T[] => {
    if (!term) return data;
    const lower = term.toLowerCase();
    return data.filter(item =>
      Object.values(item).some(val =>
        val?.toString().toLowerCase().includes(lower)
      )
    );
  };

  const filteredRegistrations = searchData(registrations, regSearch);
  const filteredContacts = searchData(contacts, contactSearch);

  const paginate = <T,>(data: T[], currentPage: number): T[] => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  const paginatedRegistrations = paginate(filteredRegistrations, regCurrentPage);
  const paginatedContacts = paginate(filteredContacts, contactCurrentPage);

  const totalRegPages = Math.ceil(filteredRegistrations.length / itemsPerPage);
  const totalContactPages = Math.ceil(filteredContacts.length / itemsPerPage);

  const downloadExcel = (data: any[], filename: string) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, filename);
  };

  const handleLogout = () => {
    setActivePage('home');
  };

  if (loading) return <div className="pt-24 text-center">Loading...</div>;
  if (error) return <div className="pt-24 text-center text-red-500">{error}</div>;

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="mb-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('registrations')}
            className={`px-4 py-2 rounded ${activeTab === 'registrations' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Registrations ({filteredRegistrations.length})
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-4 py-2 rounded ${activeTab === 'contacts' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Contacts ({filteredContacts.length})
          </button>
        </div>
      </div>

      {activeTab === 'registrations' && (
        <div>
          <div className="mb-4 flex justify-between">
            <input
              type="text"
              placeholder="Search registrations..."
              value={regSearch}
              onChange={e => { setRegSearch(e.target.value); setRegCurrentPage(1); }}
              className="px-2 py-1 border rounded text-sm w-1/3"
            />
            <button
              onClick={() => downloadExcel(filteredRegistrations, 'registrations.xlsx')}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Download Excel
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border">ID</th>
                  <th className="px-4 py-2 border">Full Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Phone</th>
                  <th className="px-4 py-2 border">Class</th>
                  <th className="px-4 py-2 border">Board</th>
                  <th className="px-4 py-2 border">School</th>
                  <th className="px-4 py-2 border">City</th>
                  <th className="px-4 py-2 border">Parent Name</th>
                  <th className="px-4 py-2 border">Parent Phone</th>
                  <th className="px-4 py-2 border">Created At</th>
                </tr>
              </thead>
              <tbody>
                {paginatedRegistrations.map(reg => (
                  <tr key={reg.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{reg.id}</td>
                    <td className="px-4 py-2 border">{reg.fullName}</td>
                    <td className="px-4 py-2 border">{reg.email}</td>
                    <td className="px-4 py-2 border">{reg.phone}</td>
                    <td className="px-4 py-2 border">{reg.currentClass}</td>
                    <td className="px-4 py-2 border">{reg.board}</td>
                    <td className="px-4 py-2 border">{reg.school}</td>
                    <td className="px-4 py-2 border">{reg.city}</td>
                    <td className="px-4 py-2 border">{reg.parentName}</td>
                    <td className="px-4 py-2 border">{reg.parentPhone}</td>
                    <td className="px-4 py-2 border">{new Date(reg.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-between">
            <button
              onClick={() => setRegCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={regCurrentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Previous
            </button>
            <span>Page {regCurrentPage} of {totalRegPages}</span>
            <button
              onClick={() => setRegCurrentPage(prev => Math.min(prev + 1, totalRegPages))}
              disabled={regCurrentPage === totalRegPages}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {activeTab === 'contacts' && (
        <div>
          <div className="mb-4 flex justify-between">
            <input
              type="text"
              placeholder="Search contacts..."
              value={contactSearch}
              onChange={e => { setContactSearch(e.target.value); setContactCurrentPage(1); }}
              className="px-2 py-1 border rounded text-sm w-1/3"
            />
            <button
              onClick={() => downloadExcel(filteredContacts, 'contacts.xlsx')}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Download Excel
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border">ID</th>
                  <th className="px-4 py-2 border">Full Name</th>
                  <th className="px-4 py-2 border">Phone</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">City</th>
                  <th className="px-4 py-2 border">Role</th>
                  <th className="px-4 py-2 border">Message</th>
                  <th className="px-4 py-2 border">Created At</th>
                </tr>
              </thead>
              <tbody>
                {paginatedContacts.map(contact => (
                  <tr key={contact.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{contact.id}</td>
                    <td className="px-4 py-2 border">{contact.fullName}</td>
                    <td className="px-4 py-2 border">{contact.phone}</td>
                    <td className="px-4 py-2 border">{contact.email}</td>
                    <td className="px-4 py-2 border">{contact.city}</td>
                    <td className="px-4 py-2 border">{contact.role}</td>
                    <td className="px-4 py-2 border">{contact.message}</td>
                    <td className="px-4 py-2 border">{new Date(contact.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-between">
            <button
              onClick={() => setContactCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={contactCurrentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Previous
            </button>
            <span>Page {contactCurrentPage} of {totalContactPages}</span>
            <button
              onClick={() => setContactCurrentPage(prev => Math.min(prev + 1, totalContactPages))}
              disabled={contactCurrentPage === totalContactPages}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
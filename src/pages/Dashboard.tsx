import React, { useState } from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import Topbar from '../components/Common/Topbar';
import ContractsTable from '../components/Dashboard/ContractsTable';
import Filters from '../components/Dashboard/Filters';
import Pagination from '../components/Dashboard/Pagination';
import Loader from '../components/Common/Loader';
import { useContracts } from '../hooks/useContracts';

const Dashboard: React.FC = () => {
  const { contracts, loading, error } = useContracts();
  const [status, setStatus] = useState('');
  const [risk, setRisk] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filtered = contracts.filter(c =>
    (status ? c.status === status : true) &&
    (risk ? c.risk === risk : true) &&
    (search ? (c.name.toLowerCase().includes(search.toLowerCase()) || c.parties.toLowerCase().includes(search.toLowerCase())) : true)
  );
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="flex justify-between mb-4">
            <input
              type="text"
              placeholder="Search by name or parties"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="border p-2 rounded w-64"
            />
            <Filters status={status} risk={risk} onStatusChange={setStatus} onRiskChange={setRisk} />
          </div>
          {loading ? <Loader /> : error ? <div className="text-red-500">{error}</div> : paginated.length === 0 ? <div>No contracts yet</div> : <ContractsTable contracts={paginated} />}
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

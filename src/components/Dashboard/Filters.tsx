import React from 'react';

interface FiltersProps {
  status: string;
  risk: string;
  onStatusChange: (status: string) => void;
  onRiskChange: (risk: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ status, risk, onStatusChange, onRiskChange }) => (
  <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
    <select value={status} onChange={e => onStatusChange(e.target.value)}>
      <option value="">All Status</option>
      <option value="Active">Active</option>
      <option value="Expired">Expired</option>
      <option value="Renewal Due">Renewal Due</option>
    </select>
    <select value={risk} onChange={e => onRiskChange(e.target.value)}>
      <option value="">All Risk</option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
  </div>
);

export default Filters;

import React from 'react';

interface Contract {
  id: string;
  name: string;
  parties: string;
  expiry: string;
  status: string;
  risk: string;
}

const ContractsTable: React.FC<{ contracts: Contract[] }> = ({ contracts }) => (
  <table style={{ width: '100%', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Contract Name</th>
        <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Parties</th>
        <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Expiry Date</th>
        <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Status</th>
        <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Risk Score</th>
      </tr>
    </thead>
    <tbody>
      {contracts.map(contract => (
        <tr key={contract.id} style={{ borderTop: '1px solid #eee' }}>
          <td style={{ padding: '12px 16px' }}>{contract.name}</td>
          <td style={{ padding: '12px 16px' }}>{contract.parties}</td>
          <td style={{ padding: '12px 16px' }}>{contract.expiry}</td>
          <td style={{ padding: '12px 16px' }}>{contract.status}</td>
          <td style={{ padding: '12px 16px' }}>{contract.risk}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ContractsTable;

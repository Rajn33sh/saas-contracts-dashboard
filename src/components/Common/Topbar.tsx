import React from 'react';

const Topbar: React.FC = () => (
  <header style={{ width: '100%', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 24px' }}>
    <h1 style={{ fontSize: 20, fontWeight: 700 }}>SaaS Contracts Dashboard</h1>
    <div>
      <button style={{ background: '#eee', borderRadius: 20, padding: '8px 20px', border: 'none' }}>Profile</button>
      {/* Add dropdown logic here */}
    </div>
  </header>
);

export default Topbar;

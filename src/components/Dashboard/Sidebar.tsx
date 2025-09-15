import React from 'react';

const Sidebar: React.FC = () => (
  <aside style={{ width: 240, background: '#f5f5f5', height: '100%', padding: 24, display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '2px 0 8px rgba(0,0,0,0.04)' }}>
    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <a href="/dashboard" style={{ fontWeight: 600, color: '#222', textDecoration: 'none', marginBottom: 4 }}>Contracts</a>
      <a href="/insights" style={{ fontWeight: 600, color: '#222', textDecoration: 'none', marginBottom: 4 }}>Insights</a>
      <a href="/reports" style={{ fontWeight: 600, color: '#222', textDecoration: 'none', marginBottom: 4 }}>Reports</a>
      <a href="/settings" style={{ fontWeight: 600, color: '#222', textDecoration: 'none', marginBottom: 4 }}>Settings</a>
    </nav>
  </aside>
);

export default Sidebar;

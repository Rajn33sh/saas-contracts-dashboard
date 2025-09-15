import React from 'react';

interface Evidence {
  source: string;
  snippet: string;
  relevance: number;
}

const EvidenceDrawer: React.FC<{ evidence: Evidence[]; open: boolean; onClose: () => void }> = ({ evidence, open, onClose }) => (
  <div style={{
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100%',
    width: 380,
    background: '#fff',
    boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
    zIndex: 1000,
    transform: open ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s',
  }}>
    <button style={{ position: 'absolute', top: 16, right: 16 }} onClick={onClose}>Close</button>
    <h2 style={{ fontSize: 20, fontWeight: 700, padding: 16 }}>Evidence</h2>
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {evidence.map((ev, idx) => (
        <div key={idx} style={{ background: '#f5f5f5', padding: 12, borderRadius: 6 }}>
          <div style={{ fontWeight: 600 }}>{ev.source}</div>
          <div style={{ fontSize: 14 }}>{ev.snippet}</div>
          <div style={{ fontSize: 12, color: '#888' }}>Relevance: {(ev.relevance * 100).toFixed(0)}%</div>
        </div>
      ))}
    </div>
  </div>
);

export default EvidenceDrawer;

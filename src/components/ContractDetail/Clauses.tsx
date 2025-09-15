import React from 'react';

interface Clause {
  title: string;
  summary: string;
  confidence: number;
}

const Clauses: React.FC<{ clauses: Clause[] }> = ({ clauses }) => (
  <div style={{ display: 'grid', gap: 16 }}>
    {clauses.map((clause, idx) => (
      <div key={idx} style={{ background: '#fff', padding: 16, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <h3 style={{ fontWeight: 600, fontSize: 18, marginBottom: 4 }}>{clause.title}</h3>
        <p style={{ marginBottom: 8 }}>{clause.summary}</p>
        <span style={{ fontSize: 12, color: '#888' }}>Confidence: {(clause.confidence * 100).toFixed(0)}%</span>
      </div>
    ))}
  </div>
);

export default Clauses;

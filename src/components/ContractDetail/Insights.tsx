import React from 'react';

interface Insight {
  risk: string;
  message: string;
}

const riskColor = (risk: string) => {
  if (risk === 'High') return { background: '#ffe5e5', color: '#b71c1c' };
  if (risk === 'Medium') return { background: '#fff8e1', color: '#bfa100' };
  return { background: '#e8f5e9', color: '#1b5e20' };
};

const Insights: React.FC<{ insights: Insight[] }> = ({ insights }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    {insights.map((insight, idx) => (
      <div key={idx} style={{ background: '#fff', padding: 12, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center' }}>
        <span style={{ ...riskColor(insight.risk), padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 700, marginRight: 12 }}>{insight.risk}</span>
        <span>{insight.message}</span>
      </div>
    ))}
  </div>
);

export default Insights;

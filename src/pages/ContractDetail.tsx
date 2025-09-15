import React, { useEffect, useState } from 'react';
import Clauses from '../components/ContractDetail/Clauses';
import Insights from '../components/ContractDetail/Insights';
import EvidenceDrawer from '../components/ContractDetail/EvidenceDrawer';

interface Clause { title: string; summary: string; confidence: number; }
interface Insight { risk: string; message: string; }
interface Evidence { source: string; snippet: string; relevance: number; }

interface ContractDetail {
  id: string;
  name: string;
  parties: string;
  start: string;
  expiry: string;
  status: string;
  risk: string;
  clauses: Clause[];
  insights: Insight[];
  evidence: Evidence[];
}

const ContractDetailPage: React.FC = () => {
  const [contract, setContract] = useState<ContractDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    // Simulate fetching contract detail for id 'c1'
    fetch('/contracts.json')
      .then(res => res.json())
      .then(data => {
        // In real app, fetch /contracts/:id
        setContract({
          ...data[0],
          start: '2023-01-01',
          clauses: [
            { title: 'Termination', summary: '90 days notice period.', confidence: 0.82 },
            { title: 'Liability Cap', summary: '12 months’ fees limit.', confidence: 0.87 }
          ],
          insights: [
            { risk: 'High', message: 'Liability cap excludes data breach costs.' },
            { risk: 'Medium', message: 'Renewal auto-renews unless cancelled 60 days before expiry.' }
          ],
          evidence: [
            { source: 'Section 12.2', snippet: 'Total liability limited to 12 months’ fees.', relevance: 0.91 }
          ]
        });
      })
      .catch(() => setError('Failed to load contract detail'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error || !contract) return <div>{error || 'No contract found.'}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{contract.name}</h2>
      <div className="mb-2 text-gray-600">{contract.parties}</div>
      <div className="mb-2">Start: {contract.start} | Expiry: {contract.expiry}</div>
      <div className="mb-2">Status: {contract.status} | Risk: {contract.risk}</div>
      <button className="mb-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setDrawerOpen(true)}>Show Evidence</button>
      <h3 className="text-xl font-semibold mt-6 mb-2">Clauses</h3>
      <Clauses clauses={contract.clauses} />
      <h3 className="text-xl font-semibold mt-6 mb-2">AI Insights</h3>
      <Insights insights={contract.insights} />
      <EvidenceDrawer evidence={contract.evidence} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
};

export default ContractDetailPage;

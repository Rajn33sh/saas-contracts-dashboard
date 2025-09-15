import { useEffect, useState } from 'react';

export interface Contract {
  id: string;
  name: string;
  parties: string;
  expiry: string;
  status: string;
  risk: string;
}

export const useContracts = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/contracts.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch contracts');
        return res.json();
      })
      .then(data => setContracts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { contracts, loading, error };
};

import React from 'react';

const Loader: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 128 }}>
    <div style={{
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #0070f3',
      borderRadius: '50%',
      width: 48,
      height: 48,
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

export default Loader;

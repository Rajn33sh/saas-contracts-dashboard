import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => (
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16, gap: 8 }}>
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        style={{
          padding: '6px 16px',
          borderRadius: 4,
          background: currentPage === i + 1 ? '#0070f3' : '#eee',
          color: currentPage === i + 1 ? '#fff' : '#222',
          border: 'none',
          fontWeight: 600
        }}
        onClick={() => onPageChange(i + 1)}
      >
        {i + 1}
      </button>
    ))}
  </div>
);

export default Pagination;

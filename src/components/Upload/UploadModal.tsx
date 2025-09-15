import React, { useRef, useState } from 'react';

const UploadModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    setFiles(Array.from(fileList));
    setStatus('uploading');
    setTimeout(() => setStatus('success'), 1500); // Simulate upload
  };

  return open ? (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 16px rgba(0,0,0,0.12)', width: 380, position: 'relative' }}>
        <button style={{ position: 'absolute', top: 8, right: 8, border: 'none', background: 'none', fontSize: 20 }} onClick={onClose}>×</button>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Upload Files</h2>
        <div
          style={{ border: '2px dashed #ccc', borderRadius: 6, padding: 16, textAlign: 'center', cursor: 'pointer', marginBottom: 16 }}
          onClick={() => inputRef.current?.click()}
        >
          Drag & drop files here or <span style={{ color: '#0070f3', textDecoration: 'underline' }}>browse</span>
          <input
            type="file"
            multiple
            ref={inputRef}
            style={{ display: 'none' }}
            onChange={e => handleFiles(e.target.files)}
          />
        </div>
        <ul style={{ marginBottom: 8 }}>
          {files.map((file, idx) => (
            <li key={idx} style={{ fontSize: 14 }}>
              {file.name} - {status === 'uploading' ? 'Uploading...' : status === 'success' ? 'Success' : status === 'error' ? 'Error' : ''}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
};

export default UploadModal;

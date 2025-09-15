import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' // Commenting out index.css as part of the cleanup
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

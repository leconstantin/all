import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Admission from './Admission.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Admission />
  </StrictMode>,
)

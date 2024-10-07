import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Academics from './Academics.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Academics />
  </StrictMode>,
)

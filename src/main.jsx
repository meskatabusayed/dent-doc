import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SiteTheme from './utils/theme/SiteTheme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SiteTheme>
     <App />
    </SiteTheme>
    
  </StrictMode>,
)

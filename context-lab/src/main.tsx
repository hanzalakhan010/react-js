import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import SiteContextProvider from './context/SiteContextProvider.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SiteContextProvider>
        <App />
      </SiteContextProvider>
    </BrowserRouter>
  </StrictMode>,
)

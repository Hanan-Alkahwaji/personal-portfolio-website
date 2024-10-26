import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/personal-portfolio-website/'>
   <StrictMode>
    <App />
  </StrictMode>,
  </BrowserRouter>
 
)

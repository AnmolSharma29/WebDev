import { StrictMode } from 'react' //difference creating framework from state
import { createRoot } from 'react-dom/client' //working on website
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

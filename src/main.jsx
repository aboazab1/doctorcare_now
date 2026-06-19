import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initClientProtection } from './utils/clientProtection.js'
import './index.css'

initClientProtection()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)




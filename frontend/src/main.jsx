<<<<<<< Updated upstream
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
>>>>>>> Stashed changes
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

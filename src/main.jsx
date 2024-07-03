import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Authcontext from './context/Authcontext.jsx'
import SocketProvider from './context/socketProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Authcontext>
        <SocketProvider>
          <App />
        </SocketProvider>
      </Authcontext>
    </BrowserRouter>
  </React.StrictMode>,
)

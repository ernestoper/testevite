import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from './assets/img/portfolio/LOGOCORES/LOGOBRANCA.png';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FloatingWhatsApp         
        phoneNumber="+55 81 9201-9782"
        accountName="Edson"
        allowEsc
        allowClickAway
        notification
        avatar={logo}
        statusMessage="Respondo rapido"
        chatMessage="Oi tudo bom? 🤝 como posoo lhe ajudar?"
        notificationSound/>

  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <About />
    <Contact />
  </React.StrictMode>,
)

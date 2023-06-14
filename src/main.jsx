import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Home from './components/Home';
import Stats from './components/Stats';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Stats />
  </React.StrictMode>,
)

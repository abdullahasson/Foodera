import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Home from './components/Home';
import Stats from './components/Stats';
import About from './components/About';
import Video from './components/Video';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Explore from './components/Explore';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Stats />
    <About />
    <Video />
    <Explore />
  </React.StrictMode>,
)

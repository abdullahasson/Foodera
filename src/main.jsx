import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Home from './components/Home';
import Stats from './components/Stats';
import About from './components/About';
import Video from './components/Video';
import Explore from './components/Explore';
import Testimonials from './components/Testimonials';
import Frequently from './components/Frequently';
import Baked from './components/Baked';
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Stats />
    <About />
    <Video />
    <Explore />
    <Testimonials />
    <Frequently />
    <Baked />
    <Form />
  </React.StrictMode>,
)

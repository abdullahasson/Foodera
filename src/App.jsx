import { useEffect } from 'react';
import AOS from 'aos';
import Header from "./components/Header"
import Home from './components/Home';
import Stats from './components/Stats';
import About from './components/About';
import Video from './components/Video';
import Explore from './components/Explore';
import Testimonials from './components/Testimonials';
import Frequently from './components/Frequently';
import Baked from './components/Baked';
import Form from './components/Form';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const App = () => {

    useEffect(() => {
        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
            duration: 1000, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true
        });
    })


    return (
        <>
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
            <Footer />
        </>
    )
}

export default App
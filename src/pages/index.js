import React, { useState } from 'react';
import About from '../components/About';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;

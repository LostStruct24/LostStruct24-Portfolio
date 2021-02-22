import React, { useState } from 'react';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import ProjectsSidebar from '../components/Sidebar/ProjectsSidebar';
import ProjectsNavbar from '../components/Navbar/ProjectsNavbar';
import { NeutrinoVPN, PizzaRestaurant, Covid19Tracker, ChatApp, RoboFriends, ToDoList, BurgerApp, BmiCalculator } from '../components/Projects/Data';
import ScrollToTop from '../components/ScrollToTop';

const ProjectsPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop />
            <ProjectsSidebar isOpen={isOpen} toggle={toggle}/>
            <ProjectsNavbar toggle={toggle} />
            <Projects {...NeutrinoVPN} />
            <Projects {...PizzaRestaurant} />
            <Projects {...Covid19Tracker} />
            <Projects {...ChatApp} />
            <Projects {...RoboFriends} />
            <Projects {...ToDoList} />
            <Projects {...BurgerApp} />
            <Projects {...BmiCalculator} />
            <Footer />
        </>
    )
}

export default ProjectsPage;
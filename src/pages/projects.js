import React, { useState } from 'react';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Github from '../components/Github';
import ProjectsSidebar from '../components/Sidebar/ProjectsSidebar';
import ProjectsNavbar from '../components/Navbar/ProjectsNavbar';
import { NeutrinoVPN, PizzaRestaurant, Covid19Tracker, ChatApp, RoboFriends, ToDoList, BurgerApp, BmiCalculator, AIPhotoGenerator, ClimateGe, TemperatureConverter, AIFaceDetector, YoutubeViewer, WeatherFinder, LostStruct24Portfolio } from '../components/Projects/Data';
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
            <Projects {...LostStruct24Portfolio} />
            <Projects {...ClimateGe} />
            <Projects {...Covid19Tracker} />
            <Projects {...PizzaRestaurant} />
            <Projects {...BmiCalculator} />
            <Projects {...YoutubeViewer} />
            <Projects {...AIFaceDetector} />
            <Projects {...AIPhotoGenerator} />
            <Projects {...TemperatureConverter} />
            <Projects {...ChatApp} />
            <Projects {...RoboFriends} />
            <Projects {...BurgerApp} />
            <Projects {...WeatherFinder} />
            <Projects {...ToDoList} />
            <Github />
            <Footer />
        </>
    )
}

export default ProjectsPage;
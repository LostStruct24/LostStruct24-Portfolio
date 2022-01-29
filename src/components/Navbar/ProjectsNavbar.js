import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import { ProjectsNav, NavbarContainer, ProjectsNavLogo, ProjectsNavItem, ProjectsNavMenu, ProjectsNavLink, MobileIcon } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

const ProjectsNavbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const  toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{color: '#e1e5e8'}}>
                <ProjectsNav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <ProjectsNavLogo to="/LostStruct24-Portfolio" onClick={toggleHome}>LostStruct24</ProjectsNavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <ProjectsNavMenu>
                            <ProjectsNavItem>
                                <ProjectsNavLink to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Projects</ProjectsNavLink>
                            </ProjectsNavItem>
                        </ProjectsNavMenu>
                    </NavbarContainer>
                </ProjectsNav>
            </IconContext.Provider>
        </>
    )
}

export default ProjectsNavbar;

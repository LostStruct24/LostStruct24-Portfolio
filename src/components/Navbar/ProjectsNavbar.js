import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavItem, NavMenu, NavLinks, MobileIcon } from './NavbarElements';
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
            <IconContext.Provider value={{color: '#275e75'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/LostStruct24-Portfolio" onClick={toggleHome}>LostStruct24</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                    </NavbarContainer>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Projects 💻</NavLinks>
                            </NavItem>
                        </NavMenu>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default ProjectsNavbar;

import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#5D7772' : '#43616F')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #E5F2F0;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (min-width: 1000px) {
        font-size: 2rem;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        margin-top: 20px;
        margin-right: 20px;
        top: 0;
        right: 0;
        transform: translate(-100, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #B6E2D3;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #E5F2F0;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 20px;

    &.active {
        border-bottom: 3px solid #EEEDE7;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #637E90;
    display: flex;
    align-items: center;
    white-space: nowrap;
    padding: 10px 22px;
    color: #E5F2F0;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 20px;

    &:hover {
        transition: all 0.2 ease-in-out;
        background: #E5F2F0;
        color: #637E90;
    }
`;


//Projects Navbar //
export const ProjectsNav = styled.nav`
    background: #182d36;
    height: 80px;
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const ProjectsNavLogo = styled(LinkR)`
    color: #e5f2f0;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (min-width: 1000px) {
        font-size: 1.7rem;
    }
`;

export const ProjectsNavLink = styled(LinkS)`
    color: #E5F2F0;
    text-decoration: none;
    display: flex;
    margin-top: 5px;
    align-items: center;
    padding: 0 2rem;
    height: 72%;
    cursor: pointer;
    font-size: 18px;

    &.active {
        border-bottom: 3px solid #EEEDE7;
    }

`;

export const ProjectsNavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-top: 5px;
    margin-left: 25px;
    font-size: 18px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;



import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

class Navbar extends Component {
    state={};
    render () {
        return (
            <div className={styles.Navbar}>
                <ul>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/Skills">Skills and Experience</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
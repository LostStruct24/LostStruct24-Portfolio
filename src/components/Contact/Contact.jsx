import React from 'react';
import Github from '../../assets/images/Github.png';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.Contact}>
            <h1>Contact Me 📧</h1>
            <div className={styles.link}>
                <a href="mailto:loststruct24@gmail.com">LostStruct24@gmail.com</a>
            </div>
            <a href="https://github.com/LostStruct24"
               target="_blank"
               rel="noreferrer" >
                <img src={Github} 
                alt="LostStruct24"
                height="40px" 
                width="40px"
                style={{ marginTop: '20px' }}/>
            </a>
        </div>
    );
}

export default Contact;
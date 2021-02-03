import React from 'react';
import Github from '../../assets/images/Github.png';
import Gmail from '../../assets/images/Mail.png';
import cx from 'classnames';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.About}>
            <h1> {'<'} LostStruct24 {'/>'}</h1>
            <div class={styles.cow}>
                <div class={styles.horns}></div>
                <div class={styles.head}>
                <div class={cx(styles.eye, styles.left)}></div>
                <div class={cx(styles.eye, styles.right)}></div>
                <div class={styles.nose}>
                    <div class={styles.mouth}></div>
                </div>
                </div>
            </div>
            <h2>• Designer & front-end web developer •</h2>
            <a href="https://github.com/LostStruct24"
               target="_blank"
               rel="noreferrer" >
                <img src={Github} 
                alt="LostStruct24"
                height="40px" 
                width="40px"
                class="w3-hover-grayscale"
                style={{ marginTop: '20px' }}/>
            </a>
            <a href="mailto:loststruct24@gmail.com"
               target="_blank"
               rel="noreferrer" >
                <img src={Gmail} 
                alt="LostStruct24"
                height="40px" 
                width="40px"
                class="w3-hover-grayscale"
                style={{ marginLeft: '20px', marginTop: '20px' }}/>
            </a>
        </div>
    );
}

export default About;
import React from 'react';
import Covid19Tracker from '../../assets/images/Covid19Tracker.png';
import RoboFriends from '../../assets/images/RoboFriends.png';
import ToDoList from '../../assets/images/ToDoList.png';
import BurgerBuilder from '../../assets/images/Burger.png';
import ChatApp from '../../assets/images/ChatApp.png';
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.Projects}>
            <h1>Projects 💻</h1>
            <p>• Web Projects I've Built •</p>
            <div className={styles.Covid19}>
                <img src={Covid19Tracker} alt="Covid-19"></img>
                <h1>Covid-19 Tracker</h1>
                <p>Covid-19 Tracker Application Made with ReactJs.<br /><button><a href="https://github.com/LostStruct24/Covid-19-Tracker" target="_blank" rel="noreferrer">Repo</a></button></p>
            </div>
            <div className={styles.ChatApp}>
                <img src={ChatApp} alt="Chat-App"></img>
                <h1>Chat App</h1>
                <p>Super chat app made with ReactJS and Firebase.<br /><button><a href="https://github.com/LostStruct24/ChatApp" target="_blank" rel="noreferrer">Repo</a></button></p>
            </div>
            <div className={styles.RoboFriends}>
                <img src={RoboFriends} alt="RoboFriends"></img>
                <h1>RoboFriends</h1>
                <p>React app that searches through an API of random robots.<br/> It's fully responsive and functional in different screen sizes.<br /><button><a href="https://github.com/LostStruct24/RoboFriends" target="_blank" rel="noreferrer">Repo</a></button></p>
            </div>
            <div className={styles.ToDoList}>
                <img src={ToDoList} alt="ToDoList"></img>
                <h1>ToDoList</h1>
                <p>A simple to do list app built in react.<br /><button><a href="https://github.com/LostStruct24/ToDoList" target="_blank" rel="noreferrer">Repo</a></button></p>
            </div>
            <div className={styles.BurgerBuilder}>
                <img src={BurgerBuilder} alt="BurgerApp"></img>
                <h1>BurgerApp</h1>
                <p>A Burger builder App built using ReactJs and ReduxJs.<br /><button><a href="https://github.com/LostStruct24/BurgerApp" target="_blank" rel="noreferrer">Repo</a></button></p>
            </div>
            <div className={styles.github}>
                <p><br /><button><a href="https://github.com/LostStruct24" target="_blank" rel="noreferrer">See More<br/>On GitHub</a></button></p>
            </div>
        </div>
    );
}

export default Projects;
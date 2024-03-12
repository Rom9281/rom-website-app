import React, { useState } from 'react';
import { NavigationBar } from '../components/nav_bar/NavigationBar';
import { ContactElement } from '../components/contact/ContactElement';
import { ExperienceElement } from '../components/experience/ExperienceElement';
import experienceList from '../data/Experiences.json';
import './Home.css';

export const Home = () => {

    return (
        <>
            <NavigationBar />
            <div className='img-container'>
                <div className="welcome-text">Romain's curriculum vitae</div>
                <img src="home_img/venise.jpg" />
            </div>

            <div className="home-text">
                <h1>Who am I ?</h1>
                <p>My name is Romain, I am a 24 years old student in computer science.
                I have completed my final year in the ETI program (electronics - telecommunications – IT,) majoring in Software Design and Big Data. I am currently persuing the first semester of a management masters at EM Lyon Business School. I am eager to embark on an internship for my Final Year Project to complete my engineering cycle; I'd be willing to start in June 2024, for a period of around 8 months.
                </p>
            </div>

            <div className="home-text">
            <h1>Experiences</h1>
            <div className="contact-boxes">
                {experienceList.map((contact, index) => (
                    <ExperienceElement key={index} props={contact} />
                ))}
            </div>
            </div>
        </>
    );
}

export default Home;
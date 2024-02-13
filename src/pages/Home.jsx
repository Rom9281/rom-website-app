import React, { useState } from 'react';
import { NavigationBar } from '../components/nav_bar/NavigationBar';
import './Home.css';

export const Home = () => {

    return (
        <>
        <NavigationBar />
        <div className='img-container'>
            <div className="welcome-text">Romain's curriculum vitae</div>
            <img src="home_img/venise.jpg" />
        </div>
        
        </>
    );
}

export default Home;
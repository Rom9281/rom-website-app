import React from 'react';
import { NavigationBar } from '../components/nav_bar/NavigationBar';

export const Home = () => {
    return (
        <div className='responsive-container'>
            <NavigationBar />
            <img
                src="home_img/venise.jpg"
            />
        </div>


    );
}

export default Home;
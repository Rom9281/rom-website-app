import React, { useState } from 'react';
import { NavigationBar } from '../components/nav_bar/NavigationBar';
import './Home.css';

export const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        "home_img/venise.jpg",
        "home_img/venise.jpg",
        "home_img/venise.jpg",
        // Add more image paths here
    ];

    const handlePrevImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    const handleNextImage = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    return (
        <>
        <NavigationBar />
        <div className='img-container'>
            <div className="welcome-text">Romain's Corner</div>
            <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
        </div>
        
        </>
    );
}

export default Home;
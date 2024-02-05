import React from 'react';
import { NavigationBar } from '../components/nav_bar/NavigationBar';

export const Home = () => {
    return (
        <>
            
            <div>
                <h1>Curriculum Vitae de Romain Gaud</h1>
            </div>
            <NavigationBar />
            <div>
                <a href='https://www.linkedin.com/in/romain-gaud/'>LinkedIn</a>  
            </div>

            
        </>
    );
}

export default Home;
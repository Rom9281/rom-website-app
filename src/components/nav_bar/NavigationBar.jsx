import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavigationBarElement } from './nav_bar_element/NavigationBarElement';
import './NavigationBar.css';

export const NavigationBar = () => {

    return (
        <div >
            <Navbar
                className='flex-nav-bar fixed-top nav-bar-font'
                data-bs-theme="dark"
            >
                <Container>
                    <Navbar.Brand
                        className='nav-bar-brand'
                    >Romain Gaud</Navbar.Brand>
                    <NavigationBarElement props={
                        {
                            name: "Home",
                            route: "/"
                        }
                    } />
                    <NavigationBarElement props={
                        {
                            name: "Contact Me",
                            route: "/contacts"
                        }
                    } />
                </Container>

            </Navbar>
        </div>

    );
};



export default NavigationBar;
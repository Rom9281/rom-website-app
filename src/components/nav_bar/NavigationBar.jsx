import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavigationBarElement } from './nav_bar_element/NavigationBarElement';

export const NavigationBar = () => {

    return (
        <div className='flex-nav-bar'>
            <Navbar
                bg="primary" data-bs-theme="dark"
            >
                <Container>
                    <Navbar.Brand>Romain Gaud</Navbar.Brand>
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
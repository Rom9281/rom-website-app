import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavigationBarElement } from './nav_bar_element/NavigationBarElement';

export const NavigationBar = () => {

    return (
        <Navbar
            expand="lg"
            className="navbar navbar-dark bg-dark"
        >
            <Container>
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

    );
};



export default NavigationBar;
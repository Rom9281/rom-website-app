import React from 'react';
import Navbar from 'react-bootstrap/Nav';
import './NavigationBarElement.css';

export const NavigationBarElement = ({ props }) => {
    return (
        <Navbar.Link
            href={props.route}
            className="nav-link text-white nav-bar-text-element"
        >{props.name}</Navbar.Link>
    );
};



export default NavigationBarElement;
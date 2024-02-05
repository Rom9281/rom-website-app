import React from 'react';
import Navbar from 'react-bootstrap/Nav';

export const NavigationBarElement = ({ props }) => {
    return (
        <Navbar.Link
            href={props.route}
            className="nav-link text-white"
        >{props.name}</Navbar.Link>
    );
};



export default NavigationBarElement;
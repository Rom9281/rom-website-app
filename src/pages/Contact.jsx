import React from 'react';
import contactsList  from '../data/Contacts';
import { ContactElement } from '../components/contact/ContactElement';
import { NavigationBar } from '../components/nav_bar/NavigationBar';

export const Contact = () => {
    return (
        <>
            <div>
                <h1>Contact</h1>
            </div>
            <NavigationBar />
            {contactsList.map((contact, index) => (
                <ContactElement key={index} props={contact} />
            ))}
        </>
    );
}

export default Contact;
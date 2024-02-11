import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './ContactElement.css';

export const ContactElement = ({ props }) => {

    const handleClick = () => {
        window.location.href = props.url;
    };

    return (
        <div onClick={handleClick}>
            <div className="contact-wrapper">
                <Row>
                    <Col>
                        <div 
                            className="center-block"
                        >
                            <img
                            className='contact-image'
                                src={props.img}
                                alt="Contact Image"
                                width="100"
                                height="100"
                            />
                        </div>
                    </Col>
                    <Col className='d-flex align-items-center'>
                        <h1>{props.mediaName}</h1>
                    </Col>
                    <Col className='d-flex align-items-center'>
                        <h2>{props.info}</h2>
                    
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ContactElement;
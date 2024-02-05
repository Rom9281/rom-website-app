import React from 'react';
import { Row, Col } from 'react-bootstrap';

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
                            class="contact-element center-block"
                            className="contact-element center-block"
                        >
                            <img
                                src={props.img}
                                alt="Contact Image"
                                width="100"
                                height="100"
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className="contact-element">
                            <h1>{props.mediaName}</h1>
                            <h2>{props.info}</h2>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ContactElement;
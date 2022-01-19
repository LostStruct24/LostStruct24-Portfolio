import React from 'react';
import { ContactContainer, ContactH1, ContactWrapper, ContactMail } from './ContactElements';

const Contact = () => {
    return (
        <ContactContainer id="contact">
            <ContactH1>Contact Me</ContactH1>
            <ContactWrapper>
                <ContactMail href="mailto:loststruct24@gmail.com"
                    target="_blank"
                    aria-label="Gmail" 
                    rel="noreferrer">LostStruct24@gmail.com</ContactMail>
            </ContactWrapper>
        </ContactContainer>
    );
}

export default Contact;

import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { SiGithub, SiGmail } from 'react-icons/si';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, FooterLogo, WebsiteRights, SocialIcons, SocialIconLink,  } from './FooterElements';

const Footer = () => {
    const  toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <FooterLogo to='/LostStruct24-Portfolio' onClick={toggleHome}>LostStruct24</FooterLogo>
                        <WebsiteRights>LostStruct24 © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//github.com/LostStruct24" 
                                target="_blank" 
                                aria-label="Github" 
                                rel="noreferrer">
                                <SiGithub />
                            </SocialIconLink>
                            <SocialIconLink href="mailto:loststruct24@gmail.com"
                                target="_blank"
                                aria-label="Gmail" 
                                rel="noreferrer">
                                <SiGmail />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;

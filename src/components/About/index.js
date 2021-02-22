import React, { useState } from 'react';
import { Cow } from '../CssCow/Cow';
import { SiGithub } from 'react-icons/si';
import { AboutContainer, AboutBg, AboutContent, AboutH1, AboutP, AboutBtnWrapper, AboutBtn } from './AboutElements';

const About = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>  {
        setHover(!hover)
    }

    return (
        <AboutContainer id="home">
            <AboutBg></AboutBg>
            <AboutContent>
                <Cow />
                <AboutH1>{"<"} LostStruct24 {"/>"}</AboutH1>
                <AboutP>
                    • Front-end web developer & designer •
                </AboutP>
                <AboutBtnWrapper>
                    <AboutBtn href="//github.com/LostStruct24" 
                    target="_blank" 
                    aria-label="Github" 
                    rel="noreferrer" ><SiGithub style={{color: '#275e75', height: '40px', width: '40px' }}/></AboutBtn>
                </AboutBtnWrapper>
            </AboutContent>
        </AboutContainer>
    )
}

export default About;
import React from 'react';
import { Cow } from '../CssCow/Cow';
import { SiGithub } from 'react-icons/si';
import { AboutContainer, AboutBg, AboutContent, AboutH1, AboutP, AboutBtnWrapper, AboutBtn } from './AboutElements';
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          value_area: 700
        }
      }
    }
  }
  
const About = () => {
    return (
        <AboutContainer id="home">
            <AboutBg><Particles className='particles'
            params={particlesOptions} /></AboutBg>
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
                    rel="noreferrer" ><SiGithub style={{color: '#e1e5e8', height: '50px', width: '50px' }}/></AboutBtn>
                </AboutBtnWrapper>
            </AboutContent>
        </AboutContainer>
    )
}

export default About;

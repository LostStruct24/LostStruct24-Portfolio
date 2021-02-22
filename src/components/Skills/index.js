import React from 'react';
import { SkillsContainer, SkillsH1, SkillsH2, SkillsWrapper, SkillsCard, SkillsP } from './SkillsElements';
import { SiAdobephotoshop, SiPython } from 'react-icons/si';
import { DiCode } from 'react-icons/di';

const Services = () => {
    return (
        <SkillsContainer id="skills">
            <SkillsH1>Skills and Experience 🎓</SkillsH1>
            <SkillsWrapper>
                <SkillsCard>
                    <DiCode style={{color: '#275e75', height: '50px', width: '50px', marginBottom: '15px' }} />
                    <SkillsH2>Front-End Web Developer</SkillsH2>
                    <SkillsP>HTML<br/>CSS<br/>JavaScript<br/>ReactJS</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SiAdobephotoshop style={{color: '#275e75', height: '30px', width: '30px', marginBottom: '15px' }} />
                    <SkillsH2>Designer</SkillsH2>
                    <SkillsP>Photoshop</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SiPython style={{color: '#275e75', height: '30px', width: '30px', marginBottom: '15px' }} />
                    <SkillsH2>Other Languages I'm Learning</SkillsH2>
                    <SkillsP>Python</SkillsP>
                </SkillsCard>
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default Services;

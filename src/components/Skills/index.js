import React from 'react';
import { SkillsContainer, SkillsH1, SkillsH2, SkillsWrapper, SkillsCard, SkillsP } from './SkillsElements';
import { SiAdobephotoshop, SiPython } from 'react-icons/si';
import { DiCode } from 'react-icons/di';

const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <SkillsH1>Skills and Experience</SkillsH1>
            <SkillsWrapper>
                <SkillsCard>
                    <DiCode style={{color: '#637E90', height: '50px', width: '50px', marginBottom: '15px' }} />
                    <SkillsH2>Front-End Web Developer</SkillsH2>
                    <SkillsP>HTML<br/>CSS<br/>JavaScript<br/>ReactJS</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SiAdobephotoshop style={{color: '#637E90', height: '30px', width: '30px', marginBottom: '15px' }} />
                    <SkillsH2>Designer</SkillsH2>
                    <SkillsP>Photoshop</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SiPython style={{color: '#637E90', height: '30px', width: '30px', marginBottom: '15px' }} />
                    <SkillsH2>I'm Currently Learning</SkillsH2>
                    <SkillsP>AngularJS<br />Node.js<br />Python</SkillsP>
                </SkillsCard>
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default Skills;

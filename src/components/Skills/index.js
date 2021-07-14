import React from 'react';
import { SkillsContainer, SkillsH1, SkillsH2, SkillsWrapper, SkillsCard, SkillsP } from './SkillsElements';
import { SiAdobephotoshop, SiAngular, SiJavascript, SiHtml5, SiCss3, SiReact, SiGithub, SiGimp, SiArchlinux, SiPython, SiGit, SiVisualstudiocode, SiAtom, SiFirebase } from 'react-icons/si';

const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <SkillsH1>Skills and Experience</SkillsH1>
            <SkillsWrapper>
                <SkillsCard>
                    <SkillsH2>Front-End</SkillsH2>
                    <SkillsP><SiJavascript /> JavaScript</SkillsP>
                    <SkillsP><SiReact /> ReactJS</SkillsP>
                    <SkillsP><SiHtml5 /> HTML</SkillsP>
                    <SkillsP><SiCss3 /> CSS</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillsH2>Designer</SkillsH2>
                    <SkillsP><SiAdobephotoshop /> Photoshop</SkillsP>
                    <SkillsP><SiGimp /> GIMP</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillsH2>Tools</SkillsH2>
                    <SkillsP><SiGithub /> GitHub</SkillsP>
                    <SkillsP><SiGit /> Git</SkillsP>
                    <SkillsP><SiFirebase /> Firebase</SkillsP>
                    <SkillsP><SiVisualstudiocode /> Visual Studio Code</SkillsP>
                    <SkillsP><SiAtom /> Atom</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillsH2>Currently Learning</SkillsH2>
                    <SkillsP><SiAngular /> AngularJS</SkillsP>
                    <SkillsP><SiPython /> Python</SkillsP>
                    <SkillsP><SiArchlinux /> Linux</SkillsP>

                </SkillsCard>
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default Skills;

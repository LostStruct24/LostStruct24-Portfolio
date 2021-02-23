import React from 'react';
import { ProjectContainer, ProjectWrapper, ProjectRow, Column1, Column2, TextWrapper, Heading, Subtitle, BtnWrap, ImgWrap, Img, ProjectsButton, TopLine, ImgLink } from './ProjectsElements';

const Projects = ({lightBg, id, imgLink, imgStart, lightText, topLine, headline,  darkText, description, buttonLabel, img, alt, projectsButton }) => {
    return (
        <>
            <ProjectContainer lightBg={lightBg} id={id}>
                <ProjectWrapper>
                <ProjectRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine href={topLine} target="_blank" rel="noreferrer" >{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <ProjectsButton href={projectsButton} target="_blank" rel="noreferrer" >{buttonLabel}</ProjectsButton>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <ImgLink href={imgLink} target="_blank" rel="noreferrer" ><Img src={img} alt={alt} /></ImgLink>
                                
                            </ImgWrap>
                        </Column2>
                    </ProjectRow>
                </ProjectWrapper>
            </ProjectContainer>
        </>
    )
}

export default Projects;

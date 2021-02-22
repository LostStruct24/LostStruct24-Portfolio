import React from 'react';
import { ProjectContainer, ProjectWrapper, ProjectRow, Column1, Column2, TextWrapper, Heading, Subtitle, BtnWrap, ImgWrap, Img, ProjectsButton } from './ProjectsElements';

const Projects = ({lightBg, id, imgStart, lightText, headline,  darkText, description, buttonLabel, img, alt, projectsButton }) => {
    return (
        <>
            <ProjectContainer lightBg={lightBg} id={id}>
                <ProjectWrapper>
                <ProjectRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <ProjectsButton href={projectsButton} target="_blank" rel="noreferrer" >{buttonLabel}</ProjectsButton>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </ProjectRow>
                </ProjectWrapper>
            </ProjectContainer>
        </>
    )
}

export default Projects;

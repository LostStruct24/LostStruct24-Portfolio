import React from 'react';
import { GithubContainer, GithubH1, GithubWrapper, Github } from './GithubPageElements';

const GithubPage = () => {
    return (
        <GithubContainer id="github">
            <GithubH1>More Projects: </GithubH1>
            <GithubWrapper>
                <Github href="https://github.com/loststruct24"
                    target="_blank"
                    aria-label="Github" 
                    rel="noreferrer">https://github.com/loststruct24</Github>
            </GithubWrapper>
        </GithubContainer>
    );
}

export default GithubPage;
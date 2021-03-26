import styled from 'styled-components';

export const GithubContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #364e59;

    @media screen and (max-width: 768px) {
        height: 1000px;
    }

    @media screen and (max-width: 480px) {
        height: 500px;
    }
`;

export const GithubWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    align-items: center;
    padding: 0 50px;
`;

export const GithubH1 = styled.h1`
    font-size: 2.5rem;
    color: #B6E2D3;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

    &:focus, &:hover {
        transform: rotate(3deg);
    }
`;

export const Github = styled.a`
    display: flex;
    justify-content: center;
    color: #E5F2F0;
    font-size: 25px;
    align-items: center;
    text-shadow: 0 0.5px #43616F;
`;
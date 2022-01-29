import styled from 'styled-components';

export const GithubContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #1e2834;

    @media screen and (min-width:200px) and (max-width:800px) {
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
    color: #e1e5e8;
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

    @media screen and (min-width:200px) and (max-width:800px) {
        font-size: 20px;
    }
`;
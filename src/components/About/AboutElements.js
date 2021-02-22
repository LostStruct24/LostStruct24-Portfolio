import styled from 'styled-components';

export const AboutContainer = styled.div`
    background: #c1d3e0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 700px;
    position: relative;
    z-index: 1;
`;

export const AboutBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;


export const AboutContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AboutH1 = styled.h1`
    color: #275e75;
    font-size: 48px;
    text-shadow: 0 2px rgb(109, 155, 173);
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

    &:focus, &:hover {
        transform: rotate(3deg);
    }
`;

export const AboutP = styled.p`
    margin-top: 24px;
    color: #346d85;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

    &:focus, &:hover {
        transform: rotate(2deg);
    }
`;

export const AboutBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AboutBtn = styled.a`
    align-items: center;
    transition: all 1s;

    &:hover {
        transform: scale(1.1);
    }
`;
import styled from 'styled-components';

export const AboutContainer = styled.div`
    background: linear-gradient(to right, rgb(182, 226, 211) 40% ,rgb(165, 194, 212) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 680px;
    position: relative;
    z-index: 1;

    @media screen and (min-width:200px) and (max-width:800px) {
        height: 750px;
    }

    @media screen and (min-width: 1000px) {
        height: 950px;
    }
`;

export const AboutBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
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
    color: #3d5966;
    font-size: 48px;
    text-shadow: 0 1px #5D7772;
    text-align: center;
    
    @media screen and (min-width: 1000px) {
        font-size: 60px;
    }

    @media screen and (min-width:200px) and (max-width:800px) {
        font-size: 27px;
    }

    &:focus, &:hover {
        transform: rotate(3deg);
    }
`;

export const AboutP = styled.p`
    margin-top: 24px;
    color: #43616F;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (min-width: 1000px) {
        font-size: 30px;
    }

    @media screen and (min-width:200px) and (max-width:800px) {
        font-size: 24px;
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

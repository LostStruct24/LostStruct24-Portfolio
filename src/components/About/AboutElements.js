import styled from 'styled-components';

export const AboutContainer = styled.div`
    background: #0c0f16;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1000px;
    position: relative;
    z-index: 1;
    
    @media screen and (max-height: 820px) {
        height: 700px;
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
    color: #e1e5e8;
    font-size: 48px;
    text-shadow: 0 1px #5D7772;
    text-align: center;

    &:focus, &:hover {
        transform: rotate(3deg);
    }
`;

export const AboutP = styled.p`
    margin-top: 24px;
    color: #e1e5e8;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

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

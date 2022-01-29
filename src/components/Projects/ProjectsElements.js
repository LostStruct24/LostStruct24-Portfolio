import styled from 'styled-components';

export const ProjectContainer = styled.div`
    display: flex;
    color: #EEEDE7;
    background: ${({lightBg}) => (lightBg ? '#e1e5e8' : '#10181f')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const ProjectWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 400px;
    width: 100%;
    max-width: 1100px;
    margin:  auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (min-width:200px) and (max-width:800px) {
        height: 560px;
    }
`;

export const ProjectRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 16px;
`;

export const Heading = styled.h1`
    font-size: 30px;
    line-height: 1.5;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#E5F2F0' : '#0c0f16')};
`;

export const Subtitle = styled.p`
    max-width: 440px;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#0c0f16' : '#E5F2F0')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ProjectsButton = styled.a`
    display: flex;
    justify-content: flex-start;
    border-radius: 50px;
    background: #99cde9;
    padding: 14px 48px;
    color: #0c0f16;
    text-decoration: none;
    font-size: 17px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #859cab;
        color: #fff;
    }
`;

export const ImgWrap = styled.div`
    max-width: 500px;
    height: 100%;
`;

export const Img = styled.img`
    width: 80%;
    margin: 0 0 10px 50px;
    padding-right: 0;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 480px) {
        margin: 0 0 10px 20px;
    }
`;

export const TopLine = styled.a`
    color: ${({lightText}) => (lightText ? '#92cde9' : '#0c0f16')};
    font-size: 17px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    text-decoration: none;
`;

export const ImgLink = styled.a`
    cursor: pointer;
`;

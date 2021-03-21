import styled from 'styled-components';

export const ProjectContainer = styled.div`
    color: #EEEDE7;
    background: ${({lightBg}) => (lightBg ? '#B6E2D3' : '#4b615d')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const ProjectWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 600px;
    width: 100%;
    max-width: 1100px;
    margin:  auto;
    padding: 0 24px;
    justify-content: center;
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
    font-size: 48px;
    line-height: 1.5;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#E5F2F0' : '#152D2E')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#152D2E' : '#E5F2F0')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ProjectsButton = styled.a`
    display: flex;
    justify-content: flex-start;
    border-radius: 50px;
    background: #647c90;
    padding: 14px 48px;
    color: #E5F2F0;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #B6E2D3;
        color: #43616F;
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const TopLine = styled.a`
    color: ${({lightText}) => (lightText ? '#B6E2D3' : '#152D2E')};
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
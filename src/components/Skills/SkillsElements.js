import styled from 'styled-components';

export const SkillsContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #364e59;
    
    @media screen and (min-width:200px) and (max-width:800px) {
        height: 1100px;
    }
    
    @media screen and (min-width: 1500px) {
        height: 900px;
    }
`;

export const SkillsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    margin-bottom: 80px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        padding: 20px 50px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const SkillsCard = styled.div`
    background: #EEEDE7;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    height: 100%;
    max-height: 300px;
    padding: 30px 30px 30px 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (min-width: 1000px) {
        max-height: 500px;
    }
`;

export const SkillsH1 = styled.h1`
    font-size: 2.5rem;
    color: #B6E2D3;
    margin-bottom: 85px;

    @media screen and (min-width:200px) and (max-width:800px) {
        font-size: 1.5rem;
    }
    
    &:focus, &:hover {
        transform: rotate(3deg);
    }
`;

export const SkillsH2 = styled.h2`
    font-size: 20px;
    margin-bottom: 20px;
    color: #43616F;

    @media screen and (min-width: 900px) {
        font-size: 25px;
    }
`;

export const SkillsP = styled.p`
    font-size: 20px;
    text-align: center;
    color: #43616F;
    margin-bottom: 8px;

    @media screen and (min-width: 900px) {
        font-size: 22px;
    }
`;

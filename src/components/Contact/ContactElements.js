import styled from 'styled-components';

export const ContactContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #B6E2D3;

    @media screen and (min-width:200px) and (max-width:800px) {
        height: 750px;
    }

    @media screen and (min-width: 1500px) {
        height: 900px;
    }
`;

export const ContactWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    align-items: center;
    padding: 0 50px;
`;

export const ContactH1 = styled.h1`
    font-size: 2.5rem;
    color: #3d5966;
    margin-bottom: 85px;

    @media screen and (min-width:200px) and (max-width:800px) {
        font-size: 1.5rem;
    }


    &:focus, &:hover {
        transform: rotate(3deg);
    }
`;

export const ContactMail = styled.a`
    display: flex;
    justify-content: center;
    color: #43616F;
    font-size: 25px;
    align-items: center;
    text-shadow: 0 0.5px #5D7772;
    margin-bottom: 80px;

    @media screen and (min-width:200px) and (max-width:800px) {
        font-size: 20px;
    }

    @media screen and (min-width: 1000px) {
        font-size: 30px;
    }
`;

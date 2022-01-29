import styled from 'styled-components';

export const ContactContainer = styled.div`
    height: 1000px;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #10181f;

    @media screen and (max-height: 820px) {
        height: 700px;
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
    color: #e1e5e8;
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
    color: #e1e5e8;
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

import styled from 'styled-components';


export const Section = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 48px 0 72px;
    text-align: center;

    @media (min-width: 1440px) {
       flex-direction: row;
       justify-content: space-evenly;
       margin: 70px 90px 220px;
    }

    &::after {
        content: '';
        position: absolute;
        z-index: -100;
        width: 304px;
        height: 152px;
        right: 52px;
        top: -50px;
        border-radius: 0 0 12rem 12rem;
        background: ${props => props.color === 'dark' ? '#E0F2FE' : '#CFFAFE'};

        @media (min-width: 768px) {
            width: 624px;
            height: 312px;
            border-radius: 0 0 20rem 20rem;

        }

        @media (min-width: 1440px) {
            width: 760px;
            height: 380px;
            top: -70px;
            left: -50px;
            border-radius: 0 0 24rem 24rem;
        }
    }
`;

export const Title = styled.h2`
    font-size: 36px;
    font-weight: 600;
    line-height: 48px;
    color: #111827;

     @media (min-width: 768px) {
        font-size: 48px;
        line-height: 60px;
    }

    @media (min-width: 1440px) {
        text-align: left;
        font-size: 56px;
        line-height: 72px;
    }
`;

export const Subtitle = styled.p`
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 24px;
    color: #374151;

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 28px;
    }
`;

export const Logos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;

    @media (min-width: 768px) {
        gap: 80px;
        margin: 0 80px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    border-radius: 100px;
    transition: 0.5s;

    &:hover {
        transform: scale(1.1);
    }

    @media (min-width: 768px) {
        width: 80px;
    height: 80px;
    }
`;

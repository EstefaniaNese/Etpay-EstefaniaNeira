import styled from 'styled-components';

export const Container = styled.footer`
    padding-top: 64px;
    padding-bottom: 24px;
    background: #111827;
`;


export const Title = styled.h2`
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    line-height: 40px;
    color: #FFFFFF;

    @media (min-width: 768px) {
        font-size: 36px;
        line-height: 48px;
    }

    @media (min-width: 1440px) {
        font-size: 48px;
        line-height: 60px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
`;


export const Text = styled.p`
    margin: 0 16px;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    line-height: 24px;
    color: #FFFFFF;

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 28px;
        margin: 0 40px;
    }

    @media (min-width: 1440px) {
        max-width: 920px;
        text-align: center;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0 64px;
`;


export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
`;

export const LogoDivider = styled.div`
    width: 40%;
    margin: 0 20px;
    border-bottom: 1px solid white;
    opacity: 0.1;
`;

export const BottomText = styled.p`
    margin: 16px 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #9CA3AF;
    & span {
        color: #E0F2FE;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 1440px) {
        flex-direction: row;
        justify-content: space-between;
        margin: 0 85px;
    }
`;
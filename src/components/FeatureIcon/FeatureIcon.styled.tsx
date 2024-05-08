import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 8px;
    margin: 24px 0;

    @media (min-width: 768px) {
        flex-direction: column;
        align-items: center;
        max-width: 328px;
    }
`;

export const Title = styled.h3`
    margin: 8px 0;
    text-align: left;
    color: #111827;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;

    @media (min-width: 768px) {
        text-align: center;
        font-size: 24px;
        line-height: 32px;
    }
`;

export const Description = styled.p`
    text-align: left;
    color: #374151;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    @media (min-width: 768px) {
        text-align: center;
        font-size: 16px;
        line-height: 24px;
    }

`;

export const IconContainer = styled.div`
    box-sizing: border-box;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6px;
    padding: 12px;
    border: 8px solid ${props => props.color === 'dark' ? '#E0F2FE' : '#CFFAFE'};
    border-radius: 50%;
    transition: 0.5s;

    &:hover {
        transform: scale(1.1);
    }

    @media (min-width: 768px) {
        width: 88px;
        height: 88px;
    }
`;

import styled from 'styled-components';

export const Section = styled.section`
margin-top: 48px;
    text-align: center;
`;

export const Title = styled.h2`
    font-size: 36px;
    font-weight: 600;
    color: #111827;

    @media (min-width: 768px) {
        font-size: 48px;
        line-height: 60px;
    }
`;

export const Subtitle = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #374151;

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 28px;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    margin: 48px 0;
    transition: 0.5s;

    &:hover {
        transform: scale(1.05);
    }

    @media (min-width: 768px) {
        margin: 48px 20px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    border-radius: 6px;
`;

export const PlayButton = styled.button`
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 12px 16px 12px 12px;
    border: none;
    border-radius: 100px;
    background: #FFFFFF;
    color: #111827;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    box-shadow: 0px 8px 16px -4px rgba(28, 44, 64, 0.08);

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;
    }

    
`;

export const FeaturesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px;
    }

    @media (min-width: 1440px) {
        gap: 80px;
    }
`;
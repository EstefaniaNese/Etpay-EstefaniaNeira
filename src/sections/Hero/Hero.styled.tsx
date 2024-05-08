import styled from 'styled-components';

export const Section = styled.section`
    position: relative;
    

    @media (min-width: 768px) {
        margin: 0 20px;
    }

    &::after {
        content: '';
        position: absolute;
        z-index: -100;
        width: 400px;
        height: 400px;
        right: -80px;
        top: 340px;
        border-radius: 50%;
        background: ${props => props.color === 'dark' ? '#E0F2FE' : '#CFFAFE'};

        @media (min-width: 768px) {
            width: 700px;
            height: 700px;
            top: 290px;
            right: -130px;
        }

        @media (min-width: 1440px) {
            right: -200px;
            top: -260px;
        }
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1440px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        gap: 40px;
        margin: 0 112px;
    }
`;

export const Title = styled.h1`
    margin-top: 48px;
    margin-bottom: 16px;
    font-size: 36px;
    font-weight: 600;
    line-height: 48px;
    color: #111827;

    @media (min-width: 768px) {
        font-size: 64px;
        line-height: 80px;
    }
`;

export const SubTitleContainer = styled.div`
    max-width: 500px;
    min-height: 120px;
`;

export const SubTitle = styled.p`
    
    padding-bottom: 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #374151;

    @media (min-width: 768px) {
        // max-width: 75%;
        font-size: 18px;
        line-height: 28px;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 60px 0;
    transition: 0.5s;

    &:hover {
        transform: scale(1.05);
    }

    @media (min-width: 768px) {
        margin: 80px 0;
    }
`;

export const Image = styled.img`
    max-width: 100%
`;
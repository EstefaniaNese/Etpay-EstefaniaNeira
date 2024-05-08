import styled from 'styled-components';

export const StyledNavbar = styled.div`
    display: flex;
    margin: 20px 0px 20px 4px;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        margin: 20px 20px 20px 24px;
    }

    @media (min-width: 1440px) {
        margin: 20px 120px 20px 124px;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

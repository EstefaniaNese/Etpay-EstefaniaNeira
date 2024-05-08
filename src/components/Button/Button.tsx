import styled from 'styled-components';

export const Button = styled.button`
    padding: 10px 16px;
    border:none;
    border-radius: 6px;
    font-size: 14px;
    line-height: 20px;
    background: #0876DD;
    color: #FFFFFF;
    cursor: pointer;
    transition: 0.5s;

     @media (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;
    }

    &:hover {
        transform: scale(1.01);
        opacity: 0.8;
    }    
`;

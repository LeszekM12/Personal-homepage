import styled from "styled-components";

export const Wrapper = styled.header`
    max-width: 1120px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 72px;
    align-items: center;

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        grid-gap: 16px;
        grid-template-columns: 1fr;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        grid-gap: 30px;
    }
`;
export const Photo = styled.img`
    width: 25vw;
    max-width: 420px;
    border-radius: 50%;

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        width: 150px;
    }
`;
export const ThisIs = styled.p`
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
`;
export const Name = styled.h1`
    margin-top: 12px;
    font-size: 38px;
    font-weight: 900;

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        font-size: 24px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        font-size: 32px;
    }
`;
export const Summary = styled.p`
    margin: 36px 0 32px 0;
    font-size: 20px;
    line-height: 1.5;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
        margin: 16px 0 24px 0;
        font-size: 16px;
    }
    
    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        font-size: 18px;
    }
`;
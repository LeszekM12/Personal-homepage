import styled from "styled-components";

export const Wrapper = styled.footer`
    margin-top: 120px;

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
      margin-top: 48px;
    }
`;
export const LetsTalk = styled.h2`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: initial;
    margin: 0;
`;
export const Address = styled.div`
    margin: 24px 0;

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        margin: 12px 0;
    }
`;
export const Email = styled.a`
    font-weight: 900;
    font-size: 32px;
    text-decoration: none;
    color: ${({theme}) => theme.colors.textPrimary};
    transition: color 0.3s;
    
    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        font-size: 20px;
    }
`;
export const Info = styled.p`
    max-width: 670px;
    line-height: 1.4;
    margin: 0;
    color: ${({theme}) => theme.colors.textPrimary};

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        font-size: 14px;
    }
`;

export const Name = styled.span`
    font-weight: bold;
`;

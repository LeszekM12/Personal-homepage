import styled from "styled-components";
import a from "color-alpha";

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 24px;
    padding: 0;
    grid-gap: 32px;
    list-style: none;

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
    }
`;
export const Title = styled.li`
    border: 6px solid ${({ theme }) => theme.tile.border};
    background: ${({ theme }) => theme.colors.boxBackground};
    padding: 56px;
    margin: 0;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    transition: border-color 0.3s;
    
    &:hover {
        border-color: ${({ theme }) => theme.tile.borderHover};
    }

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        padding: 20px;
    }
`;
export const Description = styled.p`
    margin-top: 24px;
    line-height: 1.4;

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        margin-top: 16px;
        font-size: 14px;
    }
`;
export const Name = styled.h3`
    font-size: 30px;
    margin: 0;
    color: ${({ theme }) => theme.tile.header};

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        font-size: 20px;
    }
`;
export const Links = styled.dl`
    margin-top: 24px;
    display: grid;
    grid-gap: 8px;
    line-height: 1.6;

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        font-size: 14px;
        margin-top: 16px;
    }
`;
export const LinksRow = styled.div`
    display: grid;
    grid-template-columns: 4em 1fr;
`;
export const LinksValue = styled.dd`
    margin: 0;
`;
export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid ${({ theme }) => a(theme.tile.linkBorderBottom, 0.3)};
    padding-bottom: 1px;
    
    &:hover {
        border-color: unset;
    }
`;

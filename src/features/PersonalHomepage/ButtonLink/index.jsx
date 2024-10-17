import styled from "styled-components";

export const ButtonLink = styled.a`
    display: inline-flex;
    align-items: center;
    padding: 12px 16px;
    border-radius: 4px;
    text-decoration: none;
    letter-spacing: 1px;
    color: ${({theme}) => theme.colors.buttonLink.text};
    background: ${({theme}) => theme.colors.primary};
    transition: box-shadow 0.3s;
    
    &:hover {
        box-shadow: 0 0 0 4px ${({theme}) => theme.colors.buttonLink.shadow};
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        padding: 8px 12px;
    }
`;
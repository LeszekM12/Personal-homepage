import styled from 'styled-components';

export const Wrapper = styled.article`
    display: grid;
    justify-items: center;
    grid-gap: 32px;
    text-align: center;
    margin-top: 90px;
    color: ${({ theme }) => theme.colors.textPrimary};
    
    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        grid-gap: 24px;
        margin-top: 60px;
    }
`;
export const Header  = styled.header`
    font-weight: 700;
    font-size: 24px;
    
    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        font-size: 18px;
    }
`;
export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 1.4;
    margin: 0;
    
    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        font-size: 16px;
    }
`;

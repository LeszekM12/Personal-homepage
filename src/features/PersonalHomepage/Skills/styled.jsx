import styled from "styled-components";
import { ReactComponent as PointIcon } from "./Point.svg";

export const Section = styled.section`
    margin-top: 62px;
    padding: 52px;
    border-radius: 10px;
    box-shadow: ${({theme}) => theme.colors.boxShadow};
    background: ${({theme}) => theme.colors.boxBackground};

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        margin-top: 16px;
        padding: 26px;
    }
`;
export const Title = styled.h2`
    padding-bottom: 16px;
    border-bottom: 1px solid ${({theme}) => theme.colors.headerLine};
    font-size: 30px;
    margin: 0;
    color: ${({theme}) => theme.colors.textPrimary};
    font-weight: 800;

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        font-size: 20px;
        padding-bottom: 10px;
    }
`;
export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px 32px;
    margin-top: 32px;
    padding: 0;
    list-style: none;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);
        font-size: 17px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        grid-template-columns: 1fr;
        font-size: 16px;
        margin-top: 12px;
    }
`;
export const Item = styled.li`
    display: flex;
    align-items: center;
    line-height: 1.4;
`;
export const Point = styled(PointIcon)`
    margin-right: 16px;
    height: auto;
    color: ${({theme}) => theme.colors.primary};

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        margin-right: 8px;
        width: 8px;
    }
`;


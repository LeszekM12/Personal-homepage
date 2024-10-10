import styled, { css } from "styled-components";
import { ReactComponent as SunIcon} from "./sun.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
export const Box = styled.div`
    display: flex;
    align-items: center;
    background: none;
    border: none;
`;
export const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 3px;
    width: 48px;
    border-radius: 30px;
    outline-offset: 8px;
    background: ${({theme}) => theme.colors.themeSwitch.background};
    border: 1px solid ${({theme}) => theme.colors.themeSwitch.border};
`;
export const Text = styled.span`
    margin-left: 10px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        display: none;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        font-size: 10px;
    }
`;
export const IconBox = styled.div`
    display: flex;
    padding: 3px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.themeSwitch.iconBox};
    transition:  transform 0.3s;
    
    ${({ moveToRight }) => moveToRight && css`
        transform: translateX(20px);
    `}
`;
export const Icon = styled(SunIcon)`
    color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;
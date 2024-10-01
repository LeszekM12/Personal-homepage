import styled from "styled-components";
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
    background: ${({ theme }) => theme.colors.white};
`;
export const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 3px;
    width: 48px;
`;
export const Text = styled.span`
    margin-left: 10px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => props.theme.color};
`;
export const IconBox = styled.div`
    display: flex;
    padding: 3px;
    border-radius: 50%;
    transition:  transform 0.3s;
`;
export const Icon = styled(SunIcon)``;
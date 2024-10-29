import  styled, { keyframes } from 'styled-components'
import {ReactComponent as Spinner} from "./spinner.svg";

export const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
   text-align: center;
    margin-top: 88px;
    font-size: 20px;
    color: ${({theme}) => theme.colors.textPrimary};
    
    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        font-size: 17px;
        margin-top: 32px;
    }
`;
export const Info = styled.p`
    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        font-size: 16px;
    }
`;
export const StyledSpinner = styled(Spinner)`
   animation: ${rotate} 1s linear infinite;
    margin-top: 48px;
    color: ${({theme}) => theme.colors.primary};

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        margin-top: 12px;
        width: 100px;
    }
`;
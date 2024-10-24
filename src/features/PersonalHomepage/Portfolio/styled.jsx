import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg";

export const Section = styled.section`
    margin-top: 72px;

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        margin-top: 48px;
    }
`;
export const Header = styled.header`
    text-align: center;
`;
export const SubHeader = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin: 0;
    color: ${({theme}) => theme.colors.textPrimary};

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        font-size: 22px;
    }
`;
export const Projects = styled.h3`
    font-weight: normal;
    font-size: 20px;
    margin-top: 8px;
    color: ${({theme}) => theme.colors.textPrimary};

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        font-size: 17px;
    }
`;
export const IconGithub = styled(GithubIcon)`
    color: ${({theme}) => theme.colors.primary};
    margin-bottom: 8px;
`;
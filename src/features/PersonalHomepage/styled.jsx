import styled from "styled-components";

export const Container = styled.div`
    padding: 0 40px;
    max-width: 1200px;
    margin: 120px auto;

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        margin: 20px 0;
        padding: 0 20px;
    }
`;
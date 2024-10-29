import {Wrapper, Info, StyledSpinner} from "./styled";

export const Loading = () => (
    <Wrapper>
        <Info>
            Please wait, projects are being loaded...
        </Info>
        <StyledSpinner />
    </Wrapper>
)
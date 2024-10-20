import {Container} from "./styled";
import {ThemeSwitch} from "../../common/ThemeSwich";
import {MainBio} from "./MainBio";

export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch/>
        <MainBio/>
    </Container>
);
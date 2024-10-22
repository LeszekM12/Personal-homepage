import {Container} from "./styled";
import {ThemeSwitch} from "../../common/ThemeSwich";
import {MainBio} from "./MainBio";
import {Skills} from "./Skills";
import {skills, nextSkills} from "./Skills/skillsData";

export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch/>
        <MainBio/>
        <main>
            <Skills title={"My skill set includes 🛠️"} skills={skills}/>
            <Skills title={"What I want to learn next 🚀"} skills={nextSkills}/>
        </main>
    </Container>
);
import { Section, Header, SubHeader, Projects, IconGithub} from "./styled";
import {Repositories} from "./Content/Repositories";

export const Portfolio = () => {

    return (
        <Section>
            <Header>
                <IconGithub />
                <SubHeader>Portfolio</SubHeader>
                <Projects>My recent projects</Projects>
            </Header>
            <Repositories />
        </Section>
    );
};
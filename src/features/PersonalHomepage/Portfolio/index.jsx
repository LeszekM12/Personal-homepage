import { Section, Header, SubHeader, Projects, IconGithub} from "./styled";

export const Portfolio = () => {

    return (
        <Section>
            <Header>
                <IconGithub />
                <SubHeader>Portfolio</SubHeader>
                <Projects>My recent projects</Projects>
            </Header>
        </Section>
    );
};
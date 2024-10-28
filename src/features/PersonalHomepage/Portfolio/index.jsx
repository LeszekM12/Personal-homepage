import {useDispatch, useSelector} from "react-redux";
import { Section, Header, SubHeader, Projects, IconGithub} from "./styled";
import {Content} from "./Content/";
import {fetchRepositories, selectRepositories, selectRepositoriesStatus} from "../../personalHomepageSlice";
import {useEffect} from "react";
import {githubUsername} from "./githubUsername";

export const Portfolio = () => {
    const dispatch = useDispatch();
    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories(githubUsername));
    }, [dispatch]);

    return (
        <Section>
            <Header>
                <IconGithub />
                <SubHeader>Portfolio</SubHeader>
                <Projects>My recent projects</Projects>
            </Header>
            <Content status={repositoriesStatus} repositories={repositories} />
        </Section>
    );
};
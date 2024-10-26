import { List, Name, Link, Links, LinksRow, LinksValue, Title, Description } from "./styled";

export const Repositories = () => {

    return (
        <List>
            <Title>
                <Name>Repositories</Name>
                <Description>
                    The Tasks Note List Application created in React.js
                    makes your day more organized. Type a task or exercise
                    and press the button to write down on the list.
                    Check off or remove tasks that you have completed! 📝
                </Description>
                <Links>
                    <LinksRow>
                        <dt>Demo:</dt>
                        <LinksValue>
                            <Link>
                                https://github.com/LeszekM12/Personal-homepage
                            </Link>
                        </LinksValue>
                    </LinksRow>
                    <LinksRow>
                        <dt>Code:</dt>
                        <LinksValue>
                            <Link>
                                https://github.com/LeszekM12/Personal-homepage
                            </Link>
                        </LinksValue>
                    </LinksRow>
                </Links>
            </Title>
        </List>
    );
};
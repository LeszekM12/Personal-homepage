import {List, Name, Link, Links, LinksRow, LinksValue, Title, Description} from "./styled";

export const Repositories = ({repositories}) => {
    const filteredRepositories = repositories.filter((repositories) => repositories.description);

    return (
        <List>
            {filteredRepositories.map(({id, name, description, html_url, homepage}) => (
                <Title key={id}>
                    <Name>{name}</Name>
                    <Description>{description}</Description>
                    <Links>
                        {!!homepage && (
                            <LinksRow>
                                <dt>Demo:</dt>
                                <LinksValue>
                                    <Link href={homepage} target="_blank" rel="noopener noreferrer">
                                        {homepage}
                                    </Link>
                                </LinksValue>
                            </LinksRow>
                        )}
                        <LinksRow>
                            <dt>Code:</dt>
                            <LinksValue>
                                <Link href={html_url} targer="_blank" rel="noopener noreferrer">
                                    {html_url}
                                </Link>
                            </LinksValue>
                        </LinksRow>
                    </Links>
                </Title>
            ))}
        </List>
    );
};

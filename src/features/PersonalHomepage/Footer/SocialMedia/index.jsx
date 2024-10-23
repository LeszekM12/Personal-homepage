import {socials} from "./socials";
import { List, ListItem, ListItemLink} from "./styled";

export const SocialMedia = () => (
    <List>
        {socials.map(({name, url, Icon}) => (
            <ListItem key={name}>
                <ListItemLink
                    href={url}
                    title={name}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon/>
                </ListItemLink>
            </ListItem>
        ))}
    </List>
);
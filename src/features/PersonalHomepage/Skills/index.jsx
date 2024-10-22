import {Section, Title, List, Item, Point} from "./styled";

export const Skills = ({title, skills}) => (
    <Section>
        <Title>{title}</Title>
        <List>
            {skills.map((skill) => (
                <Item key={skill}>
                    <Point/>
                    {skill}
                </Item>
            ))}
        </List>
    </Section>
);
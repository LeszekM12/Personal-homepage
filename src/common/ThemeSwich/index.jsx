import {useDispatch, useSelector} from 'react-redux';
import {selectIsDarkTheme, toggleTheme} from "../themeSlice";
import {Wrapper, Box, Button, Text, IconBox, Icon} from "./styled";

export const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <Wrapper>
            <Box>
                <Button onClick={() => dispatch(toggleTheme())}>
                    <Text>Dark Mode {isDarkTheme ? "on" : "off"}</Text>
                    <IconBox>
                        <Icon/>
                    </IconBox>
                </Button>
            </Box>
        </Wrapper>
    );
};
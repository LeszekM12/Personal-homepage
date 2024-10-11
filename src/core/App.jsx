import {ThemeSwitch} from "../common/ThemeSwich";
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../common/themeSlice";
import {ThemeProvider} from "styled-components";
import {themeLight, themeDark} from "./theme";
import {GlobalStyle} from "./GlobalStyle";
import {Normalize} from "styled-normalize";
import {MainBio} from "../features/PersonalHomepage/MainBio";

function App() {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
            <Normalize/>
            <ThemeSwitch/>
            <MainBio/>
            <GlobalStyle/>
        </ThemeProvider>
    );
}

export default App;

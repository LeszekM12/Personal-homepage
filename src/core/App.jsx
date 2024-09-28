import {ThemeSwitch} from "../common/ThemeSwich";
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../common/themeSlice";
import {ThemeProvider} from "styled-components";
import { themeLight, themeDark} from "./theme";
import { GlobalStyle} from "./GlobalStyle";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
      <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
        <ThemeSwitch/>
        <GlobalStyle/>
      </ThemeProvider>
  );
}

export default App;

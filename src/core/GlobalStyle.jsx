import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}

	*, ::after, ::before {
		box-sizing: inherit;
	}

    body {
		font-family: "Inter", sans-serif;
        font-size: 18px;
        word-break: break-word;
        transition: background-color 0.3s ease, color 0.3s ease;
	}
`;
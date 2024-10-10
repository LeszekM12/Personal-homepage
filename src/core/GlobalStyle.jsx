import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}

	*, ::after, ::before {
		box-sizing: inherit;
	}
    :focus {
        outline: none;
    }
    button {
        cursor: pointer;
    }

    body {
		font-family: "Inter", sans-serif;
        background: ${({theme}) => theme.colors.site.background};
        color: ${({theme}) => theme.colors.site.text};
        font-size: 18px;
        word-break: break-word;
        transition: background-color 0.4s ease, color 0.4s ease;
	}
`;
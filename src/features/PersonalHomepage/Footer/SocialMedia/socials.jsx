import { styleIcon } from "./styled";
import {ReactComponent as GithubIcon} from "./Icons/github.svg";
import {ReactComponent as LinkedinIcon} from "./Icons/linkedin.svg";

    export const socials = [
    {
        name: "GitHub.com",
        url: "https://github.com/LeszekM12",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "LinkedIn.com",
        url: "https://www.linkedin.com/in/leszek-mikrut-6a7a8030a/",
        Icon: styleIcon(LinkedinIcon),
    },
];
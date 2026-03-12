import {Wrapper, LetsTalk, Address, Email, Info, Name} from "./styled";
import {email} from "../email";
import {SocialMedia} from "./SocialMedia";

export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's talk!</LetsTalk>
        <Address>
            <Email href={`mailto:${email}`}>{email}</Email>
        </Address>
            <Info>
                <b>Let’s build something great together.</b>
                <p></p>

                I’m open to projects involving modern web applications, dashboards and scalable front‑end architecture. <br/>
                <br/> Feel free to reach out <br/>
                <Name>Leszek Mikrut</Name>
            </Info>
            <SocialMedia/>
    </Wrapper>
);
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
                I'm always open to new projects whenever I have time. If you have
                a website, dashboard or a mobile app in mind and need some help to
                make your ideas come to life, feel free to contact me ✉️ <br/>
                <br/> Be in touch 🤝 <br/>
                <Name>Leszek Mikrut</Name>
            </Info>
            <SocialMedia/>
    </Wrapper>
);
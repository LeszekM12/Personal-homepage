import profile from './Profile5.jpg';
import {Wrapper, Photo, ThisIs, Name, Summary, Envelop} from "./styled";
import {email} from "../email";
import {ButtonLink as Button} from "../ButtonLink";

export const MainBio = () => (
    <Wrapper>
        <Photo src={profile} alt="Zdjęcie - Leszek Mikrut"/>
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Leszek Mikrut</Name>
            <Summary>
                🧑🏻‍💻I build scalable, elegant software by combining robust backend engineering with thoughtful,
                detail‑driven frontend design, delivering fast, intuitive, and maintainable digital experiences.
            </Summary>
            <Button href={`mailto:${email}`} title={email}>
                <Envelop/>
                Hire me
            </Button>
        </div>
    </Wrapper>
);
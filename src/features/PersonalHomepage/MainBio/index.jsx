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
                🧑🏻‍💻I'm a dedicated Frontend Developer with a strong interest in
                React, actively looking new job opportunities.
            </Summary>
            <Button href={`mailto:${email}`} title={email}>
                <Envelop/>
                Hire me
            </Button>

        </div>
    </Wrapper>
);
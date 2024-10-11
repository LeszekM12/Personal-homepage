import profile from './Profile5.jpg';
import {Wrapper, Photo, ThisIs, Name, Summary} from "./styled";

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

        </div>
    </Wrapper>
);
import {Repositories} from "./Repositories";
import {Loading} from "./Loading";
import {Error} from "./Error";

export const Content = ({status, repositories}) => {
    switch (status) {
        case "initial":
            return null;
        case "loading":
            return <Loading/>;
        case "error":
            return <Error/>
        case "success":
            return <Repositories repositories={repositories}/>;
        default:
            throw new Error(`incorrect status: ${status}`);
    }
};
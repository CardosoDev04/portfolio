import {NavigationArrow} from "../../components/NavigationArrow.tsx";
import {TechnologyGrid} from "./grid/TechnologyGrid.tsx";


export const Technologies = () => {
    return (
        <div className={"flex flex-col h-screen items-center justify-center"} id={"technologies"}>
            <NavigationArrow mode={"up"} id={"landing"}/>
            <div className={"flex flex-col items-center h-3/4 mt-20"}>
                <h1 className={"font-inter font-semibold text-5xl tracking-wide mb-5"}>I can work with...</h1>
                <TechnologyGrid/>
            </div>
            <div>

            </div>
            <NavigationArrow mode={"down"} id={"projects"}/>
        </div>
    );
};

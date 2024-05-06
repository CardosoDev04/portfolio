import { NavigationArrow } from "../../components/NavigationArrow.tsx";
import { TechnologyGrid } from "./grid/TechnologyGrid.tsx";

export const Technologies = () => {
    return (
        <div className={"flex snap-point flex-col h-screen items-center justify-center"} id={"technologies"}>
            <NavigationArrow mode={"up"} id={"landing"} />
            <div className={"flex flex-col justify-center items-center h-3/4"}>
                <h1 className={"font-inter font-semibold text-3xl tracking-wide mb-20"}>Technologies</h1>
                <TechnologyGrid />
            </div>
            <NavigationArrow mode={"down"} id={"projects"} />
        </div>
    );
};
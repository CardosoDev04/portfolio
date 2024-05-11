import { NavigationArrow } from "../../components/NavigationArrow.tsx";
import { TechnologyGrid } from "./grid/TechnologyGrid.tsx";

export const Technologies = () => {
    return (
        <div className={"flex snap-point flex-col h-screen items-center justify-center"} id={"technologies"}>
            <div className={"mt-24 sm:mt-0 "}>
            <NavigationArrow mode={"up"} id={"landing"} />
            </div>
            <div className={"flex flex-col justify-center items-center h-3/4"}>
                <h1 className={"font-inter font-semibold select-none text-3xl tracking-wide mb-12"}>Technologies</h1>
                <TechnologyGrid />
                <span className={"font-inter font-medium select-none text-xl tracking-wide mt-12"}>Scroll down to see where I have <span className={"text-blue-700"}>used</span> them...</span>
            </div>
            <div className={"mb-72 sm:mb-0 "}>
            <NavigationArrow mode={"down"} id={"projects"} />
            </div>
        </div>
    );
};
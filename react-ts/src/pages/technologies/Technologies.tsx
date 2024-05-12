import { NavigationArrow } from "../../components/NavigationArrow.tsx";
import { TechnologyGrid } from "./grid/TechnologyGrid.tsx";

export const Technologies = () => {
    return (
        <div className={"flex flex-col items-center sm:snap-mandatory sm:snap-start justify-center gap-y-20"} id={"technologies"}>
            <NavigationArrow mode={"up"} id={"landing"} />
            <div className={"flex flex-col mt-20 justify-center items-center h-3/4"}>
                <h1 className={"font-inter font-semibold select-none text-3xl tracking-wide"}>Technologies</h1>
                <TechnologyGrid />
                <span className={"font-inter font-medium select-none text-xl tracking-wide mt-12"}>Scroll down to see where I have <span className={"text-blue-700"}>used</span> them...</span>
            </div>
            <NavigationArrow mode={"down"} id={"projects"} />
        </div>
    );
};
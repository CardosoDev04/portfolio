import {NavigationArrow} from "@/components/NavigationArrow.tsx";
import {ProjectGrid} from "@/pages/projects/ProjectGrid.tsx";


export const Projects = () => {
    return (
        <div className={"flex scroll-section snap-mandatory flex-col items-center justify-center"} id={"projects"}>
            <div className={"flex flex-col h-3/4 mt-10 items-center"}>
                <div className={"flex mb-10"}>
                <NavigationArrow mode={"up"} id={"technologies"}/>
                </div>
                <h1 className={"font-inter font-semibold text-3xl tracking-wide"}>Projects</h1>
                <ProjectGrid/>
                <div className={"mt-10 mb-20"}>
                <NavigationArrow mode={"down"} id={"technologies"}/>
                </div>
            </div>
        </div>
    );
};

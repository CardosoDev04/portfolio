import {NavigationArrow} from "@/components/NavigationArrow.tsx";
import {ProjectGrid} from "@/pages/projects/ProjectGrid.tsx";


export const Projects = () => {
    return (
        <div className={"flex flex-col items-center justify-center mb-20"} id={"projects"}>
            <div className={"flex flex-col h-3/4 items-center gap-y-20"}>
                <div className={"flex snap-mandatory snap-start"}>
                <NavigationArrow mode={"up"} id={"technologies"}/>
                </div>
                <div className={"flex flex-col items-center"}>
                <h1 className={"font-inter font-semibold text-3xl tracking-wide"}>Projects</h1>
                <ProjectGrid/>
                </div>
                <div className={"mt-10 mb-20"}>
                <NavigationArrow mode={"down"} id={"about-me"}/>
                </div>
            </div>
        </div>
    );
};

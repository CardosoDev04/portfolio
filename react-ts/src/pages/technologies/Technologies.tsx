import {NavigationArrow} from "../../components/NavigationArrow.tsx";
import {TechnologyGrid} from "./grid/TechnologyGrid.tsx";



export const Technologies = () => {
    return (
        <div className={"flex snap-point flex-col h-screen items-center justify-center"} id={"technologies"}>
            <NavigationArrow mode={"up"} id={"landing"}/>
            <div className={"flex h-3/4 flex-row items-center my-12"}>
                <div className={"flex flex-col select-none"}>
                    <p className={"font-inter font-medium text-wrap text-xl mr-10"}>Here are some of the <span className={"text-blue-700 transform transition-transform hover:scale-110 font-semibold italic typing-text ml-0.5 mr-2"}>technologies</span>
                        I have worked with...</p>
                    <span className={"font-inter font-medium text-wrap text-xl mt-5 mr-10"}>
                        Want to see where I've used them? Scroll to the <span>next page.</span>
                    </span>
                </div>
                <div className={"flex flex-col items-center"}>
                    <TechnologyGrid/>
                </div>
                <div>

                </div>
            </div>
            <NavigationArrow mode={"down"} id={"projects"}/>
        </div>

    );
};

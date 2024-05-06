import { NavigationArrow } from "../../components/NavigationArrow.tsx";
import { TechnologyGrid } from "./grid/TechnologyGrid.tsx";

export const Technologies = () => {
    return (
        <div className={"flex snap-point flex-col h-screen items-center justify-center"} id={"technologies"}>
            <NavigationArrow mode={"up"} id={"landing"} />
            <div className={"flex flex-col sm:flex-row items-center my-24"}>
                <div className={"flex flex-col justify-center items-center"}>
                    <div className={"flex flex-col select-none sm:order-first mt-5"}>
                        <p className={"font-inter font-medium text-wrap text-xl"}>
                            Here are some of the{" "}
                            <span className={"text-blue-700 transform transition-transform hover:scale-110 font-semibold italic typing-text mr-2"}>
                technologies
              </span>
                            I have worked with!
                        </p>
                    </div>

                    <div className={"mt-5 sm:order-2"}>
                        <TechnologyGrid />
                    </div>

                    <div className={"mt-5 sm:order-last"}>
            <span className={"font-inter font-medium text-wrap text-xl mt-10"}>
              Want to see where I've used them? Scroll to the{" "}
                <span className={"text-blue-700 transform transition-transform hover:scale-110 font-semibold italic typing-text ml-0.5 mr-2"}>
                next page...
              </span>
            </span>
                    </div>
                </div>
            </div>
            <NavigationArrow mode={"down"} id={"projects"} />
        </div>
    );
};
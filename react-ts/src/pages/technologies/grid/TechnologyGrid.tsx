import {technologiesArray} from "../../../image-dir/image-dir.ts";
import {Card} from "@nextui-org/react";


export const TechnologyGrid = () => {
    return (
       <Card className={"p-5 mt-3"}>
        <div className={"flex rounded-xl drop-shadow-sm"}>
        <div className={"grid grid-cols-8"}>
            {technologiesArray.map((technology, index) => {
                return (
                    <div key={index} className={"flex flex-col m-3 cursor-pointer transform transition-transform hover:scale-110 rounded-lg dark:hover:shadow-white dark:hover:drop-shadow-xl hover:drop-shadow-xl items-center"}>
                        <img src={technology} alt={'technology'} className={"w-8 h-8 sm:w-14 sm:h-14"}/>
                    </div>
                );
            })}
        </div>
        </div>
       </Card>
    );
};

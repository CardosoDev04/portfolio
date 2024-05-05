import {technologiesArray} from "../../../image-dir/image-dir.ts";


export const TechnologyGrid = () => {
    return (
        <div className={"grid grid-cols-8 grid-rows-3"}>
            {technologiesArray.map((technology, index) => {
                return (
                    <div key={index} className={"flex flex-col m-5 cursor-pointer transform transition-transform hover:scale-110 rounded-lg hover:shadow-lg items-center"}>
                        <img src={technology} alt={'technology'} className={"w-20 h-20"}/>
                    </div>
                );
            })}
        </div>
    );
};

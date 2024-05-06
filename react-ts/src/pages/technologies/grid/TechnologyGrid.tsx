import {technologiesArray} from "../../../image-dir/image-dir.ts";


export const TechnologyGrid = () => {
    return (
        <div className={"flex rounded-xl drop-shadow-sm"}>
        <div className={"grid grid-cols-6"}>
            {technologiesArray.map((technology, index) => {
                return (
                    <div key={index} className={"flex flex-col m-3 cursor-pointer transform transition-transform hover:scale-110 rounded-lg hover:shadow-lg items-center"}>
                        <img src={technology} alt={'technology'} className={"w-14 h-14"}/>
                    </div>
                );
            })}
        </div>
        </div>
    );
};

import {ArrowDown} from "../image-dir/image-dir.ts";
import {cn} from "../lib/utils.ts";

export const NavigationArrow = ({mode, id}: {mode:string,id:string}) => {
    let cname = mode === "up" ? "rotate-180" : ""
    const handleClick = () => {

        const target = document.getElementById(id);

        if(target !== null){
            target.scrollIntoView({behavior: "smooth"});
        }
    }
    return (
        <img className={cn("w-10 h-5s opacity-50 cursor-pointer", cname)} alt={"arrow down"} src={ArrowDown}
        onClick={handleClick}
        />
    );
};

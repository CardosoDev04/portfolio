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
        <div className={"opacity-10 snap-start dark:invert transition-opacity hover:opacity-100"}>
        <img className={cn("w-8 cursor-pointer", cname)} alt={"arrow down"} src={ArrowDown}
        onClick={handleClick}
        />
        </div>
    );
};

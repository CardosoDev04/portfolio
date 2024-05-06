import {cn} from "../lib/utils.ts";

export const MaxWidthWrapper = (
    {
        className,
        children
    }:
        {
            className?: string,
            children: React.ReactNode
        }
) => {
    return (
        <div className={cn("mx-auto sm:w-full w-screen max-w-screen-xl px-2.5 md:px-20",className)}>
            {children}
        </div>
    );
};

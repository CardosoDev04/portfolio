import {useSwitch, VisuallyHidden, SwitchProps} from "@nextui-org/react";
import {MoonIcon} from "./ui/MoonIcon.tsx";
import {SunIcon} from "./ui/SunIcon.tsx";
import {useState} from "react";

const ThemeSwitch = (props: SwitchProps) => {

    const initialTheme = localStorage.getItem("ui-theme") === "dark";
    const [isSelected,setIsSelected] = useState(initialTheme);

    const toggleTheme = () => {
        if(isSelected) {
            document.documentElement.classList.remove("dark")
        } else {
            document.documentElement.classList.add("dark")
        }
        setIsSelected(!isSelected);
        localStorage.setItem("ui-theme", isSelected ? "light" : "dark");
    }
    const {
        Component,
        slots,
        getBaseProps,
        getInputProps,
        getWrapperProps
    } = useSwitch({...props, isSelected});

    return (
        <div className="flex flex-col gap-2">
            <Component {...getBaseProps()}>
                <VisuallyHidden>
                    <input {...getInputProps()} />
                </VisuallyHidden>
                <div
                    {...getWrapperProps({onClick : toggleTheme})}
                    className={slots.wrapper({
                        class: [
                            "w-6 h-6",
                            "flex items-center justify-center",
                            "rounded-xl bg-default-100 hover:bg-default-200",
                        ],
                    })}
                >
                    {isSelected ? <SunIcon/> : <MoonIcon/>}
                </div>
            </Component>
        </div>
    )
}


export default function App() {
    return <ThemeSwitch/>
}

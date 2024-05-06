import { Moon, Sun } from "lucide-react"

import { Button } from "./ui/button.tsx"
import { useTheme } from "./theme-provider.tsx"
import {useState} from "react";

export function ModeToggle() {
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("ui-theme"));
    const { setTheme } = useTheme();

    return (
        <Button variant="outline" size="icon" onClick={() => {
            if (currentTheme === "light") {
                setCurrentTheme("dark");
                setTheme("dark");
            } else {
                setCurrentTheme("light");
                setTheme("light");
            }
        }}>
            {currentTheme === "light" ? (
                <Sun
                    className="h-[1.2rem] w-[1.2rem] opacity-1 rotate-0 transition-all duration-500 ease-in-out dark:-rotate-90"
                />
            ) : (
                <Moon
                    className="h-[1.2rem] w-[1.2rem] opacity-0 transition-opacity duration-500 ease-in-out dark:opacity-1 dark:rotate-0"
                />
            )}
        </Button>
    );
}

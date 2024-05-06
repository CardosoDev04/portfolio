import { Moon, Sun } from "lucide-react"

import { Button } from "./ui/button.tsx"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu.tsx"
import { useTheme } from "./theme-provider.tsx"
import {useState} from "react";

export function ModeToggle() {
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("ui-theme"))
    console.log(currentTheme)
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    {currentTheme === "light" ? <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> :
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() =>{
                    setCurrentTheme("light")
                    setTheme("light")}
                }>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() =>{
                    setCurrentTheme("dark")
                    setTheme("dark")}}>
                    Dark
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

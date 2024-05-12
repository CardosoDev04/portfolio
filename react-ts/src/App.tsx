import './App.css';
import { MaxWidthWrapper } from './components/MaxWidthWrapper.tsx';
import { Landing } from './pages/landing/Landing.tsx';
import { Projects } from './pages/projects/Projects.tsx';
import { Technologies } from './pages/technologies/Technologies.tsx';
import {Flowbite} from "flowbite-react";
import {ThemeProvider} from "../@/components/theme-provider.tsx";
import {AboutMe} from "@/pages/about-me/AboutMe.tsx";
type ThemeMode = "light" | "dark" | "auto";

declare const useThemeMode: () => {
    mode: ThemeMode;
    computedMode: ThemeMode; // "light" | "dark"
    setMode: (mode: ThemeMode) => void;
    toggleMode: () => void;
    clearMode: () => void;
};

function App() {

    return (

        <Flowbite>
            <ThemeProvider defaultTheme={"light"} storageKey="ui-theme">
        <div className={"app dark:bg-gray-800"}>
            <MaxWidthWrapper className={"grid grid-cols-1 gap-y-40"}>
                <div className={"flex flex-col items-center justify-center"}>
                    <Landing/>
                </div>
                <div className={"flex flex-col items-center justify-center"}>
                    <Technologies/>
                    </div>
                        <div className={"flex flex-col items-center justify-center mb-[900px] sm:mb-0"}>
                            <Projects/>
                        </div>
                        <div className={"flex flex-col items-center justify-center"}>
                            <AboutMe/>
                        </div>
            </MaxWidthWrapper>
        </div>
            </ThemeProvider>
        </Flowbite>
);
}

export default App;
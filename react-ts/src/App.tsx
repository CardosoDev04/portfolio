import './App.css';
import { MaxWidthWrapper } from './components/MaxWidthWrapper.tsx';
import { Landing } from './pages/landing/Landing.tsx';
import { Projects } from './pages/projects/Projects.tsx';
import { Technologies } from './pages/technologies/Technologies.tsx';
import {DarkThemeToggle, Flowbite} from "flowbite-react";
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
        <div className={"app dark:bg-gray-800"}>
            <DarkThemeToggle  />
        <MaxWidthWrapper className={"snap-mandatory snap-y"}>
                <Landing/>
                <Technologies/>
                <Projects/>
        </MaxWidthWrapper>
        </div>
        </Flowbite>
);
}

export default App;
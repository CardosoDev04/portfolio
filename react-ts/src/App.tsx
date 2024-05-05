import './App.css';
import { MaxWidthWrapper } from './components/MaxWidthWrapper.tsx';
import { Landing } from './pages/landing/Landing.tsx';
import { Projects } from './pages/projects/Projects.tsx';
import { Technologies } from './pages/technologies/Technologies.tsx';

function App() {

    return (
        <MaxWidthWrapper className={"snap-mandatory snap-y overflow-auto"}>
            <div className={"snap-start h-screen"}>
                <Landing/>
            </div>
            <div className={"snap-start h-screen"}>
                <Technologies/>
            </div>
            <div className={"snap-start h-screen"}>
                <Projects/>
            </div>
        </MaxWidthWrapper>
);
}

export default App;
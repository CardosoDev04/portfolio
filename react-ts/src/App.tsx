import './App.css'
import {MaxWidthWrapper} from "./components/MaxWidthWrapper.tsx";
import {Landing} from "./pages/landing/Landing.tsx";

function App() {
    return(
        <MaxWidthWrapper>
            <Landing/>
        </MaxWidthWrapper>
    )
}

export default App

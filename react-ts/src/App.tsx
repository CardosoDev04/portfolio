import GitHubWhite from '../src/assets/github_white.png'
import './App.css'

function App() {

    function handleGithubClick() {
        window.open("https://github.com/cardosodev04")
    }

  return (
    <div className={"flex items-center justify-center border border-red-500 w-screen h-screen"}>
        <div className={"flex items-center justify-center flex-col w-3/4 h-3/4 rounded-2xl bg-black"}>
            <h1 className={"text-3xl text-white font-semibold"}>You've reached my portfolio</h1>
            <div className={"flex flex-col text-center mt-5"}>
            <span className={"text-xl text-white"}>
                You're probably wondering, where are all the projects and valuable info about me and my work?
            </span>
            <span className={"text-xl text-white"}>
                Well... I'm still working on it :(
            </span>
                <span className={"text-xl text-white"}>
                In the meantime, you can check out my github profile.
            </span>
            </div>
            <img alt={"github"} src={GitHubWhite} className={"w-12 h-12 mt-5 cursor-pointer"} onClick={handleGithubClick}/>
        </div>
    </div>
  )
}

export default App

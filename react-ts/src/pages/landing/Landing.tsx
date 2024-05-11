import { useState, useEffect } from 'react';
import { Memoji } from "../../image-dir/image-dir.ts";
import './landing.css';
import { NavigationArrow } from "../../components/NavigationArrow.tsx";
import ThemeSwitch from "../../../@/components/mode-toggle.tsx";

export const Landing = () => {
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const typingEffect = async () => {
            setIsTyping(true);
            const name = 'João Cardoso.';

            // Typing animation
            for (let i = 0; i < name.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 150));
                setText(name.substring(0, i + 1));
            }

            await new Promise(resolve => setTimeout(resolve, 4000));

            // Loop through characters in reverse order
            for (let i = name.length - 1; i >= 0; i--) {
                await new Promise(resolve => setTimeout(resolve, 40));
                setText(name.substring(0, i ));
            }

            await new Promise(resolve => setTimeout(resolve, 100));

            setIsTyping(false);
            typingEffect();
        };

        typingEffect();
    }, []);

    return (
        <div className={"flex snap-start flex-col h-screen justify-center items-center"} id={"landing"}>
            <div className={"absolute top-10 transition-opacity opacity-50 hover:opacity-100 sm:flex"}>
            <ThemeSwitch/>
            </div>
            <div className={"flex flex-col sm:flex-row justify-center align-middle sm:items-center sm:mb-0 mb-20"}>
                <div className={"sm:w-1/2 w-20 select-none"}>
                    <div className={"flex flex-col sm:mt-5"}>
                        <h1 className={"font-inter font-semibold tracking-wide sm:text-6xl text-3xl"}>Hi there,</h1>
                        <h1 className={"flex font-inter font-semibold tracking-wide sm:text-6xl text-3xl"}>
                            I'm <span className={"text-blue-700 typing-text ml-4"}>
                <div className="typing-container">
                  <span className={"text-blue-700 typing-text sm:ml-2"}>
                    {isTyping ? text : 'João Cardoso.'}
                  </span>
                </div>
              </span>
                        </h1>
                    </div>
                    <div className={"flex sm:text-lg w-[300px] sm:w-auto mt-5 text-gray-500 tracking font-medium dark:text-gray-200"}>
                        <p>Full-stack developer from Lisbon, Portugal specializing in building high-performing software solutions across frontend and backend.
                        </p>
                    </div>
                </div>
                <img alt={"memoji"} className={"flex w-6/12 h-6/12"} src={Memoji}/>
            </div>
            <NavigationArrow mode={"down"} id={"technologies"}/>
        </div>
    );
};

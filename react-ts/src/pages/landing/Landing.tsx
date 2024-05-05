import {useState, useEffect} from 'react';
import {ArrowDown, Memoji} from "../../image-dir/image-dir.ts";
import './landing.css';

export const Landing = () => {
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const typingEffect = async () => {
            setIsTyping(true);
            const name = 'João Cardoso.';
            for (let i = 0; i < name.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 60));
                setText(name.substring(0, i + 1));
            }
            setIsTyping(false);
        };

        typingEffect();
    }, []);

    return (
        <div className={"flex flex-col h-screen justify-center items-center"}>
            <div className={"flex justify-center align-middle items-center"}>
                <div className={"w-1/2 select-none"}>
                    <div className={"flex flex-col"}>
                        <h1 className={"font-inter font-semibold tracking-wide text-6xl"}>Hi there,</h1>
                        <h1 className={"flex font-inter font-semibold tracking-wide text-6xl"}>
                            I'm <span className={"text-blue-700 typing-text ml-4"}>
                     <div className="typing-container">
                        <span className={"text-blue-700 typing-text ml-2"}>
                            {isTyping ? text : 'João Cardoso.'}
                        </span>
                    </div>
              </span>
                        </h1>
                    </div>
                </div>
                <img alt={"memoji"} className={"flex w-6/12 h-6/12"} src={Memoji}/>
            </div>
            <img className={"w-20 h-10 opacity-50 cursor-pointer"} alt={"arrow down"} src={ArrowDown}/>
        </div>
    );
};

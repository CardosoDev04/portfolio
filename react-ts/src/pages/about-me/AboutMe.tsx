import {NavigationArrow} from "@/components/NavigationArrow.tsx";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

export const AboutMe = () => {
    return (
        <>
            <div className={"flex"}>
            <div className={"flex flex-col items-center justify-center mt-20"} id={"about-me"}>
                <div className={"flex mt-10 sm:snap-mandatory sm:snap-start"}>
                <NavigationArrow mode={"up"} id={"projects"}/>
                </div>
                <div className={"flex flex-col w-full items-center mt-20 mb-40"}>
                <h1 className={"flex font-inter text-3xl font-semibold"}>About me</h1>
                    <div className={"font-inter w-full items-center mb-20"}>
                    <Tabs aria-label="Options">
                        <Tab key="education" title="Education">
                            <Card>
                                <CardBody>
                                    <CardHeader>
                                        <h1 className={"font-inter font-semibold text-2xl"}>High School</h1>
                                    </CardHeader>
                                    <CardBody>
                                        I graduated from Escola Secundária Pedro Nunes in 2022 with a specialization in Science and Technology. During my time there, and given the institution was extremely strict with it's teaching methods and testing I was able to develop a strong foundation in mathematics and physics which would later prove to be invaluable in my university studies.
                                    </CardBody>
                                    <CardHeader>
                                        <h1 className={"font-inter font-semibold text-2xl"}>BSc in Computer Science and Engineering</h1>
                                    </CardHeader>
                                <CardBody>
                                   From a young age I always knew that if I ever went to college it would should need to be an institution that values pratical learning over theoretical learning. I found that in Lisbon School of Engineering (ISEL) where I'm currently undertaking my BSc in Computer Science and Engineering.
                                </CardBody>
                                    <CardHeader>
                                        <h1 className={"font-inter font-semibold text-2xl"}>Future studies</h1>
                                    </CardHeader>
                                <CardBody>
                                    When I finish my BSc in June 2025, I'm planning on continuing my learning either by working or pursuing a MSc in a specialization field that suits me at that time. Nothing is decided, and its exciting :D
                                </CardBody>
                                    </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="life" title="Life">
                            <Card>
                                <CardHeader>
                                    <h1 className={"font-inter font-semibold text-2xl"}>My roots</h1>
                                </CardHeader>
                                <CardBody>
                                    I was born an only child in Lisbon, Portugal in 2004. My parents are both Portuguese and having a very close relationship to them, I've always seen them as my biggest role models.
                                </CardBody>
                                <CardBody>
                                    My father is the embodiment of what hard work and dedication can achieve. From humble origins, he managed to both be the most important figure in portuguese Muay Thai history and the owner of a successful logistics and transportation company.
                                    He was the one that made me realize a degree means nothing if you don't have the work ethic and eagerness to learn new things to support it.
                                </CardBody>
                                <CardBody>
                                    My mother as thoughtful and caring as she ever was, was the person that I can say I most likely derive my creativity and ability to adapt to new tools and technologies from. She was always the one that would help me with my school projects and would always be the one to encourage me to try new things.
                                    I've always been a "jack of all trades" kind of kid and I credit that to her and my father the most for always supporting my constant change of likes and hobbies.
                                </CardBody>
                                <CardHeader>
                                    <h1 className={"font-inter font-semibold text-2xl"}>My relation to technology</h1>
                                </CardHeader>
                                <CardBody>
                                    As stated above I've always had many interests throughout my life. But one has always been there, technology.
                                    I can still remember the first time I messed around with a computer. I was around 6 years old and my uncle had just shown me a game he enjoyed called
                                    Day of the Tentacle (1993). That was my first introduction to technology in an interactive manner, I was immediately hooked.
                                </CardBody>
                                <CardBody>
                                    Since then I always had a huge interest for games and interactive technology. I would spend hours on end playing games and watching videos about how they were made.
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="current" title="Current">
                            <Card>
                                <CardHeader>
                                    <h1 className={"font-inter font-semibold text-2xl"}>Where am I right now?</h1>
                                </CardHeader>
                                <CardBody>
                                    In the past 2 years I've found a way to express my love for interactive experiences through programming and the creation of Software. I've been able to create many projects that I'm proud of and that have helped me grow as a person and as a developer.
                                </CardBody>
                                <CardBody>
                                    I currently work as a freelance developer and I'm always looking for new opportunities to grow and learn new technologies.
                                </CardBody>
                                <CardBody>
                                    I'm planning on finishing my BSc studies and progressing them as soon as possible, and hopefully land a nice job in the meantime in a company that shares the same values as me.
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

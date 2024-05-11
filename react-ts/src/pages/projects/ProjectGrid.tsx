import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import {projects} from "@/pages/projects/projects.ts";

export const ProjectGrid = () => {


    return (
        <>
        <div className={"grid grid-cols-3 mt-10"}>
            { projects.map((project) => {
                return<Card className="py-4 mx-10">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold font-inter">Technologies used</p>
                        <small className="text-default-500 flex flex-row flex-wrap">{project.technologies.map((technology) => (
                            <div>
                                <span className="text-default-400 text-xs mx-1">{technology}</span>
                            </div>
                        ))}</small>
                        <h4 className="font-bold font-inter text-large mt-5">{project.title}</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center">
                        <Image
                            alt="Card image"
                            className="object-cover shadow-md rounded-xl hover:cursor-pointer hover:scale-95 transition-transform duration-300 ease-in-out hover:brightness-75"
                            src={project.img}
                            width={270}
                            onClick={() => {
                                if(project.demo !== "") {
                                    window.open(project.demo, "_blank")
                                } else {
                                    window.open(project.github, "_blank")
                                }
                            }}
                        />
                        <Button color="primary" className={"flex w-32 mt-2"}>
                            See details
                        </Button>
                    </CardBody>
                </Card>
                })
            }
        </div>
        </>
    );
}

import {Card, CardHeader, CardBody, Image, Button, useDisclosure,Modal, ModalContent, ModalBody, ModalFooter, ModalHeader} from "@nextui-org/react";
import {projects} from "@/pages/projects/projects.ts";

export const ProjectGrid = () => {


    return (
        <>
        <div className={"grid grid-cols-1 sm:grid-cols-3 mt-5"}>
            { projects.map((project) => {
                const {isOpen, onOpen, onOpenChange} = useDisclosure();
                return<Card className="py-4 mt-10 sm:mx-10">
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
                        <Button color="primary" onPress={onOpen} className={"flex w-32 mt-2"}>
                            See details
                        </Button>
                        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">{project.title}</ModalHeader>
                                        <ModalBody>
                                            {
                                                project.description.split('\n').map((paragraph) => {
                                                    return <p className="text-default-500">{paragraph}</p>
                                                })
                                            }
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                Close
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </CardBody>
                </Card>
                })
            }
        </div>
        </>
    );
}

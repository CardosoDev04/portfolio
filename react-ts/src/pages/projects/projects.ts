
import {PortfolioScreenshot,RuneScreenshot,SecaScreenshot} from "@/image-dir/image-dir.ts";

export const projects = [
    {
        title: "Rune",
        description: "An all-in-one privacy web application that allows users to send and receive encrypted messages, manage PGP keys and store passwords securely",
        technologies: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express", "GraphQL", "MongoDB"],
        img: RuneScreenshot,
        github: "https://github.com/CardosoDev04/rune",
        demo: ""
    },
    {
        title: "Portfolio website",
        description: "A personal portfolio website showcasing my projects and skills",
        technologies: ["React", "TypeScript", "TailwindCSS","NextUI", "Flowbite"],
        img: PortfolioScreenshot,
        github: "https://github.com/CardosoDev04/portfolio",
        demo: "https://joaocardoso.dev"
    },
    {
        title: "Shows and Event Managing Web Application",
        description: "A personal portfolio website showcasing my projects and skills",
        technologies: ["Node.js", "Express", "ElasticSearch", "Bootstrap"],
        img: SecaScreenshot,
        github: "https://github.com/CardosoDev04/seca-web-app",
        demo: ""
    }
]

import {PortfolioScreenshot,RuneScreenshot,SecaScreenshot} from "@/image-dir/image-dir.ts";

export const projects = [
    {
        title: "Rune",
        description: "An all-in-one privacy web application that allows users to send and receive encrypted messages, manage PGP keys and store passwords securely.\n" +
        "This project makes use of GraphQL as the API Layer and MongoDB for data storage. The frontend is built with React and TailwindCSS, while the backend is built with Typescript, Node.js and Express.\n " +
            "There are many security algorithms in place such as B-Crypt for password hashing, PGP for end-to-end encryption and JWT for authentication.",

        technologies: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express", "GraphQL", "MongoDB"],
        img: RuneScreenshot,
        github: "https://github.com/CardosoDev04/rune",
        demo: ""
    },
    {
        title: "Portfolio website",
        description: "This project is the one you are currently browsing on :D\n" + "It is a personal portfolio that showcases all my projects, technologies I work with and information about my life.\n"
        + "The frontend is built with React and TailwindCSS making use of NextUI for some components.\n" + "The website is fully responsive and has a theme switch from which the user can toggle between dark/light mode.\n",
        technologies: ["React", "TypeScript", "TailwindCSS","NextUI", "Flowbite", "Vite"],
        img: PortfolioScreenshot,
        github: "https://github.com/CardosoDev04/portfolio",
        demo: "https://joaocardoso.dev"
    },
    {
        title: "Shows and Events Managing Web Application",
        description: "SECA is a web application that allows users to interact with the TicketMaster API in real time to search for shows and events and then group them into 'playlist' like collections.\n" +
        "This project was developed as a group project for the Introduction to Web Development course at Lisbon School of Engineering.\n" +
        "The frontend is built with jQuery and Bootstrap while the backend is built with Node.js and Express. ElasticSearch was used as a database for user/group records and for the search functionality.\n" +
        "The application also has a login system with JWT authentication through Passport.js and a user-friendly interface.",
        technologies: ["Node.js", "Express", "ElasticSearch", "Bootstrap"],
        img: SecaScreenshot,
        github: "https://github.com/CardosoDev04/seca-web-app",
        demo: ""
    }
]
import React from "react";
import { ProjectCard } from "../../components";
export default function Works() {
    const projects = [
        {
            imgUrl: "src/pages/Home/images/BSharmaBlogs.jpg",
            skills: ["HTML", "Tailwind-CSS", "ReactJS", "React-Router-DOM", "React-Redux", "Appwrite"],
            projectName: "BSharma Blogs",
            description: "My Personal Blogging Web Application",
            liveLink: "https://bsharma-blogs.vercel.app",
            github: "https://github.com/bkvats/PersonalBlogAppinReact"
        },
        {
            imgUrl: "src/pages/Home/images/MemoryGame.jpg",
            skills: ["HTML", "CSS", "JavaScript", "DOM Manupilation"],
            projectName: "Memory Mania",
            description: "A Single Page Gaming Application purely in JavaScript without using any external framework/library",
            liveLink: "https://bkvats.github.io/MemoryGame/",
            github: "https://github.com/bkvats/MemoryGame",
        },
        {
            skills: ["MERN Stack", "Stock.io", "Appwrite", "HTML", "Tailwind-CSS"],
            projectName: "Real-Time Chat Application",
            description: "Currently working on a real time messaging application using stock.io",
        },
        {
            imgUrl: "src/pages/Home/images/Portfolio.jpg",
            skills: ["Figma", "HTML", "Tailwind-CSS", "ReactJS", "React-Router-DOM"],
            projectName: "Portfolio",
            description: "You are using it currently.",
            liveLink: "",
            github: "https://github.com/bkvats/Portfolio",
        }
    ];
    const miniProjects = [
        {
            imgUrl: "mini",
            skills: ["HTML", "CSS", "API Handling", "ReactJS"],
            projectName: "Real Time Currency Converter",
            description: "A currency converter application which converts amount from one curency to another on the basis of current market valuation of both the currencies",
            liveLink: "mini",
            github: "https://github.com/bkvats/CurrencyConverter",
        },
        {
            imgUrl: "mini",
            skills: ["HTML", "Tailwind-CSS", "ReactJS"],
            projectName: "Encrypted Task Scheduler",
            description: "An Todo Application with encryption technique for privacy of user's data",
            liveLink: "mini",
            github: "https://github.com/bkvats/TodoinReact",
        },
        {
            imgUrl: "mini",
            skills: ["JavaScript", "Regex", "ReactJS", "String Manupilation"],
            projectName: "Strong Password Generator",
            description: "A small password generator app which generated a strong password for user based upon varying length, characters, numbers etc.",
            liveLink: "mini",
            github: "https://github.com/bkvats/PasswordGeneratorUsingReact",
        },
        {
            imgUrl: "mini",
            skills: ["HTML", "CSS", "ContextAPI", "ReactJS"],
            projectName: "Varies Color Theme Switcher",
            description: "A fun application which changes it's theme in 10+ different colors",
            liveLink: "mini",
            github: "https://github.com/bkvats/ThemeChangeinReact",
        },
        {
            imgUrl: "mini",
            skills: ["HTML", "CSS", "Clone"],
            projectName: "Netflix UI Clone",
            description: "UI Clone of Video Streaming Platform Netflix",
            liveLink: "mini",
            github: "https://github.com/bkvats/NetflixUIClone",
        },
    ]
    return (
        <div className="mt-14">
            <div>
                <h1 className="font-semibold text-3xl"><span className="text-[#C778DD]">/</span>projects</h1>
                <p className="font-light text-[#ABB2BF] mt-2">List of my projects</p>
            </div>
            <div className="flex justify-between mt-14">
                <div className="flex gap-2 items-center">
                    <h2 className="font-semibold text-2xl text-white"><span className="text-[#C778DD]">#</span>complete-apps</h2>
                    <hr className="w-24 md:w-96 border-[1px] border-[#C778DD]" />
                </div>
            </div>
            <div className="min-w-full my-10 flex flex-wrap justify-evenly">
                {
                    projects.map((item) => (
                        <ProjectCard key={item.projectName} {...item} />
                    ))
                }
            </div>
            <div className="flex justify-between mt-14">
                <div className="flex gap-2 items-center">
                    <h2 className="font-semibold text-2xl text-white"><span className="text-[#C778DD]">#</span>small-projects</h2>
                    <hr className="w-24 md:w-96 border-[1px] border-[#C778DD]" />
                </div>
            </div>
            <div className="min-w-full my-10 flex flex-wrap justify-evenly">
                {
                    miniProjects.map((item) => (
                        <ProjectCard key={item.projectName} {...item} />
                    ))
                }
            </div>
        </div>
    );
}
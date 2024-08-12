import React from "react";
import { AboutMe, ContactMe, Intro, ProjectCard, Quote, SkillCard, Skills } from "../components";
import { Link } from "react-router-dom";
export default function Home() {
    const projects = [
        {
            imgUrl: "/pages/Home/BSharmaBlogs.jpg",
            skills: ["HTML", "Tailwind-CSS", "ReactJS", "React-Router-DOM", "React-Redux", "Appwrite"],
            projectName: "BSharma Blogs",
            description: "My Personal Blogging Web Application",
            liveLink: "https://bsharma-blogs.vercel.app",
            github: "https://github.com/bkvats/PersonalBlogAppinReact"
        },
        {
            imgUrl: "/pages/Home/MemoryGame.jpg",
            skills: ["HTML", "CSS", "JavaScript", "DOM Manupilation"],
            projectName: "Memory Mania",
            description: "A Single Page Gaming Application purely in JavaScript without using any external framework/library",
            liveLink: "https://bkvats.github.io/MemoryGame/",
            github: "https://github.com/bkvats/MemoryGame",
        },
        {
            imgUrl: "/pages/Home/Portfolio.jpg",
            skills: ["Figma", "HTML", "Tailwind-CSS", "ReactJS", "React-Router-DOM"],
            projectName: "Portfolio",
            description: "You are using it currently.",
            liveLink: "",
            github: "https://github.com/bkvats/Portfolio",
        }
    ];
    const skills = [
        {
            skillName: "Programming Languages",
            skillTools: ["Java", "Python", "C"]
        },
        {
            skillName: "Web Dev",
            skillTools: ["HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NodeJs", "MERN Stack"]
        },
        {
            skillName: "Key Skills",
            skillTools: ["Data Structures", "Algorithms", "OOPs"]
        },
        {
            skillName: "Databases",
            skillTools: ["MySQL", "MongoDB"]
        },
        {
            skillName: "CSE Foundationals",
            skillTools: ["Operating Systems", "Computer Networks"]
        },
        {
            skillName: "Additional Skills & Tools",
            skillTools: ["VSCode", "Git", "Github", "Linux", "Adobe Photoshop", "WonderShare Filmora"]
        }
    ];
    return (
        <>
            <Intro />
            <Quote />
            <div className="mt-14">
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <h2 className="font-semibold text-2xl text-white"><span className="text-[#C778DD]">#</span>projects</h2>
                        <hr className="w-24 md:w-96 border-[1px] border-[#C778DD]" />
                    </div>
                    <div className="flex items-center">
                        <Link to="/works">{"View all -->"}</Link>
                    </div>
                </div>
                <div className="min-w-full my-10 flex flex-wrap justify-evenly">
                    {
                        projects.map((item) => (
                            <ProjectCard key={item.projectName} {...item} />
                        ))
                    }
                </div>
                <div className="my-20">
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <h2 className="font-semibold text-2xl text-white"><span className="text-[#C778DD]">#</span>skills</h2>
                            <hr className="w-56 border-[1px] border-[#C778DD]" />
                        </div>
                    </div>
                    <Skills skills={skills} />
                </div>
                <div className="flex gap-2 items-center mt-14">
                    <h2 className="font-semibold text-2xl text-white"><span className="text-[#C778DD]">#</span>about me</h2>
                    <hr className="w-44 border-[1px] border-[#C778DD]" />
                </div>
                <AboutMe />
                <div className="flex gap-2 items-center mt-14">
                    <h2 className="font-semibold text-2xl text-white"><span className="text-[#C778DD]">#</span>contact me</h2>
                    <hr className="w-44 border-[1px] border-[#C778DD]" />
                </div>
                <ContactMe />
            </div>
        </>
    );
}
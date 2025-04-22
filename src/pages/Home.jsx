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
            imgUrl: "/pages/Home/NanoShare.jpg",
            skills: ["WebRTC", "Socket.io", "NodeJS", "ExpressJS", "ReactJS", "React-Redux", "React-Router-DOM", "Tailwind-CSS", "JavaScript"],
            projectName: "NanoShare",
            description: "A a Peer-to-Peer file transfer system for secure, high-speed file sharing with no storage limitations, enabling direct device-to-device connections.",
            liveLink: "https://nanoshare.vercel.app",
            github: "https://github.com/bkvats/Nanoshare",
        },
        {
            imgUrl: "/pages/Home/MemoryGame.jpg",
            skills: ["HTML", "CSS", "JavaScript", "DOM Manupilation"],
            projectName: "Memory Mania",
            description: "A Single Page Gaming Application purely in JavaScript without using any external framework/library",
            liveLink: "https://bkvats.github.io/MemoryGame/",
            github: "https://github.com/bkvats/MemoryGame",
        }
    ];
    const skills = [
        {
            skillName: "Programming Languages",
            skillTools: ["Java", "Python", "JavaScript", "TypeScript"]
        },
        {
            skillName: "Core Fundamentals",
            skillTools: ["Data Structures & Algorithms", "System Design", "Object-Oriented Programming (OOP)", "REST APIs"]
        },
        {
            skillName: "Frameworks & Libraries",
            skillTools: ["React.js", "Redux", "Express.js", "Node.js"]
        },
        {
            skillName: "Additional Skills & Tools",
            skillTools: ["VSCode", "Git", "Github", "Linux", "WebRTC", "PostMan", "Vercel", "Adobe Photoshop"]
        },
        {
            skillName: "Databases",
            skillTools: ["MySQL", "MongoDB"]
        }
    ];
    const achievements = [
        {
            skillName: "10 Coursera Certifications in various fields recommended  by AKTU",
        },
        {
            skillName: "⭐⭐⭐⭐⭐ Stars on HackerRank with 600+ Hackos.",
        },
        {
            skillName: "LeetCode’s Problem Solver Badge 2024 Holder (awarded to top 7% of LeetCode Competitors)",
        },
        {
            skillName: "Successfully solved more than 300+ problems on GFG (GeeksForGeeks) with 1000+ points",
        },
        {
            skillName: "Successfully solved more than 270+ problems on LeetCode",
        },
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
                <div className="my-20">
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <h2 className="font-semibold text-2xl text-white"><span className="text-[#C778DD]">#</span>achievements</h2>
                            <hr className="w-32 border-[1px] border-[#C778DD]" />
                        </div>
                    </div>
                    <div className="flex justify-evenly items-center">
                        <div className="w-full lg:w-[50%] mt-10 flex flex-wrap justify-evenly">
                            {
                                achievements.map((item) => (
                                    <SkillCard key={item.skillName} {...item} />
                                ))
                            }
                        </div>
                        <div className="hidden lg:block">
                            <img src="/pages/About/facts.svg" alt="skill image" width={250} />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 items-center mt-14">
                    <h2 className="font-semibold text-2xl text-white"><span className="text-[#C778DD]">#</span>contact me</h2>
                    <hr className="w-44 border-[1px] border-[#C778DD]" />
                </div>
                <ContactMe />
            </div>
        </>
    );
}

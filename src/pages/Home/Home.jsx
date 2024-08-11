import React from "react";
import { AboutMe, ContactMe, Intro, ProjectCard, Quote, SkillCard } from "../../components";
import { Link } from "react-router-dom";
export default function Home() {
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
                    {/* imgUrl, skills, projectName, description, liveLink, github */}
                    <ProjectCard imgUrl={"src/pages/Home/images/BSharmaBlogs.jpg"} skills={["HTML", "Tailwind-CSS", "ReactJS", "React-Router-DOM", "React-Redux", "Appwrite"]} projectName={"BSharma Blogs"} description={"My Personal Blogging Web Application"} liveLink={"https://bsharma-blogs.vercel.app"} github={"https://github.com/bkvats/PersonalBlogAppinReact"} />
                    <ProjectCard imgUrl={"src/pages/Home/images/MemoryGame.jpg"} skills={["HTML", "CSS", "JavaScript", "DOM Manupilation"]} projectName={"Memory Mania"} description={"A Single Page Gaming Application purely in JavaScript without using any external framework/library"} liveLink={"https://bkvats.github.io/MemoryGame/"} github={"https://github.com/bkvats/MemoryGame"} />
                    <ProjectCard imgUrl={"src/pages/Home/images/Portfolio.jpg"} skills={["Figma", "HTML", "Tailwind-CSS", "ReactJS", "React-Router-DOM"]} projectName={"Portfolio"} description={"You are using it currently."} github={"https://github.com/bkvats/Portfolio"} />
                </div>
                <div className="my-20">
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <h2 className="font-semibold text-2xl text-white"><span className="text-[#C778DD]">#</span>skills</h2>
                            <hr className="w-56 border-[1px] border-[#C778DD]" />
                        </div>
                    </div>
                    <div className="flex justify-evenly items-center">
                        <div className="hidden lg:block">
                            <img src="src/pages/Home/images/skills.svg" alt="skill image" />
                        </div>
                        <div className="w-full lg:w-[50%] mt-10 flex flex-wrap justify-evenly">
                            <SkillCard skillName={"Key Skills"} skillTools={["Data Structures", "Algorithms", "OOPs"]} />
                            <SkillCard skillName={"Programming Languages"} skillTools={["Java", "Python", "C"]} />
                            <SkillCard skillName={"Web Dev"} skillTools={["HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NodeJs", "MERN Stack"]} />
                            <SkillCard skillName={"Databases"} skillTools={["MySQL", "MongoDB"]} />
                            <SkillCard skillName={"CSE Foundationals"} skillTools={["Operating Systems", "Computer Networks"]} />
                            <SkillCard skillName={"Additional Skills & Tools"} skillTools={["VSCode", "Git", "Github", "Linux", "Adobe Photoshop", "WonderShare Filmora"]} />
                        </div>
                    </div>
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
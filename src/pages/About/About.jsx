import React from "react";
import { AboutMe, SkillCard } from "../../components";
export default function About() {
    return (
        <div className="mt-14">
            <div>
                <h1 className="font-semibold text-3xl"><span className="text-[#C778DD]">/</span>about me</h1>
                <p className="font-light text-[#ABB2BF] mt-2">who am i?</p>
            </div>
            <AboutMe />
            <div className="my-20">
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <h2 className="font-semibold text-2xl text-white"><span className="text-[#C778DD]">#</span>my-skills</h2>
                            <hr className="w-32 border-[1px] border-[#C778DD]" />
                        </div>
                    </div>
                    <div className="flex justify-evenly items-center">
                        <div className="hidden lg:block">
                            <img src="src/pages/Home/images/skills.svg" alt="skill image" />
                        </div>
                        <div className="w-full lg:w-[50%] mt-10 flex flex-wrap justify-evenly">
                            <SkillCard skillName={"Programming Languages"} skillTools={["Java", "Python", "C"]} />
                            <SkillCard skillName={"Key Skills"} skillTools={["Data Structures", "Algorithms", "OOPs"]} />
                            <SkillCard skillName={"Databases"} skillTools={["MySQL", "MongoDB"]} />
                            <SkillCard skillName={"CSE Foundationals"} skillTools={["Operating Systems", "Computer Networks"]} />
                            <SkillCard skillName={"Web Dev"} skillTools={["HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NodeJs", "MERN Stack"]} />
                            <SkillCard skillName={"Additional Skills & Tools"} skillTools={["VSCode", "Git", "Github", "Linux", "Adobe Photoshop", "WonderShare Filmora"]} />
                        </div>
                    </div>
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
                            <SkillCard skillName={"10 Coursera Certifications in various fields recommended  by AKTU"} />
                            <SkillCard skillName={"⭐⭐⭐⭐⭐ Stars on Hacker Rank."} />
                            <SkillCard skillName={"LeetCode’s 50 Days Badge 2024 Holder (awarded to 6.9% of LeetCode Competitors)"} />
                            <SkillCard skillName={"Successfully solved more than 265+ problems on GFG with 800+ points (GeeksForGeeks)."} />
                            <SkillCard skillName={"Successfully solved more than 180+ problems on LeetCode."} />
                        </div>
                        <div className="hidden lg:block">
                            <img src="src/pages/Home/images/facts.svg" alt="skill image" width={250} />
                        </div>
                    </div>
                </div>
            <div className="my-20">
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <h2 className="font-semibold text-2xl text-white"><span className="text-[#C778DD]">#</span>my-facts</h2>
                            <hr className="w-32 border-[1px] border-[#C778DD]" />
                        </div>
                    </div>
                    <div className="flex justify-evenly items-center">
                        <div className="mt-10 hidden lg:block">
                            <img src="src/pages/Home/images/skills.svg" alt="skill image" />
                        </div>
                        <div className="w-full lg:w-[50%] mt-10 flex flex-wrap justify-evenly">
                            <SkillCard skillName={"I Code for happiness✨ and money💲 both..."} />
                            <SkillCard skillName={"🎬 Inception, Phir Hera Phira, Interstellar and Munna Bhai MBBS are some of my favorite movies.."} />
                            <SkillCard skillName={"Sprituality is the base of the life...🏹🪔🙇‍♂️"} />
                            <SkillCard skillName={"🏃‍♂️ Cricket and Kabbaddi are my favourite sports, I am sportholic..."} />
                            <SkillCard skillName={"I can be both hardworking and lazy at the same time 😎"} />
                        </div>
                    </div>
                </div>
        </div>
    );
}
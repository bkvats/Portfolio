import React from "react";
import SkillCard from "../SkillCard";
export default function Skills({ skills }) {
    return (
        <div className="flex justify-evenly items-center">
            <div className="hidden lg:block">
                <img src="src/components/Skills/images/skills.svg" alt="skill image" />
            </div>
            <div className="w-full lg:w-[50%] mt-10 flex flex-wrap justify-evenly">
                {
                    skills.map((item) => (
                        <SkillCard key={item.skillName} {...item} />
                    ))
                }
            </div>
        </div>
    );
}
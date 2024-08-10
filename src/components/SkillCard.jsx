import React from "react";
export default function SkillCard({skillName, skillTools}) {
    return (
        <div className="m-2 w-1/4 border-2 border-white">
            <div className="p-2 border-b-2 border-white">{skillName}</div>
            <div className="px-2 text-[#ABB2BF]">{skillTools.join(" ")}</div>
        </div>
    );
}
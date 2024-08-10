import React from "react";
export default function ProjectCard({imgUrl, skills, projectName, description, liveLink, github}) {
    return (
        <div className="w-1/4 border-2 border-white flex flex-col m-2">
            <div className="border-b-2 border-white">
                <img src={imgUrl} alt="" />
            </div>
            <div className="text-[#ABB2BF] border-b-2 borde-white text-sm p-2">
                <p className="inline">{skills.join(", ")}</p>
            </div>
            <div className="p-2 mt-2">
                <h3 className="my-2 text-xl font-semibold">{projectName}</h3>
                <p className="text-[#ABB2BF]">{description}</p>
                <div className="font-light mt-4 mb-2">
                    <button className="border-2 border-[#C778DD] py-1 px-3">{liveLink + " <-> "}</button>
                    <button className="border-2 border-[#ABB2BF] py-1 px-3 mx-2 text-[#ABB2BF]">{github + " # "}</button>
                </div>
            </div>
        </div>
    );
}
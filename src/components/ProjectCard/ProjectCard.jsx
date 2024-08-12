import React from "react";
export default function ProjectCard({imgUrl = "src/components/ProjectCard/images/project_template_image.jpg", skills, projectName, description, liveLink = "#", github = "#"}) {
    return (
        <div className="w-[330px] h-fit border-2 border-white flex flex-col m-2">
            {imgUrl !== "mini" && <div className="border-b-2 border-white">
                <img src={imgUrl} alt="" />
            </div>}
            <div className="text-[#ABB2BF] border-b-2 borde-white text-sm p-2">
                <p className="inline">{skills.join(", ")}</p>
            </div>
            <div className="p-2 mt-2">
                <h3 className="my-2 text-xl font-semibold">{projectName}</h3>
                <p className="text-[#ABB2BF]">{description}</p>
                <div className="font-light mt-4 mb-2">
                    <a href={liveLink === "mini" ? github : liveLink} target="_blank" className={`border-2 border-[#C778DD] py-1 px-3 ${liveLink === "#" ? "cursor-not-allowed" : ""}`} onClick={(event) => {
                        if (liveLink === "#") event.preventDefault();
                    }}>{`${liveLink === "mini" ?"Github #" : "Live <->"}`}</a>
                    {liveLink !== "mini" && <a href={github} target="_blank" className={`border-2 border-[#ABB2BF] py-1 px-3 mx-2 text-[#ABB2BF] ${github === "#" ? "cursor-not-allowed" : ""}`}onClick={(event) => {
                        if (liveLink === "#") event.preventDefault();
                    }}>{"Github #"}</a>}
                </div>
            </div>
        </div>
    );
}
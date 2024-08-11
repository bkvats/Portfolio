import React from "react";
export default function AboutMe() {
    return (
        <div className="flex justify-around mt-10 flex-wrap-reverse items-center">
            <div className="w-[90%] lg:w-[50%] text-light text-center lg:text-left text-[#ABB2BF]">
                <p className="my-4">Namaste! i'm Bhupender Kumar Sharma,</p>
                <p className="my-4">I’m a full-stack developer based in Noida, Bharat. I can develop web applications from scratch and raise them into modern user-friendly web experiences.</p>
                <p>I bring a strong foundation in Data Structures and Algorithms combined with hands-on experience in full-stack web development. My approach to problem-solving involves a meticulous analysis of complex issues and a commitment to crafting efficient, scalable solutions. I thrive on translating intricate requirements into intuitive, user-friendly applications, leveraging my skills in both front-end and back-end technologies.</p>
            </div>
            <div>
                <img className="rounded-full" src="src/components/AboutMe/images/image.png" alt="" width={300} />
            </div>
        </div>
    );
}
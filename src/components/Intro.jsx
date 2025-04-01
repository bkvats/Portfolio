import React from "react";
import { Link } from "react-router-dom";
import { ImDownload } from "react-icons/im";
export default function Intro() {
    return (
        <div className="w-full flex flex-col justify-evenly items-center mt-20 lg:flex-row">
            <div>
                <img src="/components/Intro/bg-portfolioimage.jpg" alt="bimage" className="rounded-full mx-2 w-[300px] lg:w-[500px]" />
            </div>
            <div>
                <h1 className="text-4xl font-semibold m-7">I'm Software Developer skilled in <span className="text-[#C778DD]">DSA</span> and <span className="text-[#C778DD]">Full-Stack Development</span></h1>
                <p className="text-[#ABB2BF] m-7">I design and develop responsive web applications where technologies meet creativity</p>
                <div className="lg:ml-7 flex flex-wrap items-center justify-evenly lg:w-fit lg:gap-4">
                    <a href="https://drive.google.com/file/d/1Y0CcDMeWTE5-fjApFUwHeLuUz_6wvHvd/view?usp=sharing" className="flex items-center gap-2 border-2 border-[#C778DD] py-2 px-4" download={"BSharmaResume"} target="_blank">< ImDownload/>Download CV</a>
                    <Link to="/contacts" className="border-2 border-[#ABB2BF] py-2 px-4 text-[#ABB2BF]">Contact me !!</Link>
                </div>
            </div>
        </div>
    )
}

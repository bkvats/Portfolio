import React from "react";
import { Link } from "react-router-dom";
export default function Intro() {
    return (
        <div className="w-full flex flex-col justify-evenly items-center mt-20 lg:flex-row">
            <div>
                <img src="/src/components/Intro/images/bg-portfolioimage.jpg" alt="bimage" className="rounded-full mx-2 w-[300px] lg:w-[500px]" />
            </div>
            <div>
                <h1 className="text-4xl font-semibold m-7">I'm Software Developer skilled in <span className="text-[#C778DD]">DSA</span> and <span className="text-[#C778DD]">Full-Stack Development</span></h1>
                <p className="text-[#ABB2BF] m-7">I design and develop responsive web applications where technologies meet creativity</p>
                <Link to="/contacts" className="m-7 border-2 border-[#C778DD] py-2 px-4">Contact me !!</Link>
            </div>
        </div>
    )
}
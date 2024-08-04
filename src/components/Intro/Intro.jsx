import React from "react";
export default function Intro() {
    return (
        <div className="w-full flex flex-col justify-evenly items-center mt-20 lg:flex-row">
            <div className="">
                {/* <img src="src/components/Intro/images/back-square.svg" alt="" width={200} className="" /> */}
                <img src="src/components/Intro/images/bg-portfolioimage.jpg" alt="bimage" className="rounded-full mx-2 w-[300px] lg:w-[500px]" />
            </div>
            <div>
                <h1 className="text-4xl font-semibold m-7">Bhupender is a <span className="text-[#C778DD]">web designer</span> and <span className="text-[#C778DD]">full-stack developer</span></h1>
                <p className="text-[#ABB2BF] m-7">He crafts responsive websites where technologies meet creativity</p>
                <button className="m-7 border-2 border-[#C778DD] py-2 px-4">Contact me !!</button>
            </div>
        </div>
    )
}
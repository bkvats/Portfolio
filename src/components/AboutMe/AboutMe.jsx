import React from "react";
export default function AboutMe() {
    return (
        <div className="flex p-2 justify-around">
            <div className="w-[50%] text-light text-[#ABB2BF]">
                <p className="my-4">Hello! i'm Bhupender</p>
                <p className="my-4">I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
                <p>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
            </div>
            <div>
                <img className="rounded-full" src="src/components/AboutMe/images/image.png" alt="" width={270}/>
            </div>
        </div>
    );
}
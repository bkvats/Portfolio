import React from "react";
export default function AboutMe() {
    return (
        <div className="flex justify-around mt-10">
            <div className="w-[50%] text-light text-[#ABB2BF]">
                <p className="my-4">Namaste! i'm Bhupender Kumar Sharma,</p>
                <p className="my-4">I’m a self-taught full-stack developer based in Noida, Bharat. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
                <p>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
            </div>
            <div>
                <img className="rounded-full" src="src/components/AboutMe/images/image.png" alt="" width={300} />
            </div>
        </div>
    );
}
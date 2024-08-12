import React from "react";
import { ContactMe } from "../components";
export default function Contact() {
    const allmedia = [
        {
            link: "https://x.com/BSharma10111",
            name: "x"
        },
        {
            link: "https://leetcode.com/u/bkvats/",
            name: "leetcode"
        },
        {
            link: "https://www.linkedin.com/in/bhupender-kumar-sharma-2a144a2a7/",
            name: "linkedin"
        },
        {
            link: "https://github.com/bkvats",
            name: "github"
        },
        {
            link: "https://www.geeksforgeeks.org/user/bkvatsnx6l/",
            name: "gfg"
        }
    ]
    return (
        <div className="mt-14">
            <div>
                <h1 className="font-semibold text-3xl"><span className="text-[#C778DD]">/</span>contact-me</h1>
                <p className="font-light text-[#ABB2BF] mt-2">where to find me?</p>
                <ContactMe />
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <h2 className="font-semibold text-2xl text-white"><span className="text-[#C778DD]">#</span>all-media</h2>
                    <hr className="w-32 border-[1px] border-[#C778DD]" />
                </div>
            </div>
            <div className="mt-10 flex justify-center items-center gap-2">
                {
                    allmedia.map((item) => (
                        <a key={item.name} href={item.link} target="_blank"><img src={`/pages/Contact/${item.name}.svg`} alt={item.name + " logo"} className="hover:rounded-full hover:bg-slate-700 p-2" /></a>
                    ))
                }
            </div>
        </div>
    );
}
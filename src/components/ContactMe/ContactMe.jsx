import React from "react";
export default function ContactMe() {
    return (
        <div className="flex p-2 justify-around my-10">
            <div className="w-[40%] text-light text-[#ABB2BF]">
                <div className="flex gap-2 items-center">
                    <h2 className="font-semibold text-2xl text-white"><span className="text-[#C778DD]">#</span>contact me</h2>
                    <hr className="w-44 border-[1px] border-[#C778DD]" />
                </div>
                <p className="my-4">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
            </div>
            <div className="border-[1px] border-white p-2 h-20 self-end">
                <p>Message me here</p>
                <div className="flex gap-1 items-center text-[#ABB2BF]">
                    <img src="src/components/ContactMe/images/email.svg" alt="" />
                    <p>bkvats2394@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
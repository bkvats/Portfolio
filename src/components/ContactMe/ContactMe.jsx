import React from "react";
export default function ContactMe() {
    return (
        <div className="flex justify-around my-10">
            <div className="w-[40%] text-light text-[#ABB2BF]">
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
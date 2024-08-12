import React from "react";
export default function ContactMe() {
    return (
        <div className="flex justify-around my-10 flex-wrap">
            <div className="w-[90%] lg:w-[55%] text-light text-[#ABB2BF] mb-10 lg:mb-0">
                <p className="my-4">I’m interested in working with reputated and innovative organisations, and also eager for freelance opportunities as well. However, if you have other request or question, don’t hesitate to contact me</p>
            </div>
            <div className="border-[1px] border-white p-2 h-20 self-end">
                <p>Message me here</p>
                <div className="flex gap-1 items-center text-[#ABB2BF]">
                    <img src="/public/components/ContactMe/email.svg" alt="" />
                    <p>bkvats2394@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
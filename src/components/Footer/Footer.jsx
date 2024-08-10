import React from "react";
export default function Footer() {
    return (
        <footer>
            <hr className="border-[1px] border-[#ABB2BF]" />
            <div className="p-2 flex justify-around mt-5 mb-10">
                <div>
                <div className="flex gap-2">
                    <img src="src/components/Footer/images/logo.svg" alt="logo" />
                    <p>Bhupender Kr. Sharma <span className="text-[#ABB2BF] mx-7">bkvats2394@gmail.com</span></p>
                </div>
                <p className="mt-3 font-light">Web designer and front-end developer</p>
                </div>
                <div>
                    <p className="font-semibold text-lg">Media</p>
                    <div className="flex gap-2">
                        <img src="src/components/Footer/images/x.svg" alt="" />
                        <img src="src/components/Footer/images/linkedin.svg" alt="" />
                        <img src="src/components/Footer/images/github.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="text-center text-[#ABB2BF] font-light mb-4">© Copyright 2024. Made by Bhupender</div>
        </footer>
    );
}
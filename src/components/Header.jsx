import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
    const links = [
        {
            name: "home",
            to: "/"
        },
        {
            name: "works",
            to: "/works"
        },
        {
            name: "about-me",
            to: "/about-me"
        },
        {
            name: "contacts",
            to: "/contacts"
        }
    ];
    const [sideBurger, setSideBurger] = useState(false);
    return (
        <header className="sticky top-0 bg-[#282C33] pb-2 shadow-md">
            <nav className="h-12 flex m-2 justify-between items-end">
                <div className="ml-4 flex gap-2">
                    <img src="/public/components/Header/logo.svg" alt="logo" />
                    <p>Bhupender Kr. Sharma</p>
                </div>
                <div className={`hidden lg:block w-3/5`}>
                    <ul className="w-full flex justify-around text-lg">
                        {
                            links.map((item) => (
                                <li key={item.name}> <NavLink to = {item.to} className={({isActive}) => `hover:text-white ${isActive ? "" : "text-[#ABB2BF]"}`}><span className="text-[#C778DD]">#</span>{item.name}</NavLink></li>
                            ))
                        }
                    </ul>
                </div>
                <div className={`block lg:hidden text-xl`} onClick={() => {
                    setSideBurger(true);
                }}><img src = "/public/components/Header/sideBurger.svg" className="cursor-pointer"></img></div>
                <div className={`${sideBurger ? "block" : "hidden"} w-full h-screen absolute top-0 bg-[#282C33]`}>
                    <button className="text-4xl m-2 cursor-pointer" onClick={() => {
                        setSideBurger(false);
                    }}>x</button>
                    <ul className="w-full flex flex-col h-1/2 justify-evenly text-2xl">
                        {
                            links.map((item) => (
                                <li key={item.name}><NavLink to = {item.to} className={({isActive}) => `hover:text-white ${isActive ? "" : "text-[#ABB2BF]"}`} onClick={() => {
                                    setSideBurger(false);
                                }}><span className="text-[#C778DD]">#</span>{item.name}</NavLink></li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
}
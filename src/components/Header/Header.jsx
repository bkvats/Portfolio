import React from "react";
export default function Header() {
    const links = [
        {
            name: "home",
            to: "/"
        },
        {
            name: "contact",
            to: "/contacts"
        },
        {
            name: "about me",
            to: "/about"
        },
        {
            name: "contacts",
            to: "/contacts"
        }
    ];
    return (
        <header>
            <nav className="h-12 flex m-2 justify-between items-end">
                <div className="flex gap-2">
                    <img src="src/components/Header/images/logo.svg" alt="logo" />
                    <p>Bhupender Kr. Sharma</p>
                </div>
                <div className="w-3/5">
                    <ul className="w-full flex justify-around">
                        {
                            links.map((item) => (
                                <li key={item.name}><span className="text-[#C778DD]">#</span>{item.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
}
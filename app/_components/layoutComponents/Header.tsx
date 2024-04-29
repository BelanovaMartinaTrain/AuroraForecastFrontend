"use client";

import Link from "next/link";
import Menu from "./Menu";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { useHemisphereContext } from "../../_context/hemisphereContext";

export default function Header() {
    const { hemisphere } = useHemisphereContext();
    const [title, setTitle] = useState("Borealis");

    useEffect(() => {
        setTitle(hemisphere === "Northern" ? "Borealis" : "Australis");
    }, [hemisphere]);

    return (
        <header>
            <h1
                className="[font-size:var(--font-h1-size)] py-6  max-w- font-angelica text-white text-center whitespace-nowrap m-0 p-0 "
                aria-label="Aurora Borealis Forecast"
            >
                <Link href="/dashboard" aria-label="Navigate to dashboard">
                    <span className="cursor-pointer title ">Aurora {title}</span>
                </Link>
            </h1>

            <Menu />
            <Navigation cssClass="cursor-pointer hidden md:flex xl:max-w-[769px] max-w-3xl mb-[0.7rem] justify-around mx-auto p-2 widget" />
        </header>
    );
}

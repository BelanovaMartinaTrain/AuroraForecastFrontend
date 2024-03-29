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
            <h1 className=" title" aria-label="Aurora Borealis Forecast">
                <Link href="/dashboard" aria-label="Navigate to dashboard">
                    <span className="cursor-pointer title">Aurora {title}</span>
                </Link>
            </h1>

            <Menu />
            <Navigation cssClass="nav-horizontal widget" />
        </header>
    );
}

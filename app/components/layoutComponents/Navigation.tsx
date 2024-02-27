"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({ cssClass, linksClass }: { cssClass?: string; linksClass?: string }) {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className={cssClass} role="menu">
            <Link href="/" role="menu item" aria-label="Navigate to Dashboard ">
                <h2 className={`${linksClass} ${pathname === "/" ? "active font-semibold " : ""} hover:font-bold`}>DASHBOARD</h2>
            </Link>
            <Link href="/graphs" role="menu item" aria-label="Navigate to Graphs ">
                <h2 className={`${linksClass} ${pathname === "/graphs" ? "active font-semibold " : ""} hover:font-bold`}>GRAPHS</h2>
            </Link>
            <Link href="/weather" role="menu item" aria-label="Navigate to Weather ">
                <h2 className={`${linksClass} ${pathname === "/weather" ? "active font-semibold " : ""} hover:font-bold`}>WEATHER</h2>
            </Link>
            <Link href="/about" role="menu item" aria-label="Navigate to About section">
                <h2 className={`${linksClass} ${pathname === "/about" ? "active font-semibold " : ""} hover:font-bold`}>ABOUT</h2>
            </Link>
        </nav>
    );
}

import Link from "next/link";

export default function Navigation({ cssClass, linksClass }: { cssClass?: string; linksClass?: string }) {
    return (
        <nav className={cssClass} role="menu">
            <Link href="/" role="menu item" aria-label="Navigate to Dashboard ">
                <h2 className={linksClass}>DASHBOARD</h2>
            </Link>
            <Link href="/graphs" role="menu item" aria-label="Navigate to Graphs ">
                <h2 className={linksClass}>GRAPHS</h2>
            </Link>
            <Link href="/weather" role="menu item" aria-label="Navigate to Weather ">
                <h2 className={linksClass}>WEATHER</h2>
            </Link>
            <Link href="/about" role="menu item" aria-label="Navigate to About section">
                <h2 className={linksClass}>ABOUT</h2>
            </Link>
        </nav>
    );
}

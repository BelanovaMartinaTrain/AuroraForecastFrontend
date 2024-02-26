import Link from "next/link";

export default function Navigation({ cssClass, linksClass }: { cssClass?: string; linksClass?: string }) {
    return (
        <nav className={cssClass}>
            <Link href="/">
                <h2 className={linksClass}>DASHBOARD</h2>
            </Link>
            <Link href="/graphs">
                <h2 className={linksClass}>GRAPHS</h2>
            </Link>
            <Link href="/weather">
                <h2 className={linksClass}>WEATHER</h2>
            </Link>
            <Link href="/about">
                <h2 className={linksClass}>ABOUT</h2>
            </Link>
        </nav>
    );
}

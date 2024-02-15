import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="widget">
            <Link href="/">
                <h2>DASHBOARD</h2>
            </Link>
            <Link href="/graphs">
                <h2>GRAPHS</h2>
            </Link>
            <Link href="/weather">
                <h2>WEATHER</h2>
            </Link>
            <Link href="/blog">
                <h2>BLOG</h2>
            </Link>
        </nav>
    );
}

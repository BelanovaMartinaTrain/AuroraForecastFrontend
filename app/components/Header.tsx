import Link from "next/link";
import Menu from "./Menu";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header>
            <Link href="/">
                <h1 className="title">Aurora Borealis</h1>
            </Link>
            <Menu />
            <Navigation />
        </header>
    );
}

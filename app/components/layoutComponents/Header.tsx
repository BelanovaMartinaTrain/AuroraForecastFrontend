import Link from "next/link";
import Menu from "./Menu";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header>
            <h1 className="title">
                <Link href="/">
                    <span className="cursor-pointer">Aurora Borealis</span>
                </Link>
            </h1>

            <Menu />
            <Navigation cssClass="nav-horizontal widget" />
        </header>
    );
}

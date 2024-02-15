import Image from "next/image";
import Clock from "./Clock";

export default function Menu() {
    const now = new Date();
    const tmzAbrr = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return (
        <menu className="">
            <span className="material-symbols-outlined menu-btn widget-for-small ">
                <Image src="/icons/menu.svg" alt="menu icon" className="center" width={35.2} height={35.2} />
            </span>

            <div className="time center">
                <div className="time-nav widget heigth-100">
                    <Clock className="font-smaller" time={now.getTime()} tmzAbrr={tmzAbrr} />
                    <Clock className="font-smaller" time={now.getTime()} timezone="UTC" tmzAbrr={tmzAbrr} />
                </div>
            </div>
        </menu>
    );
}

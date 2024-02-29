import Clock from "../../ui/Clock";
import HamburgerMenu from "../../ui/HamburgerMenu";

export default function Menu() {
    const now = new Date();
    const tmzAbrr = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (
        <>
            <menu className="">
                <HamburgerMenu />
                <div className="time center">
                    <div className="time-nav widget heigth-100">
                        <Clock className="font-smaller font-normal" time={now.getTime()} tmzAbrr={tmzAbrr} />
                        <Clock className="font-smaller font-normal ml-2" time={now.getTime()} timezone="UTC" tmzAbrr={tmzAbrr} />
                    </div>
                </div>
            </menu>
        </>
    );
}

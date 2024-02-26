import Clock from "../subComponents/Clock";
import HamburgerMenu from "../subComponents/HamburgerMenu";

export default function Menu() {
    const now = new Date();
    const tmzAbrr = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (
        <>
            <menu className="">
                <HamburgerMenu />
                <div className="time center">
                    <div className="time-nav widget heigth-100">
                        <Clock className="font-smaller" time={now.getTime()} tmzAbrr={tmzAbrr} />
                        <Clock className="font-smaller" time={now.getTime()} timezone="UTC" tmzAbrr={tmzAbrr} />
                    </div>
                </div>
            </menu>
        </>
    );
}

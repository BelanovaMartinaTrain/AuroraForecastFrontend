import Clock from "../uiComponents/Clock";
import HamburgerMenu from "../uiComponents/HamburgerMenu";

export default function Menu() {
    const now = new Date();
    const tmzAbrr = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (
        <>
            <menu className="flex justify-between m-0 py-2 rounded-lg md:hidden">
                <HamburgerMenu />
                <div className="items-center">
                    <div className="flex justify-around items-center px-2 max-w-80 widget h-full">
                        <Clock className="font-smaller font-normal" time={now.getTime()} tmzAbrr={tmzAbrr} />
                        <Clock className="font-smaller font-normal ml-3" time={now.getTime()} timezone="UTC" tmzAbrr={tmzAbrr} />
                    </div>
                </div>
            </menu>
        </>
    );
}

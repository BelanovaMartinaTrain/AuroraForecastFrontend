"use client";

import Navigation from "../layoutComponents/Navigation";
import { useEffect, useRef, useState } from "react";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const classnames = "  absolute  z-40 left-0 bg-black bg-opacity-75 w-screen   backdrop-blur-sm  transition-all duration-300  ease-out";
    const linkclass = "  font-normal text-center transition-all duration-300 delay-1000 ease-in-out origin-top-right ";
    const refMenu = useRef(null);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setIsOpen((prev) => !prev);
        event.stopPropagation();
    };

    function handleDismiss(event: MouseEvent) {
        if (refMenu.current && !event.composedPath().includes(refMenu.current)) {
            setIsOpen(false);
        }
    }

    function handleEscapeDismiss(event: KeyboardEvent) {
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener("click", handleDismiss);
        document.body.addEventListener("keydown", handleEscapeDismiss);
        return () => {
            document.body.removeEventListener("click", handleDismiss);
            document.body.removeEventListener("keydown", handleEscapeDismiss);
        };
    }, []);

    return (
        <div className={` ${!!isOpen ? " rounded grid-flow-col" : ""} `} ref={refMenu}>
            <button
                onClick={handleClick}
                className="flex flex-col justify-center items-center text-[2.2rem] w-[2.2rem] h-[2.2rem] widget-for-small relative"
                aria-label="menu button"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span
                    className={`bg-[gainsboro] transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm ${!!isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                ></span>
                <span
                    className={`bg-[gainsboro] block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm my-0.5 ${!!isOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                    className={`bg-[gainsboro] block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm ${!!isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                ></span>
            </button>
            <div onClick={() => setIsOpen(false)}>
                {" "}
                <Navigation
                    cssClass={`${classnames} ${!isOpen ? " h-0  " : "h-80 p-6"}`}
                    linksClass={`${linkclass} ${!isOpen ? "hidden opacity-0 text-xs p-0" : " opacity-100 text-xl p-5 "}`}
                />
            </div>
        </div>
    );
}

"use client";

import Navigation from "../components/layoutComponents/Navigation";
import { useEffect, useRef, useState } from "react";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const classnames = "menu h-52 absolute rounded-[8px] z-40 p-6 bg-black bg-opacity-80 w-80  mt-1 backdrop-blur-[4px]  ";
    const linkclass = "p-2 text-base font-normal";
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
            document.body.addEventListener("keydown", handleEscapeDismiss);
        };
    }, []);

    return (
        <div className={` ${!!isOpen ? " rounded grid-flow-col" : ""} `} ref={refMenu}>
            <button
                onClick={handleClick}
                className="flex flex-col justify-center items-center menu-btn widget-for-small relative "
                aria-label="menu button"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span
                    className={`bg-[gainsboro] transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                ></span>
                <span
                    className={`bg-[gainsboro] block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                    className={`bg-[gainsboro] block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                ></span>
            </button>
            <div onClick={() => setIsOpen(false)}>{!!isOpen && <Navigation cssClass={classnames} linksClass={linkclass} />}</div>
        </div>
    );
}

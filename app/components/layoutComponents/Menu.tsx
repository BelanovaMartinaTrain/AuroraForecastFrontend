"use client";

import Image from "next/image";
import Clock from "../subComponents/Clock";
import Navigation from "./Navigation";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import styles from "../../styles/header.module.css";

export default function Menu() {
    const now = new Date();
    const tmzAbrr = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const [isOpen, setIsOpen] = useState(false);
    const classnames = "menu h-52 absolute rounded-[8px] z-40 p-6 bg-black bg-opacity-80 w-2/3  mt-1 backdrop-blur-[4px] ";
    const linkclass = "p-2 ";
    const refMenu = useRef(null);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setIsOpen((prev) => !prev);
        console.log("click");
        event.stopPropagation();
    };

    console.log("ISOPEN", isOpen);

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

    console.log("rerender");

    return (
        <>
            <menu className="">
                <div className={` ${!!isOpen && " rounded grid-flow-col"} `} ref={refMenu}>
                    <button onClick={handleClick} className="flex flex-col justify-center items-center menu-btn widget-for-small relative">
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

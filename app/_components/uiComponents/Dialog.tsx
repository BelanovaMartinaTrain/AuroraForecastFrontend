"use client";

import { useEffect, useRef, useState } from "react";
import { ModalOvationImage } from "@/app/_data/modalData";
import { useModalOpenContext } from "@/app/_context/modalOpenContext";

export default function Dialog() {
    const refDialog = useRef(null);
    const { isOpen, setIsOpen, imgUrl } = useModalOpenContext();

    function handleDismiss(event: MouseEvent) {
        if (refDialog.current && !event.composedPath().includes(refDialog.current)) {
            setIsOpen(false);
            console.log("click");
        }
    }

    function handleEscapeDismiss(event: KeyboardEvent) {
        if (event.key === "Escape") {
            setIsOpen(false);
            console.log("click");
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

    console.log(isOpen);

    return (
        <div
            tabIndex={-1}
            className={` absolute z-50    ${!!isOpen ? "   w-[99vw] bg-black bg-opacity-25 h-full top-0 left-0   backdrop-blur-sm " : ""} `}
            ref={refDialog}
            onClick={() => setIsOpen(false)}
        >
            <div className=" ">
                <span className={`     ${!isOpen ? " hidden  " : "block"}`}>
                    <ModalOvationImage imageUrl={imgUrl} />
                </span>
            </div>
        </div>
    );
}

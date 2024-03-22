"use client";

import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

type TIsOpen = { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>>; imgUrl: string; setImgUrl: Dispatch<SetStateAction<string>> };

export const modalOpenContext = createContext<TIsOpen | null>(null);

export default function ModalOpenContextProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [imgUrl, setImgUrl] = useState<string>("");

    console.log("context", isOpen);

    return <modalOpenContext.Provider value={{ isOpen, setIsOpen, imgUrl, setImgUrl }}>{children}</modalOpenContext.Provider>;
}

export function useModalOpenContext() {
    const context = useContext(modalOpenContext);
    if (!context) {
        throw new Error("Location and weather context can only be used inside <ModalOpenContextProvider/>");
    }
    return context;
}

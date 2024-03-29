"use client";

import { useEffect, useState } from "react";
import { useHemisphereContext } from "../_context/hemisphereContext";

export default function getTitle() {
    const { hemisphere } = useHemisphereContext();
    const [title, setTitle] = useState("Borealis");

    useEffect(() => {
        setTitle(hemisphere === "Northern" ? "Borealis" : "Australis");
    }, [hemisphere]);

    return title;
}

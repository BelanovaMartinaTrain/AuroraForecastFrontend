"use client";

import { useEffect, useState } from "react";
import ProgressBar from "../uiComponents/ProgressBar";
import Link from "next/link";

interface imageProps {
    title?: string;
    url: string;
    timerDuration: number;
    source: source;
}

type source = {
    urlSource: string;
    nameSource: string;
};

export default function WidgetImageGeneral({ title, url, timerDuration, source }: imageProps) {
    const [imageUrl, setImageUrl] = useState(url);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        function changeUrl() {
            const timestamp = Math.floor(Date.now() / 1000);
            //setImageUrl(`${url}&${timestamp}`); //TODO temporarily disabled
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 500);
        }
        changeUrl();
        const timer = setInterval(() => {
            changeUrl();
        }, timerDuration);
        return () => clearInterval(timer);
    }, [imageUrl]);

    return (
        <>
            <h3 className="img-text uppercase mb-2">{title}</h3>
            {!!isLoading && <ProgressBar />}

            <img
                src={`${imageUrl}`}
                alt="image of the predicted aurora oval, aurora activity in the next hour"
                className="w-full rounded-xl opacity-75 "
            />

            <p className="mt-4 font-medium text-stone-500">
                <span className="capitalize mr-1">Source:</span> {/*TODO add loading*/}
                <Link
                    href={source.urlSource}
                    className={`${!!isLoading && "visibility-hidden"}`}
                    aria-label="Link to source of used data - NOAA"
                    target="_blank"
                >
                    {source.nameSource}
                </Link>
            </p>
        </>
    );
}

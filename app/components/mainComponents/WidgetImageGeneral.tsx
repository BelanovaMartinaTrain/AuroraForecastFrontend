"use client";

import { useEffect, useState } from "react";
import ProgressBar from "../../ui/ProgressBar";
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
            setImageUrl(`${url}&${timestamp}`);
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 500);
        }
        changeUrl();
        const timer = setInterval(() => {
            changeUrl();
            console.log(timerDuration);
        }, timerDuration);
        return () => clearInterval(timer);
    }, [imageUrl]);

    return (
        <div className=" bg-black bg-opacity-70  center padding-small rounded-xl backdrop-blur-sm">
            <h3 className="img-text uppercase margin-xs-btm">{title}</h3>
            {!!isLoading && <ProgressBar />}
            <img
                src={`${imageUrl}`}
                alt="image of the predicted aurora oval, aurora activity in the next hour"
                className="w-full rounded-xl opacity-75"
            />
            {/* <embed type="text/html" src={imageUrl} width={900} height={600} /> */}
            <p className="mt-4 font-medium text-stone-500">
                <Link
                    href={source.urlSource}
                    className={`${!!isLoading && "visibility-hidden"}`}
                    aria-label="Link to source of used data - NOAA"
                    target="_blank"
                >
                    {source.nameSource}
                </Link>
            </p>
        </div>
    );
}

"use client";

import { useEffect, useState } from "react";
import ProgressBar from "../../ui/ProgressBar";
import Link from "next/link";

export default function WidgetImage() {
    const [imageUrl, setImageUrl] = useState("https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        function changeUrl() {
            const timestamp = Math.floor(Date.now() / 1000);
            setImageUrl(`https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg?${timestamp}`);
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 500);
        }
        changeUrl();
        const timer = setInterval(() => {
            changeUrl();
        }, 300000);
        return () => clearInterval(timer);
    }, [imageUrl]);

    return (
        <div className="widget center padding-small grid-item backdrop-blur-sm">
            <h3 className="img-text uppercase margin-xs-btm">Northern Hemisphere</h3>
            {!!isLoading && <ProgressBar />}
            <img
                src={`${imageUrl}`}
                alt="image of the predicted aurora oval, aurora activity in the next hour"
                className="img-latest"
                width={475}
                height={475}
            />
            <p className="mt-6 font-medium text-stone-500 text-[11px] ">
                <span className={`capitalize mr-1 ${!!isLoading ? "hidden" : ""}`}>Source:</span>
                <Link
                    href="https://www.swpc.noaa.gov/"
                    className={`${!!isLoading && "visibility-hidden"}`}
                    aria-label="Link to source of used data - NOAA"
                    target="_blank"
                >
                    NOAA
                </Link>
            </p>
        </div>
    );
}

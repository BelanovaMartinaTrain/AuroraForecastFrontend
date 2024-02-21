"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function WidgetImage() {
    const [imageUrl, setImageUrl] = useState("https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg");

    useEffect(() => {
        async function fetchImage() {
            const res = await fetch("https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg");
            const imageBlob = await res.blob();
            const newUrl = URL.createObjectURL(imageBlob);
            setImageUrl(newUrl);
        }
        const timer = setInterval(() => {
            fetchImage();
        }, 60000);
        return () => clearInterval(timer);
    }, [imageUrl]);

    return (
        <div className="widget center padding-small grid-item backdrop-blur-sm">
            <h3 className="img-text uppercase margin-xs-btm">Northern Hemisphere</h3>
            <Image src={`${imageUrl}`} alt="image of the latest aurora activity" className="img-latest" width={800} height={800} priority={true} onLoad={() => URL.revokeObjectURL(`${imageUrl}`)} />
        </div>
    );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function WidgetImage() {
    const [imageUrl, setImageUrl] = useState("https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg");

    useEffect(() => {
        function changeUrl() {
            const timestamp = Math.floor(Date.now() / 1000);
            setImageUrl(`https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg?${timestamp}`);
        }
        changeUrl();
        const timer = setInterval(() => {
            changeUrl();
        }, 60000);
        return () => clearInterval(timer);
    }, [imageUrl]);

    return (
        <div className="widget center padding-small grid-item backdrop-blur-sm">
            <h3 className="img-text uppercase margin-xs-btm">Northern Hemisphere</h3>
            <Image src={`${imageUrl}`} alt="image of the latest aurora activity" className="img-latest" width={800} height={800} priority={true} />
        </div>
    );
}

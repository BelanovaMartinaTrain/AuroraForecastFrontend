"use client";
import Image from "next/image";
import { useState } from "react";

export default function WidgetGeomagneticActivity() {
    const [toggle, setToggle] = useState(false);

    function handleClick() {
        setToggle(!toggle);
    }
    return (
        <>
            <h2 className="margin-xs-btm uppercase font-h2">Geomagnetic activity</h2>
            <div className="quickview-div">
                <div className="center grid-item quickview-item width-100">
                    <p className="relative">
                        Solar wind
                        <span className="material-symbols-outlined info-icon" onClick={handleClick}>
                            <Image src="/icons/info.svg" alt="info icon" width={16} height={16} />
                        </span>
                    </p>
                    <p className="margin-sm-btm"> speed</p>
                    <h3>315 km/sec</h3>
                </div>
                <div className="center quickview-item width-100">
                    <p className="relative margin-sm-btm">
                        Magnetic field
                        <span className="material-symbols-outlined info-icon">
                            <Image src="/icons/info.svg" alt="info icon" width={16} height={16} />
                        </span>
                    </p>
                    <h3>Bt: 5 nT</h3>
                    <h3>Bz: - 1 nT</h3>
                </div>
                <div className={`${toggle ? "" : "hidden"} absolute z-50 border-solid border-blue-50 top-80 h-20 backdrop-blur-xl`}>Modal</div>
            </div>
        </>
    );
}

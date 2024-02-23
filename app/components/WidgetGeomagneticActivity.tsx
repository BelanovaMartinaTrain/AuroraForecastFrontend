"use client";
import Image from "next/image";

export default function WidgetGeomagneticActivity() {
    return (
        <>
            <h2 className="margin-xs-btm uppercase font-h2">Solar Wind</h2>
            <div className="quickview-div">
                <div className="center grid-item quickview-item width-100">
                    <p className="relative">
                        Speed
                        <span className="material-symbols-outlined info-icon">
                            <Image src="/icons/info.svg" alt="info icon" width={16} height={16} />
                        </span>
                    </p>
                    <h3 className="padding-sm-btm">315 km/sec</h3>

                    <p className="relative">
                        Flux
                        <span className="material-symbols-outlined info-icon">
                            <Image src="/icons/info.svg" alt="info icon" width={16} height={16} />
                        </span>
                    </p>

                    <h3>173 sfu</h3>
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
            </div>
        </>
    );
}

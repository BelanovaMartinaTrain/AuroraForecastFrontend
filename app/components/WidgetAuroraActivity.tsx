"use client";
import Image from "next/image";

export default function WidgetAuroraActivity() {
    return (
        <>
            <h2 className="center margin-xs-btm uppercase font-h2">Aurora activity</h2>
            <div className="quickview-div grid-item padding-xs-btm ">
                <div className="center quickview-item width-100 padding-sm-r">
                    <p className="relative padding-xs-btm">
                        Kp index
                        <span className="material-symbols-outlined info-icon">
                            <Image src="/icons/info.svg" alt="info icon" width={16} height={16} />
                        </span>
                    </p>
                    <h3 className="bigger-font">3</h3>
                </div>
                <div className="center quickview-item width-100 padding-sm-r">
                    <p className="relative padding-xs-btm">Activity</p>
                    <h3 className="padding-sm-btm">Moderate</h3>
                    <p className="relative padding-xs-btm">
                        Geomagnetic storm
                        <span className="material-symbols-outlined info-icon">
                            <Image src="/icons/info.svg" alt="info icon" width={16} height={16} />
                        </span>
                    </p>

                    <h3 className="padding-xs-btm">G1</h3>
                </div>
            </div>
        </>
    );
}

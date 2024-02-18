import Image from "next/image";
import Clock from "./components/Clock";
import { Graph } from "./components/Graph";
import Comp from "./components/Comp";

export default function Dashboard() {
    const now = new Date();
    const tmzAbrr = "Europe/Bratislava";
    return (
        <>
            <div className="grid">
                <div className="widget center padding-small height-max-widget">
                    <h2 className="center margin-xs-btm uppercase font-h2">Aurora activity</h2>
                    <div className="quickview-div grid-item padding-xs-btm ">
                        <div className="center quickview-item width-100 padding-sm-r">
                            <p className="relative padding-xs-btm">
                                Kp index
                                <span className="material-symbols-outlined info-icon">
                                    <Comp />
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
                </div>

                <div className="widget center padding-small height-max-widget">
                    <h2 className="margin-xs-btm uppercase font-h2">Geomagnetic activity</h2>
                    <div className="quickview-div">
                        <div className="center grid-item quickview-item width-100">
                            <p className="relative">
                                Solar wind
                                <span className="material-symbols-outlined info-icon">
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
                    </div>
                </div>

                <div className="grouped-widget">
                    <div className="widget heigth-100 time-main center">
                        <Clock className="font-smaller" time={now.getTime()} tmzAbrr={tmzAbrr} />
                        <Clock className="font-smaller" time={now.getTime()} timezone="UTC" tmzAbrr={tmzAbrr} />
                    </div>
                    <div className="widget center padding-small">
                        <h2 className="uppercase margin-xs-btm font-h2">Weather</h2>
                        <div className="quickview-div center">
                            <div className="center quickview-item width-100 padding-sm-btm">
                                <p className="padding-xs-btm">Temperature</p>
                                <h3 className="padding-sm-btm">5&#176;C</h3>
                                <p className="padding-xs-btm">Wind</p>
                                <h3>5km/h SE</h3>
                            </div>
                            <div className="center quickview-item width-100 padding-sm-btm">
                                <p className="margin-sm-btm">Clouds </p>
                                <h3 className="font-smaller">Low: 10%</h3>
                                <h3 className="font-smaller">Middle: 60%</h3>
                                <h3 className="font-smaller">High: 0%</h3>
                            </div>
                        </div>
                    </div>
                    <div className="widget center graph hidden">
                        <Image src="/images/graph.png" alt="Graph with forecast of KP number for today, hourly" className="img-graph" width={160} height={160} />
                    </div>

                    <Graph />
                </div>

                <div className="widget center padding-small grid-item">
                    <h3 className="img-text uppercase margin-xs-btm">Northern Hemisphere</h3>
                    <img src="https://services.swpc.noaa.gov/images/aurora-forecast-northern-hemisphere.jpg" alt="image of the latest aurora activity" className="img-latest " />
                </div>
            </div>
        </>
    );
}

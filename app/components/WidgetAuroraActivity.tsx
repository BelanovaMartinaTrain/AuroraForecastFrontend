"use client";

import { useEffect, useState } from "react";
import fetchData from "../api/fetchData";
import ProgressBar from "../ui/ProgressBar";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Link from "next/link";

export default function WidgetAuroraActivity() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [kp, setKp] = useState<string>("0");
    const [storm, setStorm] = useState<string>("none");
    const [activity, setActivity] = useState<string>("none");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchAuroraStats() {
            setIsLoading(true);
            setError("");
            try {
                const kpData = await fetchData("http://165.227.128.185:8080/api/planetary-k-index-mod");
                const stormData = await fetchData("http://165.227.128.185:8080/api/sunstorm-events");

                console.log(kpData, stormData);
                if (!!kpData.cause || !!stormData.cause) {
                    throw new Error("Source is unreachable");
                }
                setKp(kpData);
                if (stormData[0].G.Text === "none") {
                    setStorm(stormData[0].G.Text);
                } else {
                    setStorm(`G${stormData[0].G.Scale}`);
                }

                if (Number(kpData) <= 2) {
                    setActivity("Low");
                } else if (Number(kpData) > 2 && Number(kp) < 5) {
                    setActivity("Moderate");
                } else if (Number(kpData) >= 5 && Number(kp) < 6) {
                    setActivity("High");
                } else if (Number(kpData) >= 6) {
                    setActivity("Very high");
                } else {
                    setActivity("n/a");
                }

                // if (weatherData.cause) {
                //     console.error("error", weatherData.cause);
                // } else {
                //     setWeather(
                //         weatherData.properties.timeseries[0].data.instant
                //             .details
                //     );}
            } catch (error) {
                console.log(error);
                setError(`${error}`);
            }

            setIsLoading(false);
        }

        fetchAuroraStats();
        const intervalID = setInterval(() => {
            fetchAuroraStats();
        }, 60000);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <>
            <h2 className="center mb-2 uppercase font-h2 ">
                Aurora activity{" "}
                <span className="material-symbols-outlined info-icon-kp" onClick={onOpen}>
                    <img src="/icons/info-gray.svg" alt="info icon" width={18} height={18} />
                </span>
            </h2>
            {!!isLoading && <ProgressBar />}
            <div className={`quickview-div grid-item padding-xs-btm ${!!isLoading && "visibility-hidden"}`}>
                <div className="center quickview-item width-100 padding-sm-r">
                    <p className="relative padding-xs-btm mt-2">Kp index</p>
                    <h3 className="bigger-font ">{kp}</h3>
                </div>
                <div className="center quickview-item width-100 padding-sm-r">
                    <p className="relative padding-xs-btm">Activity</p>
                    <h3 className="padding-sm-btm ">{activity}</h3>
                    <p className="relative padding-xs-btm">Geomagnetic storm</p>

                    <h3 className="padding-xs-btm pb-2">{storm}</h3>
                </div>
            </div>
            {!error ? (
                <Link href="https://www.swpc.noaa.gov/" className={`${!!isLoading && "visibility-hidden"}`} target="_blank">
                    <p className="mt-2 font-medium text-stone-500">NOAA</p>
                </Link>
            ) : (
                <p className="text-rose-800">{error}</p>
            )}
            <div className="">
                <Modal
                    size="sm"
                    placement="center"
                    backdrop="opaque"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    isDismissable={true}
                    className=" bg-black bg-opacity-95 rounded-xl "
                    disableAnimation={true}
                    scrollBehavior="inside"
                >
                    <ModalContent className="text-sm md:text-base  p-2">
                        {(onClose) => (
                            <>
                                <ModalBody className="pb-8">
                                    <p className="center mt-5">KP index</p>
                                    The Kp number is used to measure aurora strength. <br />
                                    The range goes from 0 to 9 (0 being calm and 9 representing a major geomagnetic storm with strong auroras
                                    visible). Any Kp 5 and above is classified as a geomagnetic storm. Near the aurora ovation you can see aurora even
                                    with Kp number 0.
                                    <div className="text-sm  " role="KP Index">
                                        <table>
                                            <caption className="p-4">
                                                <p>Geomagnetic Storms</p>
                                            </caption>
                                            <thead>
                                                <tr>
                                                    <th>Scale </th>
                                                    <th>Description</th>
                                                    <th>Effects</th>
                                                    <th>
                                                        KP
                                                        <br />
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>G1</td>
                                                    <td>Minor</td>
                                                    <td>
                                                        Aurora is commonly visible at high latitudes (northern Michigan and Maine/ Oslo and Helsinki)
                                                    </td>
                                                    <td>5</td>
                                                </tr>
                                                <tr>
                                                    <td>G2</td>
                                                    <td>Moderate</td>
                                                    <td>
                                                        Aurora has been seen as low as New York and Idaho/Copenhagen and Amsterdam (typically 55°
                                                        geomagnetic lat.)
                                                    </td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>G3</td>
                                                    <td>Strong</td>
                                                    <td>
                                                        Aurora has been seen as low as Illinois and Oregon/Prague and Kyiv (typically 50° geomagnetic
                                                        lat.)
                                                    </td>
                                                    <td>7</td>
                                                </tr>
                                                <tr>
                                                    <td>G4</td>
                                                    <td>Severe</td>
                                                    <td>
                                                        Aurora has been seen as low as Alabama and northern California/Ljubljana and Zagreb (typically
                                                        45° geomagnetic lat.)
                                                    </td>
                                                    <td>8</td>
                                                </tr>
                                                <tr>
                                                    <td>G5</td>
                                                    <td>Extreme</td>
                                                    <td>
                                                        Aurora seen as low as Florida and southern Texas/Madrid and Ankara (typically 40° geomagnetic
                                                        lat.)
                                                    </td>
                                                    <td>9</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
}

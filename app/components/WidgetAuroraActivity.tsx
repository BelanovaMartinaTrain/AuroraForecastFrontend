"use client";

import { useEffect, useState } from "react";
import fetchData from "../api/fetchData";
import ProgressBar from "../ui/ProgressBar";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";
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
                const kpData = await fetchData(
                    "http://165.227.128.185:8080/api/planetary-k-index-mod"
                );
                const stormData = await fetchData(
                    "http://165.227.128.185:8080/api/sunstorm-events"
                );

                console.log(kpData, stormData);
                if (!!kpData.cause || !!stormData.cause) {
                    throw new Error("Source is unreachable");
                }
                setKp(kpData);
                if (stormData[1].G.Text === "none") {
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
                <span
                    className="material-symbols-outlined info-icon-kp"
                    onClick={onOpen}
                >
                    <img
                        src="/icons/info-gray.svg"
                        alt="info icon"
                        width={18}
                        height={18}
                    />
                </span>
            </h2>
            {!!isLoading && <ProgressBar />}
            <div
                className={`quickview-div grid-item padding-xs-btm ${
                    !!isLoading && "visibility-hidden"
                }`}
            >
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
                <Link
                    href="https://www.swpc.noaa.gov/"
                    className={`${!!isLoading && "visibility-hidden"}`}
                    target="_blank"
                >
                    <p className="mt-4 font-medium text-stone-500">NOAA</p>
                </Link>
            ) : (
                <p className="text-rose-800">{error}</p>
            )}
            <div className="">
                <Modal
                    size="2xl"
                    placement="center"
                    backdrop="opaque"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    isDismissable={true}
                    className=" bg-black bg-opacity-95 rounded-xl text-sm md:text-lg center padding-small "
                    disableAnimation={true}
                >
                    <ModalContent>
                        {(onClose) => (
                            <h4>
                                SOLAR WIND The solar wind continuously flows
                                outward from the Sun and consists mainly of
                                protons and electrons in a state known as a
                                plasma. Solar magnetic field is embedded in the
                                plasma and flows outward with the solar wind.
                                Different regions on the Sun produce solar wind
                                of different speeds and densities. Coronal holes
                                produce solar wind of high speed, ranging from
                                500 to 800 kilometers per second. The north and
                                south poles of the Sun have large, persistent
                                coronal holes, so high latitudes are filled with
                                fast solar wind. In the equatorial plane, where
                                the Earth and the other planets orbit, the most
                                common state of the solar wind is the slow speed
                                very high densities and strong magnetic fields
                                Above the current sheet, the higher speed solar
                                wind typically has a dominant magnetic polarity
                                in one direction and below the current sheet,
                                the polarity is in the opposite direction. As
                                the Earth moves through this evolving ballerina
                                skirt, it is sometimes within the heliospheric
                                current sheet, sometimes above it and sometime
                                below it. When the magnetic field of the solar
                                wind switches polarity, it is a strong
                            </h4>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
}

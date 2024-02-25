"use client";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import fetchData from "../api/fetchData";
import ProgressBar from "../ui/ProgressBar";
import Link from "next/link";

export default function WidgetGeomagneticActivityModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [wind, setWind] = useState<string>();
    const [flux, setFlux] = useState<string>();
    const [magField, setMagField] = useState({
        Bt: "",
        Bz: "",
    });
    const [error, setError] = useState("");

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchWindStats() {
            setIsLoading(true);
            setError("");
            try {
                const windData = await fetchData("http://165.227.128.185:8080/api/solar-wind");
                const fluxData = await fetchData("http://165.227.128.185:8080/api/flux");
                const magData = await fetchData("http://165.227.128.185:8080/api/magnetic-field");
                if (!!windData.cause || !!fluxData.cause || magData.cause) {
                    throw new Error("Source is unreachable");
                } else {
                    //console.log(
                    //     windData.WindSpeed,
                    //     fluxData.Flux,
                    //     magData.Bt,
                    //     magData.Bz
                    // );
                    setWind(windData.WindSpeed);
                    setFlux(fluxData.Flux);
                    setMagField({ Bt: magData.Bt, Bz: magData.Bz });
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

        fetchWindStats();
        const intervalID = setInterval(() => {
            fetchWindStats();
        }, 60000);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <>
            <>
                <h2 className="mb-2 uppercase font-h2 ">
                    Solar Wind{" "}
                    <span className="material-symbols-outlined info-icon-kp" onClick={onOpen}>
                        <img src="/icons/info-gray.svg" alt="info icon" width={18} height={18} />
                    </span>
                </h2>
                {!!isLoading && <ProgressBar />}

                <div className={`quickview-div ${!!isLoading && "visibility-hidden"}`}>
                    <div className="center grid-item quickview-item width-100 ">
                        <p className="relative mt-2">Speed</p>
                        <h3 className="pb-2">{wind} km/sec</h3>

                        <p className="relative">Flux</p>

                        <h3 className="pb-2">{flux} sfu</h3>
                    </div>
                    <div className=" center quickview-item width-100">
                        <p className="relative ">Magnetic field</p>
                        <h3>Bt: {magField.Bt} nT</h3>
                        <h3 className="pb-2">Bz: {magField.Bz} nT</h3>
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
                        size="md"
                        placement="center"
                        backdrop="opaque"
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        isDismissable={true}
                        className=" bg-black bg-opacity-95 rounded-xl  "
                        disableAnimation={true}
                        scrollBehavior="inside"
                    >
                        <ModalContent className="text-sm md:text-base  p-2">
                            {(onClose) => (
                                <>
                                    <ModalBody>
                                        <p className="center ">Solar Wind</p>
                                        Solar wind is a stream of charged particles that come from the corona, the outermost layer of the sun's
                                        atmosphere and produce the aurora.
                                        <p>Values 500km/sec and above are the most favorable for strong aurora</p>
                                        <p className="center mt-10">Interplanetary Magnetic Field (IMF)</p>
                                        <p className="center mt-2">Bt</p>
                                        The Bt value of the interplanetary magnetic field indicates the total strength of the interplanetary magnetic
                                        field. The higher this value, the better it is for enhanced geomagnetic conditions. We speak of a moderately
                                        strong total interplanetary magnetic field when the Bt exceeds 10nT. Strong values start at 20nT and we speak
                                        of a very strong total interplanetary magnetic field when values exceed 30nT.
                                        <p>Values 10nT and above are the most favorable for strong aurora</p>
                                        <p className="center mt-2">Bz</p>
                                        The north-south direction of the interplanetary magnetic field (Bz) is the most important ingredient for
                                        auroral activity. Continues values of -10nT and lower are good indicators that a geomagnetic storm could
                                        develop but the lower this value goes the better it is for auroral activity.
                                        <p>Values lower than 0 are the most favorable for strong aurora. The lower the better.</p>
                                    </ModalBody>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>
            </>
        </>
    );
}

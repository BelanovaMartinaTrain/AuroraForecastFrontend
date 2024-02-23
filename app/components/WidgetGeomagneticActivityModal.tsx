"use client";
import Image from "next/image";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import fetchData from "../api/fetchData";
import ProgressBar from "../ui/ProgressBar";

export default function WidgetGeomagneticActivityModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [wind, setWind] = useState<string>();
    const [flux, setFlux] = useState<string>();
    const [magField, setMagField] = useState({
        Bt: "",
        Bz: "",
    });

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchWindStats() {
            setIsLoading(true);

            try {
                const windData = await fetchData(
                    "http://165.227.128.185:8080/api/solar-wind"
                );
                const fluxData = await fetchData(
                    "http://165.227.128.185:8080/api/flux"
                );
                const magData = await fetchData(
                    "http://165.227.128.185:8080/api/magnetic-field"
                );

                setWind(windData.WindSpeed);
                setFlux(fluxData.Flux);
                setMagField({ Bt: magData.Bt, Bz: magData.Bz });
                // if (weatherData.cause) {
                //     console.error("error", weatherData.cause);
                // } else {
                //     setWeather(
                //         weatherData.properties.timeseries[0].data.instant
                //             .details
                //     );}
            } catch {
                console.log("Fetch was unsuccessful");
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
            <h2 className="margin-xs-btm uppercase font-h2">
                Solar Wind{" "}
                <span
                    className="material-symbols-outlined info-icon-kp"
                    onClick={onOpen}
                >
                    <img
                        src="/icons/info-gray.svg"
                        alt="info icon"
                        width={16}
                        height={16}
                    />
                </span>
            </h2>
            {!!isLoading ? (
                <ProgressBar />
            ) : (
                <div className="quickview-div">
                    <div className="center grid-item quickview-item width-100">
                        <p className="relative">Speed</p>
                        <h3 className="padding-sm-btm">{wind} km/sec</h3>

                        <p className="relative">Flux</p>

                        <h3>{flux} sfu</h3>
                    </div>
                    <div className="center quickview-item width-100">
                        <p className="relative margin-sm-btm">Magnetic field</p>
                        <h3>Bt: {magField.Bt} nT</h3>
                        <h3>Bz: {magField.Bz} nT</h3>
                    </div>
                </div>
            )}

            <Modal
                placement="top"
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                isDismissable={true}
                className=" bg-black bg-opacity-95 rounded-xl  center padding-small height-max-widget  -z-10"
                disableAnimation={true}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <div>TEST</div>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

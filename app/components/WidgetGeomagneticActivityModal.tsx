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
            <h2 className="margin-xs-btm uppercase font-h2 ">
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
            {!!isLoading && <ProgressBar />}

            <div
                className={`quickview-div ${
                    !!isLoading && "visibility-hidden"
                }`}
            >
                <div className="center grid-item quickview-item width-100 ">
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

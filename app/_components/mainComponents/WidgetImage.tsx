"use client";

import { useEffect, useState } from "react";
import ProgressBar from "../uiComponents/ProgressBar";
import Link from "next/link";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";
import { ModalOvationImageNoClass } from "@/app/_data/modalData";
import { useHemisphereContext } from "@/app/_context/hemisphereContext";
import Image from "next/image";

export default function WidgetImage() {
    const baseImgUrl = "https://aurora-api.cloud/api/image-ovation?format=webp&";
    const [imageUrl, setImageUrl] = useState({
        north475: baseImgUrl + "hemisphere=north&width=475",
        south475: baseImgUrl + "hemisphere=south&width=475",
        north800: baseImgUrl + "hemisphere=north&width=800",
        south800: baseImgUrl + "hemisphere=south&width=800",
    });
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { hemisphere, setHemisphere } = useHemisphereContext();

    useEffect(() => {
        function changeUrl(timer?: string) {
            if (timer) {
                const timestamp = Math.floor(Date.now() / 1000);

                setImageUrl({
                    north475: `${baseImgUrl}hemisphere=north&width=475&${timestamp}`,
                    south475: `${baseImgUrl}hemisphere=south&width=475&${timestamp}`,
                    north800: `${baseImgUrl}hemisphere=north&width=800&${timestamp}`,
                    south800: `${baseImgUrl}hemisphere=south&width=800&${timestamp}`,
                });
                setIsLoading(true);
                setTimeout(() => setIsLoading(false), 500);
            }
        }
        changeUrl();
        const timer = setInterval(() => {
            changeUrl("timer");
        }, 5 * 60 * 1000);
        return () => clearInterval(timer);
    }, [imageUrl, hemisphere]);

    function handleClickNorth() {
        setHemisphere("Northern");
    }

    function handleClickSouth() {
        setHemisphere("Southern");
    }

    return (
        <>
            <div className="widget text-center justify-center  grid-item backdrop-blur-sm">
                <div className="grid grid-flow-row hemisphere-gap hemisphere-grid justify-center  ">
                    <div
                        className={` rounded-tl-lg cursor-pointer transition-all ease-in-out delay-[50ms] ${
                            hemisphere === "Northern"
                                ? "bg-black bg-opacity-0 text-[gainsboro]"
                                : "bg-black bg-opacity-40 text-stone-500 inner-shadow-north"
                        }`}
                        onClick={handleClickNorth}
                    >
                        <h3 className="py-2  uppercase  select-none">Northern </h3>
                    </div>
                    <div
                        className={` rounded-tr-lg cursor-pointer transition ease-in-out delay-[50ms] ${
                            hemisphere === "Southern"
                                ? "bg-black bg-opacity-0 text-[gainsboro]"
                                : "bg-black bg-opacity-40 text-stone-500 inner-shadow-south"
                        }`}
                        onClick={handleClickSouth}
                    >
                        <h3 className="py-2   uppercase select-none ">Southern </h3>
                    </div>
                </div>
                <h3 className="p-2 img-text uppercase margin-xs-btm ">Hemisphere </h3>
                {!!isLoading && <ProgressBar />}
                <img
                    src={`${hemisphere === "Northern" ? imageUrl.north475 : imageUrl.south475}`}
                    alt="predicted aurora ovation, predicted aurora activity in the next hour"
                    className={`img-latest mb-8 pb-4 px-3  ${isOpen ? "pointer-events-none" : ""}`}
                    width={475}
                    height={475}
                    onClick={onOpen}
                />

                <p className="mt-4 font-medium text-stone-500 text-[11px] absolute bottom-5 left-[42%] right-[50%]">
                    <span className={`capitalize mr-1 ${!!isLoading ? "hidden" : ""}`}>Source:</span>
                    <Link
                        href="https://www.swpc.noaa.gov/"
                        className={`${!!isLoading ? "invisible" : ""}`}
                        aria-label="Link to source of used data - NOAA"
                        target="_blank"
                    >
                        NOAA
                    </Link>
                </p>
            </div>
            <Modal
                size="3xl"
                placement="center"
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                isDismissable={true}
                className=" bg-black bg-opacity-75 backdrop-blur-sm rounded-xl  "
                disableAnimation={true}
                scrollBehavior="inside"
            >
                <ModalContent className=" md:p-3 ">
                    {(onClose) => (
                        <>
                            <ModalBody className="my-5">
                                <ModalOvationImageNoClass imageUrl={hemisphere === "Northern" ? imageUrl.north800 : imageUrl.south800} />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

"use client";

import { useEffect, useState } from "react";
import ProgressBar from "../uiComponents/ProgressBar";
import Link from "next/link";
//import { useModalOpenContext } from "@/app/_context/modalOpenContext";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";
import { ModalOvationImageNoClass } from "@/app/_data/modalData";

export default function WidgetImage() {
    const [imageUrl, setImageUrl] = useState("https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg");
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        function changeUrl() {
            const timestamp = Math.floor(Date.now() / 1000);
            setImageUrl(`https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg?${timestamp}`);
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 500);
        }
        changeUrl();
        const timer = setInterval(() => {
            changeUrl();
        }, 5 * 60 * 1000);
        return () => clearInterval(timer);
    }, [imageUrl]);

    return (
        <>
            <div className="widget center padding-small grid-item backdrop-blur-sm">
                <h3 className="img-text uppercase margin-xs-btm">Northern Hemisphere</h3>
                {!!isLoading && <ProgressBar />}
                <img
                    src={`${imageUrl}`}
                    alt="predicted aurora ovation, predicted aurora activity in the next hour depicted visually"
                    className="img-latest mb-8"
                    width={475}
                    height={475}
                    onClick={onOpen}
                />
                <p className="mt-6 font-medium text-stone-500 text-[11px] absolute bottom-5 left-[42%] right-[50%]">
                    <span className={`capitalize mr-1 ${!!isLoading ? "hidden" : ""}`}>Source:</span>
                    <Link
                        href="https://www.swpc.noaa.gov/"
                        className={`${!!isLoading ? "visibility-hidden" : ""}`}
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
                <ModalContent className=" p-3 ">
                    {(onClose) => (
                        <>
                            <ModalBody className="my-5">
                                <ModalOvationImageNoClass imageUrl={imageUrl} />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

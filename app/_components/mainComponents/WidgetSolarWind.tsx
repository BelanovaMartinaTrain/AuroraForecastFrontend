"use client";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import WidgetViewSolarWind from "../subComponents/WidgetSolarWindView";

export default function WidgetSolarWind() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <h2 className="mb-2 uppercase font-h2 relative ">
                Solar Wind{" "}
                <button className="absolute ml-1 -top-0.5 w-5 h-5" onClick={onOpen} aria-label="click to get info about solar wind attributes">
                    <svg
                        id="info-icon"
                        className="   fill-stone-400 hover:fill-stone-50 focus:fill-stone-50"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 -960 960 960"
                        width="18"
                    >
                        <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                </button>
            </h2>
            <WidgetViewSolarWind />
            <div className="">
                <Modal
                    size="2xl"
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
                                    <p className="center  text-base underline underline-offset-4">Solar Wind</p>
                                    Solar wind is a stream of charged particles that come from the corona, the outermost layer of the sun's atmosphere
                                    and produce the aurora.
                                    <p className="font-normal text-xs text-[SpringGreen]">
                                        Values 500km/sec and above are the most favorable for strong aurora
                                    </p>
                                    <p className="center mt-10 text-base underline underline-offset-4">Interplanetary Magnetic Field (IMF)</p>
                                    <p className="center mt-2 text-sm">Bt</p>
                                    The Bt value of the interplanetary magnetic field indicates the total strength of the interplanetary magnetic
                                    field. The higher this value, the better it is for enhanced geomagnetic conditions. We speak of a moderately
                                    strong total interplanetary magnetic field when the Bt exceeds 10nT. Strong values start at 20nT and we speak of a
                                    very strong total interplanetary magnetic field when values exceed 30nT.
                                    <p className="font-normal text-xs text-[SpringGreen]">
                                        Values 10nT and above are the most favorable for strong aurora
                                    </p>
                                    <p className="center mt-2 text-sm">Bz</p>
                                    The north-south direction of the interplanetary magnetic field (Bz) is the most important ingredient for auroral
                                    activity. Continues values of -10nT and lower are good indicators that a geomagnetic storm could develop but the
                                    lower this value goes the better it is for auroral activity.
                                    <p className="font-normal text-xs text-[SpringGreen] ">
                                        Values lower than 0 are the most favorable for strong aurora. The lower the better
                                    </p>
                                    <p className="center mt-8 text-base underline underline-offset-4">Solar wind density</p>
                                    Density of particles in the solar wind reaching the atmoshere. Their interactions with particles in the atmosphere
                                    create the aurora.
                                    <p className="font-normal text-xs mb-5 text-[SpringGreen] ">
                                        Values above 10 give bigger chance of aurora. The higher the better
                                    </p>
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
}

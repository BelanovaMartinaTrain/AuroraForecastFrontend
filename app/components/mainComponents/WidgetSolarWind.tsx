"use client";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import WidgetViewSolarWind from "../subComponents/WidgetSolarWindView";

export default function WidgetSolarWind() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <h2 className="mb-2 uppercase font-h2 ">
                Solar Wind{" "}
                <button className="material-symbols-outlined info-icon-kp" onClick={onOpen}>
                    <svg
                        className="info-icon ml-1 fill-gray-500 hover:fill-gray-100 "
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 -960 960 960"
                        width="18"
                    >
                        <path d="M454.001-298.001h51.998V-528h-51.998v229.999Zm25.788-290.46q11.942 0 20.23-8.077 8.288-8.078 8.288-20.019 0-11.941-8.078-20.23-8.077-8.288-20.018-8.288-11.942 0-20.23 8.078t-8.288 20.019q0 11.941 8.078 20.229 8.077 8.288 20.018 8.288Zm.554 472.46q-75.112 0-141.48-28.42-66.369-28.42-116.182-78.21-49.814-49.791-78.247-116.087t-28.433-141.673q0-75.378 28.42-141.246 28.42-65.869 78.21-115.682 49.791-49.814 116.087-78.247t141.673-28.433q75.378 0 141.246 28.42 65.869 28.42 115.682 78.21 49.814 49.791 78.247 115.853t28.433 141.173q0 75.112-28.42 141.48-28.42 66.369-78.21 116.182-49.791 49.814-115.853 78.247t-141.173 28.433ZM480-168q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
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
                    <ModalContent className=" p-2">
                        {(onClose) => (
                            <>
                                <ModalBody className="mb-5">
                                    <p className="center mt-5 text-base underline underline-offset-4">Solar Wind</p>
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

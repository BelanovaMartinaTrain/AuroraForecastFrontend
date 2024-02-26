"use client";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import WidgetViewSolarWind from "../subComponents/WidgetSolarWindView";

export default function WidgetSolarWind() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <h2 className="mb-2 uppercase font-h2 ">
                Solar Wind{" "}
                <span className="material-symbols-outlined info-icon-kp" onClick={onOpen}>
                    <img src="/icons/info-gray.svg" alt="info icon" width={18} height={18} />
                </span>
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

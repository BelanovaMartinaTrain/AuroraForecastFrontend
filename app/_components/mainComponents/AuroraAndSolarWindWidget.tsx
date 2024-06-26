"use client";

import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";
import WidgetViewSolarWind from "../subComponents/SolarWindViewWidget";
import WidgetAuroraView from "../subComponents/AuroraViewWidget";
import { ModalSolarWindInfo, ModalAuroraActivityInfo } from "@/app/_data/modalData";

export default function AuroraAndSolarWindWidget({ type }: { type: string }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <h2 className="mb-2 uppercase font-h2 relative ">
                {type === "activity" ? "Aurora Activity" : "Solar Wind"}{" "}
                <button className="absolute ml-1 -top-0.5 w-5 h-5" onClick={onOpen} aria-label="click to get info about solar wind attributes">
                    <svg
                        className="   fill-stone-400 hover:fill-stone-50 focus:fill-stone-50 mx-1"
                        xmlns="http://www.w3.org/2000/svg"
                        height="19"
                        viewBox="0 -960 960 960"
                        width="19"
                    >
                        <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                </button>
            </h2>
            {type === "activity" ? <WidgetAuroraView /> : <WidgetViewSolarWind />}
            <div className="">
                <Modal
                    size="2xl"
                    placement="center"
                    backdrop="opaque"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    isDismissable={true}
                    className=" bg-black bg-opacity-85 backdrop-blur-sm rounded-xl  "
                    disableAnimation={true}
                    scrollBehavior="inside"
                >
                    <ModalContent className="p-0 md:p-3 ">
                        {(onClose) => (
                            <>
                                <ModalBody className="my-5 ">{type === "activity" ? <ModalAuroraActivityInfo /> : <ModalSolarWindInfo />}</ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
}

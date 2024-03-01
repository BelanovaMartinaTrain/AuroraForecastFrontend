"use client";

import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";
import WidgetAuroraView from "../subComponents/WidgetAuroraView";

export default function WidgetAuroraActivity() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <h2 className="center mb-2 uppercase font-h2 relative">
                Aurora activity{" "}
                <button className="material-symbols-outlined info-icon-kp  " onClick={onOpen}>
                    <svg
                        className="info-icon ml-1 fill-gray-400 hover:fill-gray-50 "
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 -960 960 960"
                        width="18"
                    >
                        <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                </button>
            </h2>
            <WidgetAuroraView />
            <div className="">
                <Modal
                    size="2xl"
                    placement="center"
                    backdrop="opaque"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    isDismissable={true}
                    className=" bg-black bg-opacity-75 backdrop-blur-sm rounded-xl "
                    disableAnimation={true}
                    scrollBehavior="inside"
                >
                    <ModalContent className="  p-2">
                        {(onClose) => (
                            <>
                                <ModalBody className="my-5 ">
                                    <p className="center text-base underline underline-offset-4 ">KP index</p>
                                    The Kp number is used to measure aurora strength. The range goes from 0 to 9 (0 being calm and 9 representing a
                                    major geomagnetic storm with strong auroras visible). <br />
                                    Any Kp 5 and above is classified as a geomagnetic storm. Near the aurora ovation you can see aurora even with Kp
                                    number 0.
                                    <p className=" font-normal text-xs text-[SpringGreen]">
                                        Any level of geomagnetic storm provide a higher chance of strong Aurora
                                    </p>
                                    <div className="text-sm  " role="KP Index">
                                        <table>
                                            <caption className="p-4">
                                                <p className="text-base underline underline-offset-4">Geomagnetic Storms</p>
                                            </caption>
                                            <thead>
                                                <tr>
                                                    <th>Scale </th>
                                                    <th>Description</th>
                                                    <th>Effects</th>
                                                    <th>
                                                        KP
                                                        <br />
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>G1</td>
                                                    <td>Minor</td>
                                                    <td>
                                                        Aurora is commonly visible at high latitudes (northern Michigan and Maine/ Oslo and Helsinki)
                                                    </td>
                                                    <td>5</td>
                                                </tr>
                                                <tr>
                                                    <td>G2</td>
                                                    <td>Moderate</td>
                                                    <td>
                                                        Aurora has been seen as low as New York and Idaho/Copenhagen and Amsterdam (typically 55°
                                                        geomagnetic lat.)
                                                    </td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>G3</td>
                                                    <td>Strong</td>
                                                    <td>
                                                        Aurora has been seen as low as Illinois and Oregon/Prague and Kyiv (typically 50° geomagnetic
                                                        lat.)
                                                    </td>
                                                    <td>7</td>
                                                </tr>
                                                <tr>
                                                    <td>G4</td>
                                                    <td>Severe</td>
                                                    <td>
                                                        Aurora has been seen as low as Alabama and northern California/Ljubljana and Zagreb (typically
                                                        45° geomagnetic lat.)
                                                    </td>
                                                    <td>8</td>
                                                </tr>
                                                <tr>
                                                    <td>G5</td>
                                                    <td>Extreme</td>
                                                    <td>
                                                        Aurora seen as low as Florida and southern Texas/Madrid and Ankara (typically 40° geomagnetic
                                                        lat.)
                                                    </td>
                                                    <td>9</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
}

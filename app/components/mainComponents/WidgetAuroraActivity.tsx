"use client";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import WidgetAuroraView from "../subComponents/WidgetAuroraView";

export default function WidgetAuroraActivity() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <h2 className="center mb-2 uppercase font-h2 ">
                Aurora activity{" "}
                <span className="material-symbols-outlined info-icon-kp" onClick={onOpen}>
                    <img src="/icons/info-gray.svg" alt="info icon" width={18} height={18} />
                </span>
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
                    className=" bg-black bg-opacity-95 rounded-xl "
                    disableAnimation={true}
                    scrollBehavior="inside"
                >
                    <ModalContent className="  p-2">
                        {(onClose) => (
                            <>
                                <ModalBody className="my-5 ">
                                    <p className="center text-sm ">KP index</p>
                                    The Kp number is used to measure aurora strength. The range goes from 0 to 9 (0 being calm and 9 representing a
                                    major geomagnetic storm with strong auroras visible). <br />
                                    Any Kp 5 and above is classified as a geomagnetic storm. Near the aurora ovation you can see aurora even with Kp
                                    number 0.
                                    <p className="text-xs">Any level of geomagnetic storm provide a higher chance of strong Aurora</p>
                                    <div className="text-sm  " role="KP Index">
                                        <table>
                                            <caption className="p-4">
                                                <p className="text-sm">Geomagnetic Storms</p>
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

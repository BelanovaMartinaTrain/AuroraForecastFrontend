"use client";

import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";
import WidgetAuroraView from "../subComponents/WidgetAuroraView";

export default function WidgetAuroraActivity() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <h2 className="center mb-2 uppercase font-h2 ">
                Aurora activity{" "}
                <button className="material-symbols-outlined info-icon-kp" onClick={onOpen}>
                    <svg
                        className="info-icon ml-1 fill-gray-500 hover:fill-gray-100"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 -960 960 960"
                        width="18"
                    >
                        <path d="M454.001-298.001h51.998V-528h-51.998v229.999Zm25.788-290.46q11.942 0 20.23-8.077 8.288-8.078 8.288-20.019 0-11.941-8.078-20.23-8.077-8.288-20.018-8.288-11.942 0-20.23 8.078t-8.288 20.019q0 11.941 8.078 20.229 8.077 8.288 20.018 8.288Zm.554 472.46q-75.112 0-141.48-28.42-66.369-28.42-116.182-78.21-49.814-49.791-78.247-116.087t-28.433-141.673q0-75.378 28.42-141.246 28.42-65.869 78.21-115.682 49.791-49.814 116.087-78.247t141.673-28.433q75.378 0 141.246 28.42 65.869 28.42 115.682 78.21 49.814 49.791 78.247 115.853t28.433 141.173q0 75.112-28.42 141.48-28.42 66.369-78.21 116.182-49.791 49.814-115.853 78.247t-141.173 28.433ZM480-168q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
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

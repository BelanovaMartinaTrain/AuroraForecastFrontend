export function ModalSolarWindInfo() {
    return (
        <>
            <p className="center  text-base underline underline-offset-4">Solar Wind</p>
            Solar wind is a stream of charged particles that come from the corona, the outermost layer of the sun's atmosphere and produce the aurora.
            <p className="font-normal text-xs text-[SpringGreen]">Values 450km/sec and above are the most favorable for strong aurora</p>
            <p className="center mt-10 text-base underline underline-offset-4">Interplanetary Magnetic Field (IMF)</p>
            <p className="center mt-2 text-sm">Bt</p>
            The Bt value of the interplanetary magnetic field indicates the total strength of the interplanetary magnetic field. The higher this
            value, the better it is for enhanced geomagnetic conditions. We speak of a moderately strong total interplanetary magnetic field when the
            Bt exceeds 10nT. Strong values start at 20nT and we speak of a very strong total interplanetary magnetic field when values exceed 30nT.
            <p className="font-normal text-xs text-[SpringGreen]">Values 10nT and above are the most favorable for strong aurora</p>
            <p className="center mt-2 text-sm">Bz</p>
            The north-south direction of the interplanetary magnetic field (Bz) is the most important ingredient for auroral activity. Continues
            values of -10nT and lower are good indicators that a geomagnetic storm could develop but the lower this value goes the better it is for
            auroral activity.
            <p className="font-normal text-xs text-[SpringGreen] ">
                Values lower than 0 are the most favorable for strong aurora. The lower the better
            </p>
            <p className="center mt-8 text-base underline underline-offset-4">Solar wind density</p>
            Density of particles in the solar wind reaching the atmoshere. Their interactions with particles in the atmosphere create the aurora.
            <p className="font-normal text-xs mb-5 text-[SpringGreen] ">Values above 10 give bigger chance of aurora. The higher the better</p>
        </>
    );
}

export function ModalAuroraActivityInfo() {
    return (
        <>
            <p className="center text-base underline underline-offset-4 ">KP index</p>
            The Kp number is used to measure aurora strength. The range goes from 0 to 9 (0 being calm and 9 representing a major geomagnetic storm
            with strong auroras visible). <br />
            Any Kp 5 and above is classified as a geomagnetic storm. Near the aurora ovation you can see aurora even with Kp number 0.
            <p className=" font-normal text-xs text-[SpringGreen]">Any level of geomagnetic storm provide a higher chance of strong Aurora</p>
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
                            <td>Aurora is commonly visible at high latitudes (northern Michigan and Maine/ Oslo and Helsinki)</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>G2</td>
                            <td>Moderate</td>
                            <td>Aurora has been seen as low as New York and Idaho/Copenhagen and Amsterdam (typically 55° geomagnetic lat.)</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>G3</td>
                            <td>Strong</td>
                            <td>Aurora has been seen as low as Illinois and Oregon/Prague and Kyiv (typically 50° geomagnetic lat.)</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>G4</td>
                            <td>Severe</td>
                            <td>
                                Aurora has been seen as low as Alabama and northern California/Ljubljana and Zagreb (typically 45° geomagnetic lat.)
                            </td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>G5</td>
                            <td>Extreme</td>
                            <td>Aurora seen as low as Florida and southern Texas/Madrid and Ankara (typically 40° geomagnetic lat.)</td>
                            <td>9</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export function ModalOvationImage({ imageUrl }: { imageUrl: string }) {
    return (
        <>
            <img
                src={`${imageUrl}`}
                alt="predicted aurora ovation, predicted aurora activity in the next hour depicted visually"
                className="filter brightness-[80%] hue-rotate-[18deg] grayscale-[50%] mb-auto mt-10 mx-auto rounded  shadow-black shadow-lg "
            />
        </>
    );
}

export function ModalOvationImageNoClass({ imageUrl }: { imageUrl: string }) {
    return (
        <>
            <img
                src={`${imageUrl}`}
                alt="predicted aurora ovation, predicted aurora activity in the next hour depicted visually"
                className="filter brightness-[80%] hue-rotate-[18deg] grayscale-[50%]  rounded  shadow-black shadow-lg "
            />
        </>
    );
}

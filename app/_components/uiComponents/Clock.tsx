"use client";

import ProgressBar from "@/app/_components/uiComponents/ProgressBar";
import { useState, useEffect } from "react";
import { toHoursAndMinutes24h } from "@/app/_utils/timeFormatting";

type Props = {
    className: string;
    time: number;
    timezone?: string;
    tmzAbrr: string;
};

export default function Clock(props: Props) {
    const [time, setTime] = useState(new Date(props.time));
    const [timezoneAbbreviation, setTimezoneAbbreviation] = useState(props.tmzAbrr);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        function setClock() {
            setIsLoading(true);
            setTime(new Date());
            setTimezoneAbbreviation(Intl.DateTimeFormat().resolvedOptions().timeZone);
            setIsLoading(false);
        }
        setClock();
        const timer = setInterval(() => {
            setClock();
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {!!isLoading ? (
                <ProgressBar />
            ) : !!props.timezone ? (
                <h2
                    suppressHydrationWarning
                    className={`${props.className} ${!!isLoading ? "visibility-hidden" : ""}`}
                >
                    {time.toLocaleTimeString([], {
                        timeZone: `${props.timezone}`,
                        ...toHoursAndMinutes24h,
                    })}
                    {" UTC"}
                </h2>
            ) : (
                <h2
                    suppressHydrationWarning
                    className={`${props.className} ${!!isLoading ? "visibility-hidden" : ""}`}
                >
                    {time.toLocaleTimeString([], toHoursAndMinutes24h)}
                    {` ${timezoneAbbreviation}`}
                </h2>
            )}
        </>
    );
}

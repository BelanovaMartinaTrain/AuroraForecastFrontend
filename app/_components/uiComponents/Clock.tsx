"use client";

import ProgressBar from "@/app/_components/uiComponents/ProgressBar";
import { useState, useEffect } from "react";

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
                <h2 suppressHydrationWarning className={`${props.className} ${!!isLoading ? "visibility-hidden" : ""}`}>
                    {time.toLocaleTimeString([], {
                        timeZone: `${props.timezone}`,
                        hourCycle: "h23",
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                    {" UTC"}
                </h2>
            ) : (
                <h2 suppressHydrationWarning className={`${props.className} ${!!isLoading ? "visibility-hidden" : ""}`}>
                    {time.toLocaleTimeString([], {
                        hourCycle: "h23",
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                    {` ${timezoneAbbreviation}`}
                </h2>
            )}
        </>
    );
}

"use client";

import { useState, useEffect } from "react";

type Props = {
    className: string;
    time: number;
    timezone?: string;
    tmzAbrr: string;
};

export default function Clock(props: Props) {
    const [time, setTime] = useState(new Date());
    const [timezoneAbbreviation, setTimezoneAbbreviation] = useState(props.tmzAbrr);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        function setClock() {
            setIsLoading(true);
            setTime(new Date());
            setTimezoneAbbreviation(Intl.DateTimeFormat().resolvedOptions().timeZone);
        }
        setClock();
        const timer = setInterval(() => {
            setClock();
            setIsLoading(false);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return !!props.timezone ? (
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
    );
}

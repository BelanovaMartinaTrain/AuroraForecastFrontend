"use client";

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
        const timer = setInterval(() => {
            setTime(new Date());
            setIsLoading(false);
        }, 1000);
        setTimezoneAbbreviation(Intl.DateTimeFormat().resolvedOptions().timeZone);
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

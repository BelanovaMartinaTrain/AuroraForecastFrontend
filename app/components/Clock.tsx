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

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        setTimezoneAbbreviation(Intl.DateTimeFormat().resolvedOptions().timeZone);
        return () => clearInterval(timer);
    }, []);

    return props.timezone ? (
        <h2>
            {time.toLocaleTimeString([], { timeZone: `${props.timezone}`, hour12: false, hour: "2-digit", minute: "2-digit" })}
            {" UTC"}
        </h2>
    ) : (
        <h2>
            {time.toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit" })}
            {` ${timezoneAbbreviation}`}
        </h2>
    );
}

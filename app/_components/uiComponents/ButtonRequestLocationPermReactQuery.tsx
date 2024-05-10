"use client";

import { useEffect, useState } from "react";
import { useCurrentLocation } from "@/app/_hooks/useLocation";

export default function ButtonRequestLocationPermReactQuery({ children }: { children: React.ReactNode }) {
    const { data: location, error, refetch, isFetching } = useCurrentLocation();
    const [permissions, setPermissions] = useState("prompt");

    useEffect(() => {
        navigator.permissions.query({ name: "geolocation" }).then((result) => {
            setPermissions(result.state);
            result.onchange = () => {
                setPermissions(result.state);
            };
        });
    }, []);

    useEffect(() => {
        if (permissions === "granted") {
            refetch();
        }
    }, [permissions]);

    const handleFetchLocation = () => {
        if (permissions === "prompt" || permissions === "denied") {
            refetch();
        }
    };

    return (
        <>
            <div>
                {!location && (permissions === "prompt" || permissions === "denied") && (
                    <button
                        className="mt-3 text-black mb-[20%] px-5 py-3 rounded-lg font-bold focus:ring ring-black ring-opacity-10 gradient element-to-rotate hover:-translate-y-0.5"
                        onClick={handleFetchLocation}
                        disabled={isFetching}
                    >
                        Get Current Location
                    </button>
                )}
                {permissions === "granted" && location && children}

                {error && <p>Error fetching location: {error.message}</p>}
            </div>
        </>
    );
}

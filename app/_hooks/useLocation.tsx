import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TCoordinates } from "../_context/locationAndWeatherContext";

interface GeolocationCoordinates {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
}

interface GeolocationPosition {
    coords: GeolocationCoordinates;
    timestamp: number;
}

function getLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error),
            { timeout: 10000 }
        );
    });
}

export const useCurrentLocation = (): UseQueryResult<GeolocationPosition, Error> => {
    return useQuery({
        queryKey: ["location"],
        queryFn: getLocation,
        staleTime: Infinity,
        refetchInterval: 60000,
        refetchOnWindowFocus: true,
        enabled: false,
    });
};

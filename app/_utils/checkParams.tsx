type paramType = {
    [key: string]: string | string[] | undefined;
};

export default function checkParams(searchParams: paramType) {
    if (!searchParams.lon) {
        searchParams = {
            ...searchParams,
            lon: "null",
        };
    }

    if (!searchParams.lat) {
        searchParams = {
            ...searchParams,
            lat: "null",
        };
    }

    if (!searchParams.units) {
        searchParams = {
            ...searchParams,
            units: "C",
        };
    }

    if (!!searchParams.lon) {
        if (!isNaN(Number(searchParams.lon))) {
            searchParams.lon = (Math.round(Number(searchParams.lon) * 10) / 10) as unknown as string;
        } else {
            searchParams.lon = "null";
        }
    }

    if (!!searchParams.lat) {
        if (!isNaN(Number(searchParams.lat))) {
            searchParams.lat = (Math.round(Number(searchParams.lat) * 10) / 10) as unknown as string;
        } else {
            searchParams.lat = "null";
        }
    }

    return searchParams;
}

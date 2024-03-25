export default function checkParams(lon: string | null, lat: string | null) {
    let checkedLon: string | null;
    let checkedLat: string | null;
    if (!isNaN(Number(lon))) {
        checkedLon = (Math.round(Number(lon) * 10) / 10) as unknown as string;
    } else {
        checkedLon = null;
    }

    if (!isNaN(Number(lat))) {
        checkedLat = (Math.round(Number(lat) * 10) / 10) as unknown as string;
    } else {
        checkedLat = null;
    }

    return { checkedLon, checkedLat };
}

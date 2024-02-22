"use server";

export default async function fetchData(url: string) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("ERROR: Couldn't fetch the data");
        return JSON.parse(JSON.stringify(error));
    }
}

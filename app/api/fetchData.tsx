export default async function fetchData(url: string) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (res.ok) {
            console.log("data", data);
            return data;
        } else {
            throw new Error("ERROR: Couldn't fetch the data");
        }
    } catch (error) {
        console.error(error);
        return JSON.parse(JSON.stringify(error));
    }
}

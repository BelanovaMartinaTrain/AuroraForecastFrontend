// general fetch function
export default async function fetchData(url: string) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (res.ok) {
            return data;
        } else {
            throw new Error("ERROR: Couldn't fetch the data");
        }
    } catch (error) {
        console.error("An error occured: ", error);
        return JSON.parse(JSON.stringify(error));
    }
}

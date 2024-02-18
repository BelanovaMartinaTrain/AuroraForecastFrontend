"use server";

export default async function fetchAndChangeGraphData(url: string) {
    const res = await fetch(url /*{ next: { revalidate: 3600 } }*/);
    const data = await res.json();

    const filteredData = data.filter((dat: string[]) => dat[2] === "estimated" || dat[2] === "predicted");
    const labels: string[] = filteredData.map((item: string[]) => {
        const date = new Date(item[0]);
        const time = date.toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit" });
        const datum = date.toLocaleDateString("uk", {
            month: "numeric",
            day: "numeric",
        });
        return `${datum}. ${time}`;
    });
    const yValues: number[] = filteredData.map((item: string[]) => Number(item[1]));
    console.log("fetch", labels, yValues);
    return { labels, yValues };
}

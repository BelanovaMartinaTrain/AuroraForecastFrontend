//function to fetch data for graph
export default async function fetchAndChangeGraphData(url: string) {
    const res = await fetch(url);
    const data = await res.json();

    // only use the data which have "estimated" or "predicted"
    const filteredData = data.filter((dat: string[]) => dat[2] === "estimated" || dat[2] === "predicted");

    // create an array of labels consisting of dates in day/month format
    const labels: string[] = filteredData.map((item: string[]) => {
        const date = new Date(item[0]);
        const time = date.toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit" });
        const datum = date.toLocaleDateString("uk", {
            month: "numeric",
            day: "numeric",
        });
        return `${datum}. ${time}`;
    });

    // create an array of values
    const values: number[] = filteredData.map((item: string[]) => Number(item[1]));
    return { labels, values };
}

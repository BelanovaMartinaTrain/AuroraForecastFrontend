export default async function fetchGraphData(url: string) {
    const res = await fetch(url);
    const data = await res.json();
    // const values = data.map((chunk: string[]) => Number(chunk[1])).slice(1, -1);
    // const labels = data.map((chunk: string[]) => new Date(chunk[0])).slice(1, -1);

    const labels: string[] = [];
    const values: number[] = [];

    for (let i = 0; i < data.length; i++) {
        values.push(Number(data[i][1]));
        labels.push(
            String(
                new Date(data[i][0]).toLocaleTimeString([], {
                    hourCycle: "h23",
                    hour: "2-digit",
                    minute: "2-digit",
                })
            )
        );
    }

    return { labels, values };
}

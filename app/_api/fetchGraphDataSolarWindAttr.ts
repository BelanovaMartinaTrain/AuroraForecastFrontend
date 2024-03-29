export default async function fetchGraphDataSolarWindAttr(url: string, index: number) {
    const res = await fetch(url);
    const data = await res.json();
    // const values = data.map((chunk: string[]) => Number(chunk[1])).slice(1, -1);
    // const labels = data.map((chunk: string[]) => new Date(chunk[0])).slice(1, -1);

    const labels: string[] = [];
    const values: number[] = [];
    let ariaTextSignificantValues = {
        value: 0,
        timestamp: "",
        minimum: 0,
    };

    for (let i = 0; i < data.length; i++) {
        if (!!data[i][index]) {
            values.push(Number(data[i][index]));
            labels.push(
                String(
                    new Date(data[i][0]).toLocaleTimeString([], {
                        hourCycle: "h23",
                        hour: "2-digit",
                        minute: "2-digit",
                    })
                )
            );
            console.log(ariaTextSignificantValues.value);

            if (Number(data[i][index]) > ariaTextSignificantValues.value) {
                ariaTextSignificantValues.value = Number(data[i][index]);
                console.log(ariaTextSignificantValues.value);
                ariaTextSignificantValues.timestamp = String(
                    new Date(data[i][0]).toLocaleTimeString([], {
                        hourCycle: "h23",
                        hour: "2-digit",
                        minute: "2-digit",
                    })
                );
            }
        }
    }

    ariaTextSignificantValues.minimum = Math.min(...values);

    console.log(ariaTextSignificantValues);
    console.log(values, labels);
    return { labels, values, ariaTextSignificantValues };
}

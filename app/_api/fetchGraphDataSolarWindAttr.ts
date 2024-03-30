import { toHoursAndMinutes24h } from "../_utils/timeFormatting";

export default async function fetchGraphDataSolarWindAttr(url: string, index: number) {
    const res = await fetch(url);
    const data = await res.json();
    // const values = data.map((chunk: string[]) => Number(chunk[1])).slice(1, -1);
    // const labels = data.map((chunk: string[]) => new Date(chunk[0])).slice(1, -1);

    const labels: string[] = [];
    const values: number[] = [];
    let ariaTextSignificantValues = {
        maximum: 0,
        timestamp: "",
        minimum: 0,
    };

    for (let i = 0; i < data.length; i++) {
        if (!!data[i][index]) {
            const value = Number(data[i][index]);
            const label = String(new Date(data[i][0]).toLocaleTimeString([], toHoursAndMinutes24h));
            values.push(value);
            labels.push(label);

            if (value > ariaTextSignificantValues.maximum) {
                ariaTextSignificantValues.maximum = value;
                ariaTextSignificantValues.timestamp = label;
            }
        }
    }

    ariaTextSignificantValues.minimum = Math.min(...values);

    return { labels, values, ariaTextSignificantValues };
}

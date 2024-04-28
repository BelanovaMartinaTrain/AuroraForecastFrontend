import { toHoursAndMinutes24h } from "../_utils/timeFormatting";

// function to fetch and create labels for graph subpage - solar wind data
export default async function fetchGraphDataSolarWindAttr(url: string, index: number) {
    const res = await fetch(url);
    const data = await res.json();

    const labels: string[] = [];
    const values: number[] = [];

    // this will be used to set aria label with significant values
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

            // find max value with timestamp for future aria label
            if (value > ariaTextSignificantValues.maximum) {
                ariaTextSignificantValues.maximum = value;
                ariaTextSignificantValues.timestamp = label;
            }
        }
    }

    ariaTextSignificantValues.minimum = Math.min(...values);

    return { labels, values, ariaTextSignificantValues };
}

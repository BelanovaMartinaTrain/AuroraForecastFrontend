import fetchData from "./fetchData";

export let xValues: string[];

async function getNewData() {
    const myData = await fetchData();
    const newArray = myData.filter((dat: string[]) => dat[2] === "estimated" || dat[2] === "predicted");
    const labels = newArray.map((item: string[]) => {
        const date = new Date(item[0]);
        const time = date.toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit" });
        const datum = date.toLocaleDateString("uk", {
            month: "numeric",
            day: "numeric",
        });
        return `${datum} ${time}`;
    });
    xValues = labels;
    console.log(xValues);
}
const dunno = async () => await getNewData();
console.log(dunno);

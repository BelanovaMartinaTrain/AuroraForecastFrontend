import Image from "next/image";
import BarGraph, { barGraphProps } from "./BarGraph";

async function fetchAndChange() {
    const res = await fetch("http:localhost:5176/api/planetary-k-3h", { next: { revalidate: 30 } });
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
    const values: number[] = filteredData.map((item: string[]) => Number(item[1]));
    return { labels, values };
}

export async function GraphTest() {
    let data: barGraphProps = await fetchAndChange();

    console.log(data);
    return (
        <div className="widget center padding-small grid-item width-100 ">
            <h2 className="uppercase margin-xs-btm font-h2 relative">
                KP index forecast
                <span className="material-symbols-outlined info-icon-kp">
                    <Image src="/icons/info-gray.svg" alt="info icon" width={16} height={16} />
                </span>
                <BarGraph data={data} />
            </h2>
        </div>
    );
}

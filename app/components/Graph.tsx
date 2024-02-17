"use client";

import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, ChartData, BarController } from "chart.js";
import { Chart } from "react-chartjs-2";
import Image from "next/image";
import fetchData from "../api/fetchData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, BarController);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
};

const xValues = ["00-03", "03-06", "06-09", "09-12", "12-15", "15-18", "18-21", "21-00"];
const yValues = [1, 3, 3, 1, 1, 6, 9, 5, 2];

export const data = {
    labels: xValues,
    datasets: [
        {
            data: yValues,
        },
    ],
};

function createGradient(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createLinearGradient(0, -50, 0, 237);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.5, "SpringGreen");
    gradient.addColorStop(1, "purple");
    return gradient;
}

export function Graph() {
    const chartRef = useRef<ChartJS>(null);
    const [chartData, setChartData] = useState<ChartData<"bar">>({
        datasets: [],
    });
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        async function getNewData() {
            const myData = await fetchData();
            const newArray = myData.filter((dat: string[]) => dat[2] === "estimated" || dat[2] === "predicted");
            setNewData(newArray);
        }

        getNewData();
        console.log("first hook run");
    }, []);

    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) {
            return;
        }
        const chartData = {
            ...data,
            labels: newData.map((item) => {
                const date = new Date(item[0]);
                const time = date.toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit" });
                const datum = date.toLocaleDateString("uk", {
                    month: "numeric",
                    day: "numeric",
                });
                return `${datum} ${time}`;
            }),
            datasets: data.datasets.map((dataset) => ({
                ...dataset,
                backgroundColor: createGradient(chart.ctx),
                data: newData.map((item) => item[1]),
            })),
        };
        console.log("second hook run");
        setChartData(chartData);
    }, [newData]);

    console.log("rendered");

    return (
        <div className="widget center padding-small grid-item width-100 ">
            <h2 className="uppercase margin-xs-btm font-h2 relative">
                KP index forecast
                <span className="material-symbols-outlined info-icon-kp">
                    <Image src="/icons/info-gray.svg" alt="info icon" width={16} height={16} />
                </span>
            </h2>
            <Chart ref={chartRef} type="bar" data={chartData} options={options} />
        </div>
    );
}

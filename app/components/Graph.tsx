"use client";

import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, ChartData, BarController } from "chart.js";
import { Chart } from "react-chartjs-2";
import Image from "next/image";
import fetchAndChangeGraphData from "../api/changeData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, BarController);

export const options = {
    indexAxis: "y" as const,
    scales: {
        x: {
            min: 0,
            max: 9,
            ticks: {
                stepSize: 1,
            },
        },
    },
    elements: {
        bar: {
            borderWidth: 1,
        },
    },
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

function createGradient(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createLinearGradient(0, -50, 470, 0);
    gradient.addColorStop(0, "purple");
    gradient.addColorStop(0.4, "SpringGreen");
    gradient.addColorStop(0.7, "yellowGreen");
    gradient.addColorStop(1, "orangeRed");
    return gradient;
}

export function Graph() {
    const chartRef = useRef<ChartJS>(null);
    const [chartData, setChartData] = useState<ChartData<"bar">>({
        datasets: [],
    });
    const [labels, setLabels] = useState<string[]>();
    const [yValues, setYValues] = useState<number[]>();

    useEffect(() => {
        async function fetchData() {
            const graphValues = await fetchAndChangeGraphData("http://165.227.128.185:8080/api/planetary-k-3h");
            const { labels, yValues } = graphValues;
            setLabels(labels);
            setYValues(yValues);
        }

        fetchData();
        const intervalID = setInterval(() => {
            fetchData();
        }, 3600000); //fetch every hour
        return () => clearInterval(intervalID);
    }, []);

    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) {
            return;
        }
        if (!!labels && !!yValues) {
            const chartData = {
                labels: labels,
                datasets: [
                    {
                        backgroundColor: createGradient(chart.ctx),
                        data: yValues,
                    },
                ],
            };
            setChartData(chartData);
        }
    }, [labels, yValues]);

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

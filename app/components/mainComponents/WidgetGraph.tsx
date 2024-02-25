"use client";

import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, ChartData, BarController } from "chart.js";
import { Chart } from "react-chartjs-2";
import ProgressBar from "../../ui/ProgressBar";
import fetchAndChangeGraphData from "../../api/changeData";
import Link from "next/link";

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
        // y: {
        //     min: 0,
        //     max: 20,
        //     ticks: {
        //         stepSize: 5,
        //     },
        // },
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
    gradient.addColorStop(0.5, "SpringGreen");
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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const graphValues = await fetchAndChangeGraphData("http://165.227.128.185:8080/api/planetary-k-3h");
                if (!graphValues.labels) {
                    throw new Error("Source is unreachable");
                } else {
                    const { labels, yValues } = graphValues;
                    setLabels(labels);
                    setYValues(yValues);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
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
        <div className="widget center padding-small grid-item width-100 backdrop-blur-sm min-h-[212px] xl:min-h-[300px]">
            <h2 className="uppercase margin-xs-btm font-h2 relative">KP index forecast</h2>
            {!!isLoading ? <ProgressBar /> : <Chart ref={chartRef} type="bar" data={chartData} options={options} />}
            <Link href="https://www.swpc.noaa.gov/" className={`${!!isLoading && "visibility-hidden"}`} target="_blank">
                <p className="mt-2 font-medium text-stone-500">NOAA</p>
            </Link>
        </div>
    );
}
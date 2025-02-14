"use client";

import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, ChartData, BarController } from "chart.js";
import { Chart } from "react-chartjs-2";
import ProgressBar from "../uiComponents/ProgressBar";
import fetchAndChangeGraphData from "../../_api/fetchAndChangeGraphData";
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
    const [values, setValues] = useState<number[]>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const graphValues = await fetchAndChangeGraphData("http://aurora-api.cloud:8080/api/planetary-k-3h");

                // TODO this error handling needs some work
                if (!graphValues.labels) {
                    throw new Error("Source is unreachable");
                } else {
                    const { labels, values } = graphValues;
                    setLabels(["UTC", ...labels]);
                    setValues([0, ...values]);
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
        }, 30 * 60 * 1000); //fetch every half an hour
        return () => clearInterval(intervalID);
    }, []);

    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) {
            return;
        }
        if (!!labels && !!values) {
            const chartData = {
                labels: labels,
                datasets: [
                    {
                        backgroundColor: createGradient(chart.ctx),
                        data: values,
                    },
                ],
            };
            setChartData(chartData);
        }
    }, [labels, values]);

    return (
        <div className="widget text-center content-center justify-items-center padding-small grid-item  md:order-none w-full backdrop-blur-sm min-h-[212px] xl:min-h-[300px]">
            <h2 className="uppercase font-h2 relative">KP index forecast</h2>
            {!!isLoading ? (
                <ProgressBar />
            ) : (
                <>
                    <Chart
                        ref={chartRef}
                        type="bar"
                        data={chartData}
                        options={{
                            ...options,
                            aspectRatio: 1.7,
                        }}
                    />

                    <p className="mt-6 font-medium text-stone-500 text-[11px]  ">
                        <span className="capitalize mr-1">Source:</span>
                        <Link
                            href="https://www.swpc.noaa.gov/"
                            className={`${!!isLoading ? "invisible" : ""}`}
                            aria-label="Link to source of used data - NOAA"
                            target="_blank"
                        >
                            NOAA
                        </Link>
                    </p>
                </>
            )}
        </div>
    );
}

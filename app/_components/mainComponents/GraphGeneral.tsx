"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    ChartData,
    BarController,
    LineElement,
    LineController,
    Title,
    PointElement,
} from "chart.js";
import { Chart, Line } from "react-chartjs-2";
import ProgressBar from "../uiComponents/ProgressBar";
import fetchAndChangeGraphData from "../../_api/changeData";
import Link from "next/link";
import * as optionsGradient from "@/app/_utils/graphOptionsGradient";
import fetchGraphData from "@/app/_api/fetchGraphData";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    BarController,
    LineElement,
    LineController,
    PointElement
);

export function GraphGeneral({
    orientation,
    title,
}: {
    orientation: "vertical" | "horizontal" | "line";
    title: string;
}) {
    const chartRef = useRef<ChartJS>(null);
    const [chartData, setChartData] = useState<ChartData<"bar">>({
        datasets: [],
    });
    const [labels, setLabels] = useState<string[]>();
    const [values, setValues] = useState<number[]>();
    const [isLoading, setIsLoading] = useState(true);
    const options =
        orientation === "vertical"
            ? optionsGradient.optionsBarVertical
            : orientation === "horizontal"
            ? optionsGradient.optionsBarHorizontal
            : optionsGradient.optionsLine;

    useEffect(() => {
        async function fetchData() {
            try {
                const graphValues = await fetchGraphData(
                    "https://aurora-api.cloud/api/solar-wind-density-3day"
                );
                if (!graphValues.labels) {
                    throw new Error("Source is unreachable");
                } else {
                    const { labels, values } = graphValues;
                    setLabels([...labels]);
                    setValues([...values]);
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
        }, 60 * 1000);
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
                        backgroundColor:
                            orientation === "vertical"
                                ? optionsGradient.createGradientVertical(chart.ctx)
                                : optionsGradient.createGradientHorizontal(chart.ctx),
                        data: values,
                        borderColor: optionsGradient.createGradientHorizontal(chart.ctx),
                        pointRadius: 0.1,
                        borderWidth: 1,
                    },
                ],
            };
            setChartData(chartData);
        }
    }, [labels, values]);

    return (
        <div className="widget center padding-small grid-item width-100 backdrop-blur-sm min-h-[212px] xl:min-h-[300px]">
            <h2 className="uppercase font-h2 relative">{title}</h2>
            {!!isLoading ? (
                <ProgressBar />
            ) : (
                <>
                    <div className="h-52 ">
                        <Chart
                            ref={chartRef}
                            type="line"
                            data={chartData}
                            options={{
                                ...options,
                                maintainAspectRatio: false,
                            }}
                        />
                    </div>
                    <p className="mt-4 font-medium text-stone-500 text-[11px]">
                        <span className="capitalize mr-1">Source:</span>
                        <Link
                            href="https://www.swpc.noaa.gov/"
                            className={`${!!isLoading ? "visibility-hidden" : ""}`}
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

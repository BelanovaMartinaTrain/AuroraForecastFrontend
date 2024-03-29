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
    PointElement,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import ProgressBar from "../uiComponents/ProgressBar";
import Link from "next/link";
import * as optionsGradient from "@/app/_utils/graphOptionsGradient";
import fetchGraphDataSolarWindAttr from "@/app/_api/fetchGraphDataSolarWindAttr";

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
    url,
    index,
}: {
    orientation: "vertical" | "horizontal" | "line";
    title: string;
    url: string;
    index: number;
}) {
    const chartRef = useRef<ChartJS>(null);
    const ariaDivRef = useRef<HTMLDivElement>(null);
    const [chartData, setChartData] = useState<ChartData<"bar">>({
        datasets: [],
    });
    const [labels, setLabels] = useState<string[]>();
    const [values, setValues] = useState<number[]>();
    const [isLoading, setIsLoading] = useState(true);
    const [altText, setAltText] = useState("");
    const options =
        orientation === "vertical"
            ? optionsGradient.optionsBarVertical
            : orientation === "horizontal"
            ? optionsGradient.optionsBarHorizontal
            : optionsGradient.optionsLine;

    useEffect(() => {
        async function fetchData() {
            try {
                const graphValues = await fetchGraphDataSolarWindAttr(url, index);
                if (!graphValues.labels) {
                    throw new Error("Source is unreachable");
                } else {
                    const { labels, values, ariaTextSignificantValues } = graphValues;
                    setLabels([...labels]);
                    setValues([...values]);
                    setIsLoading(false);
                    ariaDivRef.current &&
                        (ariaDivRef.current.innerText = `graph is showing ${
                            title.split("(")[0]
                        } progression in time. The maximum value was ${
                            ariaTextSignificantValues.value +
                            " " +
                            title.split("(")[1].split(")")[0]
                        } recorded at ${
                            ariaTextSignificantValues.timestamp
                        } UTC. The range of values were from ${
                            ariaTextSignificantValues.minimum
                        } to ${ariaTextSignificantValues.value}`);
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
                        pointRadius: 0.01,
                        borderWidth: 1,
                    },
                ],
            };
            setChartData(chartData);
        }
    }, [labels, values]);

    return (
        <div className="widget center padding-small grid-item width-100 backdrop-blur-sm min-h-[212px] xl:min-h-[300px]">
            <h2 id="title" className="uppercase font-h2 relative">
                {title}
            </h2>
            {!!isLoading ? (
                <ProgressBar />
            ) : (
                <>
                    <div
                        role="img"
                        aria-labelledby="title"
                        aria-describedby="description"
                        className="h-52 "
                    >
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
                    <div
                        id="description"
                        ref={ariaDivRef}
                        className="uppercase text-normal font-medium sr-only"
                    >
                        Text
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

"use client";

import React, { useRef, useState } from "react";
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
import useFetchGraphData from "@/app/_hooks/useFetchGraphData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, BarController, LineElement, LineController, PointElement);

export function GraphGeneral<T>({
    options,
    createGradient,
    title,
    url,
    index,
}: {
    options: T;
    createGradient: (ctx: CanvasRenderingContext2D) => CanvasGradient;
    title: string;
    url: string;
    index: number;
}) {
    const chartRef = useRef<ChartJS>(null);
    const ariaDivRef = useRef<HTMLDivElement>(null);
    const [chartData, setChartData] = useState<ChartData<"bar">>({
        datasets: [],
    });

    const { isLoading } = useFetchGraphData(url, index, title, chartRef, createGradient, setChartData, ariaDivRef);

    return (
        <div className="widget text-center content-center justify-items-center p-6 grid-item w-full backdrop-blur-sm min-h-[212px] xl:min-h-[300px]">
            <h2 id="title" className="uppercase font-h2 pb-2 relative">
                {title}
            </h2>
            {!!isLoading ? (
                <ProgressBar />
            ) : (
                <>
                    <div role="img" aria-labelledby="title" aria-describedby="description" className="h-52 ">
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
                    <div id="description" ref={ariaDivRef} className="uppercase text-normal font-medium sr-only">
                        Text
                    </div>
                    <p className="mt-4 font-medium text-stone-500 text-[11px]">
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

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, ChartData, BarController } from "chart.js";
import { Chart } from "react-chartjs-2";
import { useRouter } from "next/navigation";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, BarController);

export const options = {
    indexAxis: "y" as const,
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
    gradient.addColorStop(0.7, "SpringGreen");
    gradient.addColorStop(1, "yellowGreen");
    return gradient;
}

export type barGraphProps = {
    labels: string[];
    values: number[];
};

export default function BarGraph(props: barGraphProps): JSX.Element {
    const { labels, values } = props;
    const chartRef = useRef<ChartJS>(null);
    const [chartData, setChartData] = useState<ChartData<"bar">>({
        datasets: [],
    });
    //const router = useRouter();

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         router.refresh();
    //     }, 10000);
    //     return () => clearInterval(timer);
    // }, [router]);

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
        <>
            <Chart ref={chartRef} type="bar" data={chartData} options={options} />
        </>
    );
}

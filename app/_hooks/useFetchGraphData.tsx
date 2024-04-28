import { useEffect, useState } from "react";
import fetchGraphDataSolarWindAttr from "../_api/fetchGraphDataSolarWindAttr";
import { Chart as ChartJS, ChartData, ChartTypeRegistry, Point, BubbleDataPoint } from "chart.js";

export default function useFetchGraphData(
    url: string,
    index: number,
    title: string,
    chartRef: React.RefObject<ChartJS<keyof ChartTypeRegistry, (number | [number, number] | Point | BubbleDataPoint | null)[], unknown>>,
    createGradient: (ctx: CanvasRenderingContext2D) => CanvasGradient,
    setChartData: React.Dispatch<React.SetStateAction<ChartData<"bar", (number | [number, number] | null)[], unknown>>>,
    ariaDivRef: React.RefObject<HTMLDivElement>
) {
    const [labels, setLabels] = useState<string[]>();
    const [values, setValues] = useState<number[]>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const graphValues = await fetchGraphDataSolarWindAttr(url, index);
                // TODO error handling
                if (!graphValues.labels) {
                    throw new Error("Source is unreachable");
                } else {
                    const { labels, values, ariaTextSignificantValues } = graphValues;
                    setLabels([...labels]);
                    setValues([...values]);
                    setIsLoading(false);

                    // set aria label
                    ariaDivRef.current &&
                        (ariaDivRef.current.innerText = `graph is showing ${title.split("(")[0]} progression in time. The maximum value was ${
                            ariaTextSignificantValues.maximum + " " + title.split("(")[1].split(")")[0]
                        } recorded at ${ariaTextSignificantValues.timestamp} UTC. The range of values were from ${
                            ariaTextSignificantValues.minimum
                        } to ${ariaTextSignificantValues.maximum}`);
                }
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        }

        fetchData();
        const intervalID = setInterval(() => {
            fetchData();
        }, 60 * 1000); // fetch every minute
        return () => clearInterval(intervalID);
    }, [ariaDivRef.current]);

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
                        borderColor: createGradient(chart.ctx),
                        pointRadius: 0.01,
                        borderWidth: 1,
                    },
                ],
            };
            setChartData(chartData);
        }
    }, [labels, values]);

    return { isLoading };
}

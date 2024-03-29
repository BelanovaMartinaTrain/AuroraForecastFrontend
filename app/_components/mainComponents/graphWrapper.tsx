"use client";
import * as d3 from "d3";
import { useEffect, useState } from "react";
import LinePlot from "../uiComponents/LinePlot";
import { useLocationAndWeatherContext } from "@/app/_context/locationAndWeatherContext";
import BasicWidget from "../layoutComponents/BasicWidget";
import fetchWindTesting from "@/app/_api/fetchWindTesting";

export default function GraphWrapper() {
    // const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

    // const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (
    //     event: React.MouseEvent<HTMLDivElement, MouseEvent>
    // ) => {
    //     const [x, y] = d3.pointer(event);
    //     setData(data.slice(-200).concat(Math.atan2(x, y)));
    // };
    const { weatherArray } = useLocationAndWeatherContext();
    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    //const [data2, setData2] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    useEffect(() => {
        let weather: number[] = [];
        async function getWind() {
            weather = await fetchWindTesting();
            setData(weather);
        }
        getWind();
        //weatherArray?.forEach((weatherObject) => weather.push(weatherObject.wind_speed));
        //setData(weather);
    }, [weatherArray]);

    return (
        <BasicWidget className="widget center padding-small  backdrop-blur-sm lg:min-h-40">
            <LinePlot data={data} />
        </BasicWidget>
    );
}

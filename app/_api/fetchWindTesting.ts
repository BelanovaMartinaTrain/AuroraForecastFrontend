export default async function fetchWindTesting() {
    const windArray: number[] = [];

    const response = await fetch(
        "http://localhost:5176/api/yr-met-weather-complete?lon=17.11&lat=48.16"
    );
    const data = await response.json();

    // data!.properties.timeseries.forEach((weatherObject) =>
    //     windArray.push(weatherObject.data.instant.details.wind_speed)
    // );

    console.log(windArray.slice(0, windArray.length - 27));
    return windArray.slice(1, windArray.length - 27);
}

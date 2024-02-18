export default function WidgetWeather() {
    return (
        <>
            <h2 className="uppercase margin-xs-btm font-h2">Weather</h2>
            <div className="quickview-div center">
                <div className="center quickview-item width-100 padding-sm-btm">
                    <p className="padding-xs-btm">Temperature</p>
                    <h3 className="padding-sm-btm">5&#176;C</h3>
                    <p className="padding-xs-btm">Wind</p>
                    <h3>5km/h SE</h3>
                </div>
                <div className="center quickview-item width-100 padding-sm-btm">
                    <p className="margin-sm-btm">Clouds </p>
                    <h3 className="font-smaller">Low: 10%</h3>
                    <h3 className="font-smaller">Middle: 60%</h3>
                    <h3 className="font-smaller">High: 0%</h3>
                </div>
            </div>
        </>
    );
}

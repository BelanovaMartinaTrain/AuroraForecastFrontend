import { GraphGeneral } from "../_components/mainComponents/GraphGeneral";

export default function Page() {
    return (
        <>
            <div className="pb-2">
                <GraphGeneral
                    orientation="line"
                    title="Solar Wind Speed (km/s)"
                    url="https://aurora-api.cloud/api/solar-wind-density-3day"
                    index={2}
                />
            </div>

            <GraphGeneral
                orientation="line"
                title="Solar Wind Density (cm⁻³)"
                url="https://aurora-api.cloud/api/solar-wind-density-3day"
                index={1}
            />
        </>
    );
}

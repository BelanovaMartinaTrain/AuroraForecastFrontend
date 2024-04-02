import { GraphGeneral } from "../_components/mainComponents/GraphGeneral";
import * as graph from "../_utils/graphOptionsGradient";

export default function Page() {
    return (
        <>
            <div className="pb-2">
                <GraphGeneral
                    options={graph.optionsLine}
                    createGradient={graph.createGradientHorizontal}
                    title="Solar Wind Speed (km/s)"
                    url="https://aurora-api.cloud/api/solar-wind-density-3day"
                    index={2}
                />
            </div>

            <GraphGeneral
                options={graph.optionsLine}
                createGradient={graph.createGradientVertical}
                title="Solar Wind Density (cm⁻³)"
                url="https://aurora-api.cloud/api/solar-wind-density-3day"
                index={1}
            />
        </>
    );
}

import BasicWidget from "../_components/layoutComponents/BasicWidget";

export default function Page() {
    return (
        <BasicWidget className={"widget font-normal p-5 sm:p-8 md:p-10 lg:p-12 backdrop-blur-sm text-xs sm:text-sm md:text-base"}>
            <h2 className="pb-3 font-semibold text-sm sm:text-base lg:text-lg ">This site serves to forecast the probability of Aurora sightings.</h2>
            <ul className="pt-1 font-normal list-disc">
                <span className="uppercase">Main goals:</span>
                <li className="mt-2 mx-3  font-bold  ">
                    <span className="bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">ACCESSIBILITY</span>
                </li>
                <li className="mx-3 ">Show data in a concise way</li>
                <li className="mx-3">Have every important information at one place</li>
                <li className="mx-3">Update data automatically without the need to refresh the page</li>
                <li className="mx-3">Provide basic info about Aurora theory to make data understandable right away</li>
                <li className="mx-3">Serve brief weather forecast in case of Aurora hunting</li>
            </ul>
        </BasicWidget>
    );
}

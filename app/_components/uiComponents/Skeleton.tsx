"use client";

export default function SkeletonComponent({ numberOfLines }: { numberOfLines: number }) {
    let skeletonShape = [];
    const PClassNames = "capitalize font-medium w-full ";
    for (let i = 0; i < numberOfLines; i++) {
        skeletonShape.push("");
    }

    return (
        <>
            <div className="mb-8 ml-4">
                <div key={-1} className="flex justify-evenly pt-1 pb-2 border-b-[1px] border-b-black border-opacity-50">
                    <p className="capitalize font-medium min-w-28">Date and time</p>
                    <div className="capitalize font-medium flex w-full ">
                        <p className={`${PClassNames}`}>Temperature </p>{" "}
                    </div>
                    <p className={PClassNames}>Wind speed</p>
                    <p className={PClassNames}>Clouds</p>
                    <p className={`${PClassNames} hidden md:block`}>High clouds</p>
                    <p className={`${PClassNames} hidden md:block`}>Middle clouds</p>
                    <p className={`${PClassNames} hidden md:block`}>Low clouds</p>
                    <p className={`${PClassNames} hidden lg:block`}>Fog</p>
                </div>
                {skeletonShape.map((shape) => (
                    <div className={`bg-black motion-safe:animate-pulse rounded-lg max-w-[900px] h-full  flex justify-evenly py-1 m-1 `}>
                        <p className=" font-medium w-full invisible">Date and time</p>
                    </div>
                ))}
            </div>
        </>
    );
}

"use client";

import { Skeleton } from "@nextui-org/react";
import Link from "next/link";
import SkeletonComponent from "../_components/uiComponents/Skeleton";

export default function Page() {
    return (
        <main>
            <Link href="/">Home</Link>
            <SkeletonComponent numberOfLines={13} />
        </main>
    );
}

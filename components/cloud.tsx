"use client";

import { useEffect } from "react";
import TopLeftCloud from "@/public/svg/top-left";
import TopMiddleCloud from "@/public/svg/top-mid";
import TopRightCloud from "@/public/svg/top-right";
import { gsap } from "gsap";

export default function CloudScene() {

    return (
        <div className="w-full mx-auto bg-sky-200 h-screen">
            <TopLeftCloud className="absolute top-0 left-0 animate-float" />
            <TopMiddleCloud className="absolute top-0 left-1/2 -translate-x-1/2 animate-floatSlow" />
            <TopRightCloud className="absolute top-0 right-0" />
            {/* <BottomRightCloud className="absolute bottom-0 right-0 animate-floatFast" /> */}
        </div>
    );
}

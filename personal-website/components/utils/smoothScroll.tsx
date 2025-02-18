"use client";
import React, { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

interface SmoothScrollingProps {
    children: ReactNode;
}

export default function SmoothScrolling({
    children,
}: SmoothScrollingProps): JSX.Element {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }} children={children}>
        </ReactLenis>
    );
}

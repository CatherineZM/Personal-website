"use client";

// external modules
import { useEffect, useState } from "react";
import Lenis from "lenis";

// types
import { PropsWithChildren } from "react";

interface Props {
    anchorID: string;
    className: string;
}

export default function ScrollToSection({
    anchorID,
    className,
    children,
}: PropsWithChildren<Props>): JSX.Element {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const lenisInstance = new Lenis({ autoRaf: true });
            setLenis(lenisInstance);
        }
    }, []);

    return (
        <div
            onClick={() => {
                if (lenis) {
                    lenis.scrollTo(anchorID);
                }
            }}
            className={className}>
            {children}
        </div>
    );
}

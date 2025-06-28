"use client";

// external library
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

// internal library
import { CldImage } from "next-cloudinary";
import ScrollToSection from "@/components/utils/scrollToSection";

interface PageProps {
    sections: Array<{
        mainTitle: {
            localizations: Array<{
                locale: string;
                text: string;
                link: string;
                buttonId: string;
            }>;
        };
        subitem: boolean;
        subList: Array<{
            localizations: Array<{
                locale: string;
                text: string;
                link: string;
                buttonId: string;
            }>;
        }>;
    }>;
    logo: {
        media: any;
        localizations: Array<{
            locale: string;
            altText: string;
        }>;
    };
    locale: string;
}

export default function Sidebar(props: PageProps): JSX.Element {
    const { sections, logo, locale } = props;

    // const useMediaQuery = (width: number): boolean => {
    //     const [targetReached, setTargetReached] = useState(false);

    //     const updateTarget = useCallback((e: MediaQueryListEvent) => {
    //         if (e.matches) {
    //             setTargetReached(true);
    //         } else {
    //             setTargetReached(false);
    //         }
    //     }, []);

    //     useEffect(() => {
    //         const media = window.matchMedia(`(max-width: ${width}px)`);
    //         media.addEventListener("change", updateTarget);

    //         if (media.matches) {
    //             setTargetReached(true);
    //         }

    //         return () => media.removeEventListener("change", updateTarget);
    //     }, [width, updateTarget]);

    //     return targetReached;
    // };

    // const isBreakpoint = useMediaQuery(1060);

    // const menuVariants = {
    //     hidden: {
    //         opacity: 0,
    //     },
    //     visible: {
    //         opacity: 1,
    //     },
    // };

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [itemOpen, setItemOpen] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent): void => {
            const menuElement = document.getElementById("menuItems");
            if (
                menuElement != null &&
                !menuElement.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        return (): void => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isMenuOpen]);

    // const styleList = {
    //     transparent: {
    //         background: "bg-transparent",
    //     },
    // };

    return (
        <div className="sticky z-40 flex flex-col top-[120px] h-[calc(100vh-120px)] border-r-[1px] border-r-charcoal/50 overflow-hidden">
            <div className="w-full flex items-start flex-shrink-0">
                <CldImage
                    width={logo.media.width}
                    height={logo.media.height}
                    crop="fill"
                    src={logo.media.public_id}
                    alt={
                        logo.localizations.find((i) => i.locale === locale)
                            ?.altText || ""
                    }
                    sizes="(min-width: 768px) 48vw, (min-width: 1280px) 78vw, 100vw"
                    className="w-[80%] h-auto"
                />
            </div>
            <div
                className="overflow-y-auto custom-scrollbar"
                data-lenis-prevent>
                {sections.map((item, index) => (
                    <div key={index}>
                        {!item.subitem ? (
                            <ScrollToSection
                                className="px-mobileX text-charcoal/70 hover:text-charcoal hover:bg-pastel-blue/50 active:text-charcoal active:bg-pastel-blue transition-colors duration-300 py-2"
                                anchorID={
                                    item.mainTitle.localizations.find(
                                        (i) => i.locale === locale
                                    )?.link || ""
                                }>
                                <a
                                    href={
                                        item.mainTitle.localizations.find(
                                            (i) => i.locale === locale
                                        )?.link || ""
                                    }
                                    id={
                                        item.mainTitle.localizations.find(
                                            (i) => i.locale === locale
                                        )?.buttonId || ""
                                    }
                                    className="text-base">
                                    <button className="w-full h-full text-left">
                                        {item.mainTitle.localizations.find(
                                            (i) => i.locale === locale
                                        )?.text || ""}
                                    </button>
                                </a>
                            </ScrollToSection>
                        ) : (
                            <div>
                                <div
                                    className={`py-2 flex items-center justify-between cursor-pointer px-mobileX text-base hover:text-charcoal hover:bg-pastel-blue/50 transition-colors duration-300 ${
                                        itemOpen
                                            ? "text-charcoal bg-pastel-blue"
                                            : "text-charcoal/70 bg-transparent"
                                    }`}
                                    onClick={() => setItemOpen(!itemOpen)}>
                                    <span>
                                        {item.mainTitle.localizations.find(
                                            (i) => i.locale === locale
                                        )?.text || ""}
                                    </span>
                                    <FaChevronDown
                                        className={`transition-transform ${
                                            itemOpen
                                                ? "transform rotate-180"
                                                : ""
                                        }`}
                                    />
                                </div>
                                <AnimatePresence initial={false}>
                                    {itemOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                                opacity: 1,
                                                height: "auto",
                                                transition: {
                                                    duration: 0.3,
                                                },
                                            }}
                                            exit={{
                                                opacity: 0,
                                                height: 0,
                                                transition: {
                                                    duration: 0.3,
                                                },
                                            }}
                                            className="flex flex-col border-l-2 border-charcoal/30 ml-mobileX">
                                            {item.subList.map((listItem, i) => (
                                                <ScrollToSection
                                                    className="text-charcoal/70 hover:text-charcoal hover:bg-pastel-blue/50 active:text-charcoal active:bg-pastel-blue transition-colors duration-300 py-2 px-mobileX cursor-pointer"
                                                    anchorID={
                                                        listItem.localizations.find(
                                                            (i) =>
                                                                i.locale ===
                                                                locale
                                                        )?.link || ""
                                                    }
                                                    key={i}>
                                                    <a
                                                        href={
                                                            listItem.localizations.find(
                                                                (i) =>
                                                                    i.locale ===
                                                                    locale
                                                            )?.link || ""
                                                        }
                                                        key={i}
                                                        id={
                                                            listItem.localizations.find(
                                                                (i) =>
                                                                    i.locale ===
                                                                    locale
                                                            )?.buttonId || ""
                                                        }
                                                        className="w-full h-full">
                                                        <button>
                                                            {listItem.localizations.find(
                                                                (i) =>
                                                                    i.locale ===
                                                                    locale
                                                            )?.text || ""}
                                                        </button>
                                                    </a>
                                                </ScrollToSection>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

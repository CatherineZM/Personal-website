"use client";

// external library
import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserAlt, FaChevronDown } from "react-icons/fa";

// internal library
import { CldImage } from "next-cloudinary";

interface PageProps{
    sections: Array<any>;
    logo: {
        media: any;
        localizations: {
            altText: string;
        }
    };
}

export default function Sidebar(props: PageProps): JSX.Element {
    const { sections, logo } = props;

    const useMediaQuery = (width: number): boolean => {
        const [targetReached, setTargetReached] = useState(false);

        const updateTarget = useCallback((e: MediaQueryListEvent) => {
            if (e.matches) {
                setTargetReached(true);
            } else {
                setTargetReached(false);
            }
        }, []);

        useEffect(() => {
            const media = window.matchMedia(`(max-width: ${width}px)`);
            media.addEventListener("change", updateTarget);

            if (media.matches) {
                setTargetReached(true);
            }

            return () => media.removeEventListener("change", updateTarget);
        }, [width, updateTarget]);

        return targetReached;
    };

    const isBreakpoint = useMediaQuery(1060);

    const menuVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    };

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

        if (isMenuOpen) {
            document.addEventListener("click", handleOutsideClick);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return (): void => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isMenuOpen]);

    const styleList = {
        transparent: {
            background: "bg-transparent",
        },
    };

    const getSectionLink = (name: string): string => {
        const nameLower = name.toLowerCase();
        const stringWithDashes = nameLower.replace(/\s+/g, "-");
        return "#" + stringWithDashes;
    };

    return (
        <div className="w-[30%] pl-mobileX md:pl-tabletX 2xl:pl-desktopX 3xl:pl-plusDesktopX pr-3 py-4 fixed z-40 flex flex-col h-[calc(100vh-120px)] bg-charcoal mt-[120px]">
            <div className="w-full flex items-start">
                <CldImage
                    width={logo.media.width}
                    height={logo.media.height}
                    crop="fill"
                    src={logo.media.public_id}
                    alt={logo.localizations.altText}
                    sizes="(min-width: 768px) 48vw, (min-width: 1280px) 78vw, 100vw"
                    className="w-[80%] h-auto"
                />
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
                {sections.map((item, index) => (
                    <div key={index}>
                        {!item.subSection ? (
                            <a
                                href={getSectionLink(item.name)}
                                id={item.name}
                                className="text-egg hover:brightness-50 text-lg">
                                <button className="py-2">{item.name}</button>
                            </a>
                        ) : (
                            <div>
                                <div
                                    className="py-2 flex items-center justify-between cursor-pointer hover:text-blue-600 bg-charcoal text-egg text-lg"
                                    onClick={() => setItemOpen(!itemOpen)}>
                                    <span>{item.name}</span>
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
                                            className="flex flex-col border-l-2 border-egg/30">
                                            {item.sub.map(
                                                (link: string, i: number) => (
                                                    <a
                                                        href={getSectionLink(
                                                            link
                                                        )}
                                                        key={i}
                                                        id={link}
                                                        className="text-egg pl-2 py-2 hover:brightness-50">
                                                        <button>{link}</button>
                                                    </a>
                                                )
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                {/* <div
                                    className={`mt-2 transition-max-height duration-300 ease-in-out ${
                                        itemOpen
                                            ? "max-h-40"
                                            : "max-h-0 overflow-hidden"
                                    }`}>
                                    <ul className="space-y-2">
                                        <li className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                                            Sub Item 1
                                        </li>
                                        <li className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                                            Sub Item 2
                                        </li>
                                        <li className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                                            Sub Item 3
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

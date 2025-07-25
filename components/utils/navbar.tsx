"use client";

// external library
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";

// internal library
import { CldImage } from "next-cloudinary";

interface NavProps {
    data: {
        logo: {
            media: any;
            localizations: Array<{
                locale: string;
                altText: string;
            }>
        };
        navlink: Array<{
            localizations: Array<{
                locale: string;
                text: string;
            }>
            link: string;
            buttonId: string;
        }>;
        navbtn: Array<{
            localizations: Array<{
                locale: string;
                text: string;
            }>
            link: string;
            buttonId: string;
        }>;
    };
    locale: string;
}

export default function Menu(props: NavProps): JSX.Element {
    const { data, locale } = props;
    const controls = useAnimation();
    const currentPath = usePathname();
    const [scrolled, setScrolled] = useState(false);

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

    useEffect(() => {
        const handleScroll = (): void => {
            const scrolledPos = window.scrollY;
            const moved = scrolledPos > 0;
            setScrolled(moved);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        return (): void => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // const isBreakpoint = useMediaQuery(1060);

    const menuVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    };

    const [isMenuOpen, setMenuOpen] = useState(false);

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

    // const styleList = {
    //     transparent: {
    //         background: 'bg-transparent',

    //     }
    // }

    const normalizePath = (path: string) => {
        const pathWithoutLocale = path.replace(/^\/(en|zh)/, "");

        return pathWithoutLocale.startsWith("/")
            ? pathWithoutLocale
            : `/${pathWithoutLocale}`;
    };

    // const extractLocale = (path: string) => {
    //     return path.split("/")[1];
    // }

    return (
        <div
            className={`px-mobileX md:px-tabletX 2xl:px-desktopX 3xl:px-plusDesktopX py-4 w-full fixed z-40 h-[120px] flex flex-row justify-between ${
                scrolled ? "bg-floral-white" : "bg-transparent"
            }`}
            style={{
                transition:
                    "background-color 100ms ease-in-out, opacity 300ms ease-in-out",
            }}>
            <div className="basis-2/5 flex flex-row items-center justify-start gap-x-6">
                {data.navbtn.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className={`${
                            index % 2
                                ? "bg-transparent border-blue-orchid border-2 text-blue-orchid hover:bg-blue-orchid hover:border-blue-orchid hover:text-white"
                                : "bg-blue-orchid border-blue-orchid border-2 text-white hover:bg-transparent hover:border-blue-orchid hover:text-blue-orchid"
                        } px-6 md:px-3 2xl:px-6 py-1 rounded-xl`}
                        style={{
                            transition:
                                "border 300ms ease-out, background-color 300ms ease-in-out, opacity 300ms ease-in-out",
                        }}>
                        <p
                            className={`uppercase font-medium`}
                            id={item.buttonId}>
                            {
                                item.localizations.find(
                                    (i) => i.locale === locale
                                )?.text
                            }
                        </p>
                    </a>
                ))}
                {/* {data.navlink.map((item, index) => (
                    <div key={index} className="px-2 rounded">
                        <a
                            href={`/${locale}/${item.link}/`}
                            className={`uppercase font-medium text-blue-orchid border-b-2 ${
                                normalizePath(currentPath) ===
                                normalizePath(item.link)
                                    ? "border-blue-orchid"
                                    : "border-transparent hover:border-blue-orchid"
                            }`}
                            style={{
                                transition: "border 300ms ease-out",
                            }}
                            id={item.buttonId}>
                            {
                                item.localizations.find(
                                    (i) => i.locale === locale
                                )?.text
                            }
                        </a>
                    </div>
                ))} */}
            </div>
            <div className="basis-1/5 h-full flex flex-row items-center justify-center">
                <CldImage
                    width={data.logo.media.width}
                    height={data.logo.media.height}
                    src={data.logo.media.public_id}
                    alt={
                        data.logo.localizations.find((i) => i.locale === locale)
                            ?.altText || ""
                    }
                    sizes="(min-width: 768px) 48vw, (min-width: 1280px) 78vw, 100vw"
                    className="h-full w-auto"
                />
            </div>
            <div className="basis-2/5 flex flex-row items-center justify-end gap-x-6">
                <motion.div
                    id="menu"
                    initial="visible"
                    animate={controls}
                    variants={menuVariants}
                    transition={{ type: "tween", duration: 0.3 }}
                    className="flex flex-row rounded-full border border-blue-orchid bg-transparent h-fit w-fit">
                    <a href={`/en/${normalizePath(currentPath)}`} id="english">
                        <button
                            className={`${
                                currentPath.split("/")[1] === "en"
                                    ? "bg-blue-orchid border-blue-orchid text-white"
                                    : "bg-transparent border-transparent text-blue-orchid"
                            } text-xs capitalize py-1 px-2 rounded-full border`}>
                            English
                        </button>
                    </a>
                    <a href={`/zh/${normalizePath(currentPath)}`} id="chinese">
                        <button
                            className={`${
                                currentPath.split("/")[1] === "zh"
                                    ? "bg-blue-orchid border-blue-orchid text-white"
                                    : "bg-transparent border-transparent text-blue-orchid"
                            } text-xs capitalize py-1 px-2 rounded-full border`}>
                            中文
                        </button>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

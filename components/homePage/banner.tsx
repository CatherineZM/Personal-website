"use client";

import { CldImage } from "next-cloudinary";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

interface BannerProps {
    data: {
        greet: string;
        localizations: Array<{
            locale: string;
            name: string;
            role: string;
            identity: Array<string>;
        }>
        socialMedia: Array<{
            localizations: Array<{
                locale: string;
                text: string;
            }>
            link: string;
            buttonId?: string | null;
        }>;
        icon: {
            media: any;
            localizations: Array<{
                locale: string;
                altText: string;
            }>
        }
    };
    locale: string;
}

export default function Banner(props: BannerProps): JSX.Element {
    const { data, locale } = props;
    const { greet, localizations, socialMedia, icon } = data;

    const displayIdentity = (list: Array<string> | undefined): any =>{
        if (!list) {
            return;
        }
        const [index, setIndex] = useState(0);
        useEffect(() => {
            const id = setInterval(() => {
                setIndex((state) => {
                    if (state >= list.length - 1) return 0;
                    return state + 1;
                });
            }, 2000);
            return () => clearInterval(id);
        }, []);

        return (
            <div style={{ position: "relative" }} className='basis-1/3 w-fit text-blue-orchid font-bold'>
                <AnimatePresence>
                    <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ ease: "easeInOut" }}
                        style={{ position: "absolute" }}
                        className="text-nowrap w-fit px-1.5 capitalize">
                        {list[index]}
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    const renderSocialBtn = (name: string | null | undefined): any => {
        if(!name){return}
        switch(name){
            case 'Github': {
                return <FaGithub 
                            className='h-full w-auto hover:fill-blue-orchid' 
                            style={{
                                transition:
                                    "fill 300ms ease-in-out",
                            }}/>
            } case 'LinkedIn': {
                return (
                    <FaLinkedin
                        className="h-full w-auto hover:fill-blue-orchid"
                        style={{
                            transition: "fill 300ms ease-in-out",
                        }}
                    />
                );
            } case 'Instagram': {
                return (
                    <FaInstagram
                        className="h-full w-auto hover:fill-blue-orchid"
                        style={{
                            transition: "fill 300ms ease-in-out",
                        }}
                    />
                );
            } case 'Email': {
                return (
                    <FaEnvelope
                        className="h-full w-auto hover:fill-blue-orchid"
                        style={{
                            transition: "fill 300ms ease-in-out",
                        }}
                    />
                );
            }
        }
    };

    return (
        <div className="banner h-screen flex flex-row justify-evenly px-mobileX md:px-tabletX 2xl:px-desktopX 3xl:px-plusDesktopX">
            <div className="lg:basis-2/3 h-full w-fit flex flex-col items-center lg:items-start justify-center gap-y-2">
                <h1 className="font-rubik text-8xl py-2">{greet}</h1>
                <h2 className="font-medium text-6xl">
                    {localizations.find((i) => i.locale === locale)?.name}
                </h2>
                <h4 className="font-medium text-3xl text-center lg:text-start">
                    {locale === "en" ? (
                        <>
                            My new portfolio is being developed right now~
                            <br />
                            Hang tight and you will see it VERY soon!
                        </>
                    ) : (
                        <>
                            新网站正在开发中～ 请稍安勿躁！
                        </>
                    )}
                </h4>
                <div className="flex flex-row text-2xl capitalize w-full justify-center lg:justify-start">
                    {localizations.find((i) => i.locale === locale)?.role}{" "}
                    {displayIdentity(
                        localizations.find((i) => i.locale === locale)?.identity
                    )}
                </div>

                <div className="flex flex-row gap-x-16 py-4">
                    {socialMedia.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            id={
                                item.buttonId
                                    ? item.buttonId
                                    : "social-" + index
                            }
                            className="h-8">
                            {renderSocialBtn(
                                item.localizations.find(
                                    (i) => i.locale === locale
                                )?.text
                            )}
                        </a>
                    ))}
                </div>
            </div>
            <div className="hidden lg:basis-1/3 h-full lg:flex flex-col justify-center items-end">
                <CldImage
                    height={icon.media.width}
                    width={icon.media.width}
                    crop="fill"
                    src={icon.media.public_id}
                    alt={
                        icon.localizations.find((i) => i.locale === locale)
                            ?.altText || ""
                    }
                    sizes="(min-width: 768px) 48vw, (min-width: 1280px) 18vw, 100vw"
                    className="w-96 h-96"
                />
            </div>
        </div>
    );
}
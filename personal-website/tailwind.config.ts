import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./modules/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            xs: "480px", // mobile
            sm: "640px",
            md: "768px", // tablet
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px", // desktop
            "3xl": "1920px", // +++ desktop
        },
        extend: {

            colors: {
                blue: "#302EE7",
                charcoal: "#151515",
                egg: "#F9F4E6",
                nebula: "#C7D9E5",
                "blush-pink": "#FCA1F5",
            },
            spacing: {
                mobileX: "16px",
                tabletX: "80px",
                desktopX: "120px",
                plusDesktopX: "240px",
                "desktop-plusX": "240px",
            },
        },
    },
    plugins: [],
};
export default config;

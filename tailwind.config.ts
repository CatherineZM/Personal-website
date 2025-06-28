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
            fontFamily: {
                nunito: ["var(--font-nunito)", "sans-serif"],
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(10px)" },
                    "50%": { transform: "translateY(20px)" },
                },
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                floatSlow: "float 12s ease-in-out infinite",
                floatFast: "float 4s ease-in-out infinite",
            },
            colors: {
                "blue-orchid": "#302EE7",
                charcoal: "#151515",
                "floral-white": "#FAFAF0",
                "pastel-blue": "#99B7F5",
                "blush-pink": "#FCA1F5",
            },
            spacing: {
                mobileX: "16px",
                tabletX: "80px",
                desktopX: "120px",
                plusDesktopX: "240px",
                "desktop-plusX": "240px",
                navbar: "120px",
            },
        },
    },
    plugins: [],
};
export default config;

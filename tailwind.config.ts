import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    prefix: "",
    theme: {
        container: {},
        extend: {
            screens: {
                sm576: "576px",
                md776: "776px",
                sm480: "480px",
                xs: "400px",
            },
            fontSize: {
                "h1-clamp": "clamp(2.2rem, 8vw, 3.55rem)",
            },
            fontFamily: {
                dmsans: "DM Sans, sans-serif",
                angelica: "white-angelica, sans-serif",
            },
        },
        darkMode: "class",
        plugins: [nextui()],
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;

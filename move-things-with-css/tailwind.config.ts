import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                cvalish_cspin: "cvalish 2s infinite, cspin 2s infinite",
            },
            keyframes: {
                cspin: {
                    "100%": {transform: "rotate(360deg)"},
                },
                cvalish: {
                    "50%": {opacity: "0"},
                },
                backdrop: {
                    "100%": {
                        backgroundPositionX: "-100vw",
                    },
                },
                flyIn: {
                    "0%": {
                        transform: "translate(-250%,250%)",
                        scale: "0",
                    },
                },
                advance: {
                    "50%": {
                        transform: "translate(50%,50%)",
                        rotate: "-10deg",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;

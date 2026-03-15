/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: { "2xl": "1400px" },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                violet: {
                    50: "#f5f3ff",
                    100: "#ede9fe",
                    200: "#ddd6fe",
                    300: "#c4b5fd",
                    400: "#a78bfa",
                    500: "#8b5cf6",
                    600: "#7c3aed",
                    700: "#6d28d9",
                    800: "#5b21b6",
                    900: "#4c1d95",
                    950: "#2e1065",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
                "2xl": "1rem",
                "3xl": "1.5rem",
            },
            fontFamily: {
                sans: ["var(--font-sans)", "system-ui", "sans-serif"],
                display: ["var(--font-display)", "system-ui", "sans-serif"],
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "slide-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                shimmer: {
                    "100%": { transform: "translateX(100%)" },
                },
                "border-glow": {
                    "0%, 100%": { borderColor: "rgba(139,92,246,0.3)" },
                    "50%": { borderColor: "rgba(139,92,246,0.8)" },
                },
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-out",
                "slide-up": "slide-up 0.6s ease-out",
                shimmer: "shimmer 2s infinite",
                "border-glow": "border-glow 2s ease-in-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}

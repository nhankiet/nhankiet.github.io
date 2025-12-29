import animate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,vue}',
        './components/**/*.{js,ts,jsx,tsx,vue}',
        './app.vue',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
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
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                "fade-in-up": {
                    "0%": { opacity: 0, transform: "translateY(20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
                "fade-in": {
                    "0%": { opacity: 0, transform: "scale(0.95)" },
                    "100%": { opacity: 1, transform: "scale(1)" },
                },
                "wobble": {
                    "0%, 100%": { transform: "rotate(-1deg) scale(1)" },
                    "50%": { transform: "rotate(1deg) scale(1.01)" },
                },
                "shimmer": {
                    "0%": { backgroundPosition: "200% center" },
                    "100%": { backgroundPosition: "-200% center" },
                },
                "pulse-gentle": {
                    "0%, 100%": { opacity: 1, transform: "scale(1)" },
                    "50%": { opacity: 0.85, transform: "scale(0.98)" },
                },
                "google-gas": {
                    "0%, 100%": {
                        boxShadow: "0 0 30px 5px rgba(34, 197, 94, 0.2), 0 0 50px 10px rgba(16, 185, 129, 0.1)",
                        filter: "brightness(1) contrast(1.1)",
                        transform: "scale(1) translateY(0)"
                    },
                    "33%": {
                        boxShadow: "8px -8px 45px 12px rgba(16, 185, 129, 0.35), -5px 10px 80px 20px rgba(34, 197, 94, 0.2)",
                        filter: "brightness(1.1) contrast(1.15)",
                        transform: "scale(1.02) translateY(-1px)"
                    },
                    "66%": {
                        boxShadow: "-12px 8px 55px 15px rgba(34, 197, 94, 0.35), 12px -5px 90px 25px rgba(16, 185, 129, 0.15)",
                        filter: "brightness(1.05) contrast(1.1)",
                        transform: "scale(1.01) translateY(0.5px)"
                    }
                },
                "gas-swirl": {
                    "0%": { transform: "translate(-50%, -50%) rotate(0deg) scale(1)" },
                    "50%": { transform: "translate(-50%, -50%) rotate(180deg) scale(1.5)" },
                    "100%": { transform: "translate(-50%, -50%) rotate(360deg) scale(1)" }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in-up": "fade-in-up 0.8s ease-out forwards",
                "fade-in": "fade-in 1s ease-out forwards",
                "wobble": "wobble 3s ease-in-out infinite",
                "shimmer": "shimmer 3s linear infinite",
                "pulse-gentle": "pulse-gentle 2s ease-in-out infinite",
                "google-gas": "google-gas 8s ease-in-out infinite",
                "gas-swirl": "gas-swirl 10s linear infinite",
            },
        },
    },
    plugins: [animate],
}

/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
	content: [
		"./index.html",
		"./src/**/*.{js,jsx}",
		"node_modules/preline/dist/*.js",
	],
  theme: {
    screens: {
      lg: "992px",
      md: "768px",
      sm: "480px",
      xl: "1200px",
      xxl: "1400px",
      xxxl: "1800px",
    },
    borderRadius: {
      none: "0",
      sm: "0.25rem",
      md: "0.5rem",
      full: "9999px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        gray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        primary: "rgb(var(--color-primary))",
        primaryrgb: "rgb(var(--color-primary-rgb))",
        secondary: "rgb(var(--color-secondary))",
        success: "rgb(var(--color-success))",
        info: "rgb(var(--color-info))",
        warning: "rgb(var(--color-warning))",
        danger: "rgb(var(--color-danger))",

        defaultborder: "rgb(var(--default-border))",
        muted: "rgb(var(--muted))",
        bodybg: "rgb(var(--body-bg))",
        defaultcolor: "rgb(var(--default-text-color))",
        dark: "rgb(var(--dark-rgb))",

        menubg: "rgb(var(--menu-bg))",
        menuborder: "rgb(var(--menu-border-color))",
        menuprime: "rgb(var(--menu-prime-color))",

        headerbg: "rgb(var(--header-bg))",
        headerborder: "rgb(var(--header-border-color))",
        headerprime: "rgb(var(--header-prime-color))",

        bgdark: "rgb(var(--dark-bg))",
        bgdark2: "rgb(var(--dark-bg2))",

      },
      boxShadow: {
        sm: "0 1px 3px 0 rgba(15,23,42,0.07), 0 1px 2px 0 rgba(15,23,42,0.03)",
        md: "0 4px 6px -1px rgba(15,23,42,0.07), 0 2px 4px -1px rgba(15,23,42,0.03)",
        lg: "0 0.75rem 1.5rem rgba(15,23,42,.03)",
        xl: "0 20px 25px -5px rgba(15,23,42,0.07), 0 10px 10px -5px rgba(15,23,42,0.02)",
      },
      backgroundImage: {
        instagram:
          "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    animation: {
      projects: "particles 2s linear infinite",
      spin: "spin 1s linear infinite;",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite",
      bell:"ring 2s ease-in-out infinite",
    },
    keyframes: {
      particles: {
        "0%": {
          transform: " translateY(0) rotate(0)",
          opacity: 1,
        },
        "100%": {
          transform: "translateY(-90px) rotate(180deg)",
          opacity: " 0",
        },
      },
      spin: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
      ping: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: 0,
        },
      },
      pulse: {
        "0%, 100% ": {
          opacity: 1,
        },
        "50%": {
          opacity: 0.5,
        },
      },
      bounce: {
        "0%, 100% ": {
          transform: "translateY(-25%)",
          " animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateY(0)",
          "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
        },
      },
      ring: {
        "0%": { transform: "rotateZ(0)" },
      "1%": { transform: "rotateZ(30deg)" },
      "3%": { transform: "rotateZ(-28deg)" },
      "5%": { transform: "rotateZ(34deg)" },
      "7%": { transform: "rotateZ(-32deg)" },
      "9%": { transform: "rotateZ(30deg)" },
      "11%": { transform: "rotateZ(-28deg)" },
      "13%": { transform: "rotateZ(26deg)" },
      "15%": { transform: "rotateZ(-24deg)" },
      "17%": { transform: "rotateZ(22deg)" },
      "19%": { transform: "rotateZ(-20deg)" },
      "21%": { transform: "rotateZ(18deg)" },
      "23%": { transform: "rotateZ(-16deg)" },
      "25%": { transform: "rotateZ(14deg)" },
      "27%": { transform: "rotateZ(-12deg)" },
      "29%": { transform: "rotateZ(10deg)" },
      "31%": { transform: "rotateZ(-8deg)" },
      "33%": { transform: "rotateZ(6deg)" },
      "35%": { transform: "rotateZ(-4deg)" },
      "37%": { transform: "rotateZ(2deg)" },
      "39%": { transform: "rotateZ(-1deg)" },
      "41%": { transform: "rotateZ(1deg)" },
      "43%": { transform: "rotateZ(0)" },
      "100%":{ transform: "rotateZ(0)" },
      }
    },
  },
  plugins: [
    require("tailwindcss"),
    require("@tailwindcss/forms"),
    require("tailwind-clip-path"),
    require("preline/plugin"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".dirrtl": {
          direction: "ltr",
        },
        ".dir-rtl": {
          direction: "rtl",
        },
        ".dir-ltr": {
          direction: "ltr",
        },
      });
    }),
  ],
};

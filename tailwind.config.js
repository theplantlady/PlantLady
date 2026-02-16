/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      screens: {
        "wd": "2560px",
        "dt": "1920px",
        "lp": "1536px",
        "tl": "1280px",
        "tab": "1024px",
        "ts": "768px",
        "phx": "500px",
        "php": "425px",
        "ph": "375px",
        // "5xl": "1800px",
        // "4xl": "1700px",
        // "3xl": "1600px",
        // "2xl": "1400px",
        // "xl": "1200px",
        // "lg": "992px",
        // "md": "960px",
        // "2sm": "768px",
        // "sm": "576px",
        // "xm": "340px"
      },
      spacing: {
        "2.5": "10px",
        "7.5": "30px",
        "12.5": "50px",
        "15": "60px",
        "17.5": "70px",
        "25": "100px",
        "30": "120px",
        "1/8": "12.5%",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%"
      },
      lineHeight: {
        "110": "110%",
        "120": "120%",
        "135": "135%",
        "145": "145%",
        "155": "155%",
        "165": "165%",
        "160": "160%",
        "175": "175%",
        "185": "185%",
        "200": "200%"
      },
      backgroundImage: {
        "overlay-liner": "linear-gradient(0deg, rgba(210, 224, 217, 0.55) 0%, rgba(210, 224, 217, 0.55) 100%)",
        "bottom-liner": "linear-gradient(180deg, rgba(0,0,0, .01) 14.06%, rgba(0,0,0, .7) 70.2%)",
        "white-liner": "linear-gradient(180deg, rgba(217, 217, 217, 0.00) -21.43%, #FFF 153.57%)",
        "underline-liner": "background-image: linear-gradient(180deg, transparent 65%, #fcf113 0)",
      },
      maxHeight:{
        "1/3": "12.5%"
      },
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        gray: "var(--rgba-color)",
        primary_rgba: "var(--primary-rgba)",
        secondary_rgba: "var(--secondary-rgba)",
        overlay: "var(--overlay)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
        },
        plant: {
          white: "#FAFAF9",
          offwhite: "#E4DBD6",
          tan: "#C6A061",
          rust: "#935433",
          army: "#2a38df",
          'leaf-light': "#79A87C",
          leaf: "#394E51",
          'leaf-dark': "#0F2322",
          copper: "#A76143",
          blood: "#581910",
          pink: "#ff035e"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "slideDown": {
          from: { transform: " translateY(-100%)" },
          to: { transform: "translateY(0)" }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "dash": {
          to: { "stroke-dashoffset": 0 }
        },
        "filling": {
          "0%": {
            "fill": "currentColor",
            "fill-opacity": "0"
          },
          "90%": {
            "fill": "currentColor",
            "fill-opacity": "0"
          },

          "100%": {
            "fill": "currentColor",
            "fill-opacity": "0"
          }
        }
      },
      animation: {
        "slideDown": "slideDown 0.35s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "text-line-animation": "dash 4s linear forwards, filling 4s ease-in forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
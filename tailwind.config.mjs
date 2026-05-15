// @type {import('tailwindcss').Config}
export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#dbfcff",
        background: "#131314",
        surface: "#131314",
        secondary: "#d0bcff",
        tertiary: "#e7f9ff",
        error: "#ffb4ab",

        "primary-container": "#00f0ff",
        "secondary-container": "#571bc1",
        "tertiary-container": "#8be7ff",

        "on-primary": "#00363a",
        "on-surface": "#e5e2e3",

        // add remaining colors...
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },

      spacing: {
        "margin-desktop": "64px",
        "margin-mobile": "16px",
        unit: "8px",
        gutter: "24px",
      },

      fontFamily: {
        geist: ["Geist", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      fontSize: {
        "headline-lg": [
          "48px",
          {
            lineHeight: "1.2",
            fontWeight: "600",
          },
        ],

        "body-md": [
          "16px",
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],
      },
    },
  },

  plugins: [],
};

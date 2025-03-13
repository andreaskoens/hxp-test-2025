/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontSize: {
      h1: [
        "2.6875em",
        {
          lineHeight: "1.2",
          fontWeight: "700",
          "@screen md": {
            fontSize: "3.75em",
          },
        },
      ],
      h2: [
        "2.25em",
        {
          lineHeight: "1.3",
          fontWeight: "700",
          "@screen md": {
            fontSize: "2.5em",
          },
        },
      ],
      h3: [
        "1.625em",
        {
          lineHeight: "1.4",
          fontWeight: "600",
          "@screen md": {
            fontSize: "1.875em",
          },
        },
      ],
      h4: [
        "1.125em",
        {
          lineHeight: "1.5",
          fontWeight: "600",
          "@screen md": {
            fontSize: "1.25em",
          },
        },
      ],
      h5: [
        "1em",
        {
          lineHeight: "1.5",
          fontWeight: "500",
          "@screen md": {
            fontSize: "1.125em",
          },
        },
      ],
    },
    extend: {
      fontFamily: {
        sans: ["var(--space-grotesk)", "sans-serif"],
      },
      colors: {
        primary: "var(--primary)",
        dark: "var(--dark)",
        lightGray: "var(--lightGray)",
      },
      
    },
  },
  plugins: []
} 
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    "#root": {
      minH: "100vh",
    },
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        minH: "100%",
      },
      body: {
        bg: "background",
        color: "white",
      },
    },
  },

  colors: {
    background: "#0d0c22",
    navy: "#0B1D51",
    card: "#1A2347",
    blue: "#1E90FF",
    purple: "#8B5CF6",
    pink: "#FF4D6D",
    white: "#FFFFFF",
    muted: "#A9B3C9",

    gradients: {
      primary: "linear-gradient(90deg, #1E90FF 0%, #8B5CF6 50%, #FF4D6D 100%)",
    },
  },

  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
  },

  radii: {
    xl: "18px",
    "2xl": "24px",
  },

  shadows: {
    neonBlue: "0 0 25px rgba(30,144,255,0.45)",
    neonPink: "0 0 35px rgba(255,77,109,0.35)",
    neon: "0 0 30px rgba(30,144,255,0.35), 0 0 60px rgba(255,77,109,0.2)",
  },
});

import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    fontFamily: {
      "inter": ["Inter"],
      "manuka": ["ManukaCondensed"],
    },
    colors: {
      "black": {
        "50": "#e7e7e7",
        "100": "#cfcfcf",
        "200": "#a0a0a0",
        "300": "#707070",
        "400": "#414141",
        "500": "#111111",
        "600": "#0e0e0e",
        "700": "#0a0a0a",
        "800": "#070707",
        "900": "#030303",
      },
      "white": {
        "50": "#ffffff",
        "100": "#fefefe",
        "200": "#fdfdfd",
        "300": "#fcfcfc",
        "400": "#fbfbfb",
        "500": "#fafafa",
        "600": "#c8c8c8",
        "700": "#969696",
        "800": "#646464",
        "900": "#323232",
      },
      "dark": {
        "50": "#e7e7e7",
        "100": "#cecfd0",
        "200": "#9d9fa1",
        "300": "#6c6e71",
        "400": "#3b3e42",
        "500": "#0a0e13",
        "600": "#080b0f",
        "700": "#06080b",
        "800": "#040608",
        "900": "#020304",
      },
      "blue": {
        "50": "#e7f2ff",
        "100": "#cfe5fe",
        "200": "#9fcbfd",
        "300": "#6fb0fd",
        "400": "#3f96fc",
        "500": "#0f7cfb",
        "600": "#0c63c9",
        "700": "#094a97",
        "800": "#063264",
        "900": "#031932",
      },
      "slate": "#0f1519",
    },
  },
} satisfies Config;

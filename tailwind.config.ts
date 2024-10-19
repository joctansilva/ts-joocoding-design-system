import type { Config } from "tailwindcss";
import { AtlTailwindPlugin } from "@atlantico/tailwind";

const config: Config = {
  content: ["./packages/react/src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [AtlTailwindPlugin],
};
export default config;

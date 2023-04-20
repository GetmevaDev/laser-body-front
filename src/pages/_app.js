import { DM_Serif_Display as DM, Jost } from "@next/font/google";

import "swiper/css";
import "swiper/css/pagination";

import "boxicons/css/boxicons.min.css";
import "@/styles/globals.scss";

export const jost = Jost({
  weight: ["100", "300", "500", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-jost",
});

export const dm = DM({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-dm",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${jost.variable} ${dm.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

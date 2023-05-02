/* eslint-disable jsx-a11y/iframe-has-title */
import Script from "next/script";

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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-45MF26K71Y"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-45MF26K71Y');
        `}
      </Script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
           (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-NKFBQGB");
        `}
      </Script>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NKFBQGB"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <Component {...pageProps} />
    </main>
  );
}

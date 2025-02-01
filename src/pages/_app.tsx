import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      {" "}
      <Component {...pageProps} />
    </main>
  );
}

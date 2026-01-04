import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const lang = (pageProps?.lang === "en" ? "en" : "tr") as "tr" | "en";

  return (
    <div className="min-h-screen bg-[#0d0c17] text-white overflow-x-hidden">
      <Header lang={lang} />
      <main className="w-full">
        <Component {...pageProps} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

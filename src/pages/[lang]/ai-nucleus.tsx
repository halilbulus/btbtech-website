import type { GetStaticPaths, GetStaticProps } from "next";
import AINucleusSection from "@/components/sections/AINucleusSection";

type Lang = "tr" | "en";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    { params: { lang: "tr" } },
    { params: { lang: "en" } },
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = (params?.lang === "en" ? "en" : "tr") as Lang;
  return { props: { lang } };
};

export default function AINucleusPage({ lang }: { lang: Lang }) {
  return (
    <div className="bg-[#0b0d12] text-slate-100">
      <AINucleusSection lang={lang} />
    </div>
  );
}

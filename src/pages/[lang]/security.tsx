import type { GetStaticPaths, GetStaticProps } from "next";
import { tr } from "@/content/tr";
import { en } from "@/content/en";

type Lang = "tr" | "en";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { lang: "tr" } }, { params: { lang: "en" } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = (params?.lang === "en" ? "en" : "tr") as Lang;
  return { props: { lang } };
};

export default function Security({ lang }: { lang: Lang }) {
  const c = lang === "en" ? en : tr;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">{c.security.title}</h1>
      <ul className="list-disc space-y-2 pl-5 text-slate-700">
        {c.security.bullets.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

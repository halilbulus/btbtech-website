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

export default function Contact({ lang }: { lang: Lang }) {
  const c = lang === "en" ? en : tr;

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{c.contact.title}</h1>
        <p className="max-w-2xl text-slate-700">{c.contact.subtitle}</p>
      </header>

      <section className="rounded-2xl border border-slate-200 p-6">
        <div className="space-y-2">
          <div className="text-sm text-slate-600">{c.contact.emailLabel}</div>
          <a
            className="text-sm font-medium text-slate-900 underline underline-offset-4"
            href={`mailto:${c.contact.email}`}
          >
            {c.contact.email}
          </a>
        </div>
      </section>
    </div>
  );
}

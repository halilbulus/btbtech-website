import type { GetStaticPaths, GetStaticProps } from "next";
import HeroDark from "@/components/sections/HeroDark";
import { tr } from "@/content/tr";
import { en } from "@/content/en";

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
  return {
    props: { lang },
  };
};

export default function Home({ lang }: { lang: Lang }) {
  const c = lang === "en" ? en : tr;

  return (
    <div className="bg-[#0b0d12] text-slate-100">

      {/* HERO SECTION */}
      <HeroDark
        title={c.site.title}
        subtitle={c.home.hero.subtitle}
        primaryCta={c.home.hero.primaryCta}
        secondaryCta={c.home.hero.secondaryCta}
        lang={lang}
      />

      {/* VALUE PROPOSITION */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-8 sm:grid-cols-3">
          {c.home.valueProps.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-slate-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AI NUCLEUS SHOWCASE */}
      <section className="mx-auto max-w-6xl px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {c.product.fullName}
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            {c.product.description}
          </p>
        </div>
      </section>

      {/* SECURITY & DEPLOYMENT */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            {c.security.title}
          </h2>
          <ul className="mt-6 space-y-2 text-slate-300">
            {c.security.bullets.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
}

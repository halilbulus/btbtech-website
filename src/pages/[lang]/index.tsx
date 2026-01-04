import type { GetStaticPaths, GetStaticProps } from "next";
import HeroDark from "@/components/sections/HeroDark";
import AINucleusSection from "@/components/sections/AINucleusSection";
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

export default function Home({ lang }: { lang: Lang }) {
  const c = lang === "en" ? en : tr;

  return (
    <div className="bg-[#0b0c14] text-slate-100">
      {/* HERO */}
      <HeroDark
        title={c.site.title}
        subtitle={c.home.hero.subtitle}
        primaryCta={c.home.hero.primaryCta}
        secondaryCta={c.home.hero.secondaryCta}
        lang={lang}
      />

      

      {/* AI NUCLEUS — same page, scroll altında */}
      <div className="relative z-20 -mt-0">
  <AINucleusSection lang={lang} />
</div>


      {/* SECURITY & DEPLOYMENT + BACKGROUND VISUAL (overlap) */}
<section className="relative overflow-hidden">
  {/* background image layer */}
  <div className="absolute inset-0 z-0">
    <img
      src="/visuals/hero-bg2.png"
      alt=""
      className="h-full w-full object-cover"
      style={{
        objectPosition: "center 100%", // bottom
		//transform: "scale(1) translateY(70%)",
      transformOrigin: "bottom",
      }}
    />
	

    {/* gradient overlay (do NOT over-darken) */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0d0c17]/50 via-[#0d0c17]/85 to-[#0d0c17]" />
  </div>

  {/* content layer */}
  <div className="relative z-10 mx-auto max-w-6xl px-6 pt-0 pb-10">

    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-100">
        {c.security.title}
      </h2>

      <ul className="mt-6 space-y-3 text-slate-200">
        {c.security.bullets.map((item: string) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  </div>

  {/* this guarantees the visible "bottom 30%" area */}
  <div className="relative z-55 h-[1vh]" />
</section>


    </div>
  );
}

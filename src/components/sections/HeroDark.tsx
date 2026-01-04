import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  lang: "tr" | "en";
};

export default function HeroDark({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  lang,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0b0c14] text-slate-100">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 
          Görseli gerçekten sağa kaydırmak için:
          - Görseli biraz büyüt (w-[115%])
          - translate ile sağa it (translate-x-[6%])
          Not: Oranları aşağıdan ince ayarlayabilirsin.
        */}
        <img
          src="/visuals/hero-bg.png"
          alt=""
          className="
            absolute top-0 left-0
            h-full w-[135%]
            object-cover
            translate-x-[15%]
          "
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c14]/50 via-[#0b0c14]/80 to-[#0b0c14]" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[78vh] items-center px-[clamp(12px,2vw,24px)]">
        <div className="max-w-3xl">
          <h1 className="font-semibold tracking-tight text-[clamp(28px,4vw,56px)] leading-[1.1]">
            {title}
          </h1>

          <p className="mt-5 max-w-[65ch] text-[clamp(14px,1.3vw,18px)] leading-relaxed text-slate-200">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={lang === "tr" ? "/tr#ai-nucleus" : "/en#ai-nucleus"}
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              {primaryCta}
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

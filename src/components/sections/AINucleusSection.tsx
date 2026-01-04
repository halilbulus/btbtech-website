import Image from "next/image";
import VisualGridWithText from "@/components/sections/VisualGridWithText";
import { tr } from "@/content/tr";
import { en } from "@/content/en";

type Lang = "tr" | "en";

export default function AINucleusSection({ lang }: { lang: Lang }) {
  const c = lang === "en" ? en : tr;

  return (
    <section id="ai-nucleus" className="scroll-mt-28">
      {/* Title + Description */}
      <section className="w-full px-[clamp(16px,4vw,56px)] pt-0 pb-12 text-center">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
            {c.product.fullName}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            {c.product.description}
          </p>
        </div>
      </section>

      {/* Feed Diagram */}
      <section className="w-full px-[clamp(16px,4vw,56px)] pb-14">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <Image
              src="/visuals/ai-nucleus/feed-diagram.png"
              alt="AI Nucleus – Feeding diagram"
              width={1920}
              height={1080}
              priority
              className="h-auto w-full"
            />
          </div>

          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-400">
            {lang === "tr"
              ? "Görsel temsili bir besleme diyagramıdır; veri kaynakları ve akış yüksek seviyede gösterilir."
              : "This is a conceptual ingestion diagram; data sources and flow are shown at a high level."}
          </p>
        </div>
      </section>

      {/* AI Nucleus Capabilities */}
      <section className="w-full py-6">
        <VisualGridWithText title="AI Nucleus" items={c.aiNucleusFeatures} />
      </section>

      {/* How it works */}
      <section className="w-full pt-0 pb-6">
        <VisualGridWithText title={c.product.howItWorksTitle} items={c.product.howItWorks} />
      </section>
    </section>
  );
}

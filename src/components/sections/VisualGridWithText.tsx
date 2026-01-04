import Image from "next/image";

type Item = {
  src?: string;
  title: string;
  description?: string;
  desc?: string;
};

export default function VisualGridWithText({
  title,
  items,
}: {
  title?: string;
  items?: Item[];
}) {
  const safeItems = Array.isArray(items) ? items : [];

  return (
    // 🔥 ARTIK GERÇEKTEN GENİŞ
    <section className="w-full px-[clamp(8px,2vw,24px)] pt-4 pb-24">
      {/* ❌ max-w YOK */}
      <div className="w-full">
        {title && (
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-slate-100">
            {title}
          </h2>
        )}

        {/* 4 KOLON KORUNUYOR */}
        <div className="grid gap-[clamp(20px,2.5vw,32px)] sm:grid-cols-2 lg:grid-cols-4">
          {safeItems.map((item) => {
            const text = item.description ?? item.desc ?? "";

            return (
              <div
                key={item.title}
                className="
                  group overflow-hidden rounded-2xl
                  bg-white/[0.025]
                  ring-1 ring-white/[0.06]
                  shadow-[0_18px_70px_-35px_rgba(0,0,0,1)]
                  transition
                  hover:bg-white/[0.045]
                  hover:ring-white/[0.14]
                "
              >
                {/* 🔥 GÖRSEL: ARTIK SINIRDA DEĞİL */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  {item.src ? (
                    <>
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="
                          object-cover
                          transition-transform duration-500
                          group-hover:scale-[1.06]
                        "
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1024px) 50vw,
                          25vw
                        "
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/35" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/35 via-purple-500/25 to-black/55" />
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-[clamp(18px,2vw,26px)]">
                  <h3 className="text-base font-semibold text-slate-100">
                    {item.title}
                  </h3>

                  {text && (
                    <p className="mt-3 text-sm leading-relaxed text-slate-300/90">
                      {text}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

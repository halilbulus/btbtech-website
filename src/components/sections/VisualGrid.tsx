import Image from "next/image";

type Item = {
  title: string;
  desc?: string;
  src?: string;
};

export default function VisualGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
      {items.map((item) => (
        <div
          key={item.title}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
        >
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            {item.src ? (
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover opacity-95 transition group-hover:opacity-100"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-black/40" />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30" />
          </div>

          <div className="p-5">
            <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
            {item.desc ? (
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

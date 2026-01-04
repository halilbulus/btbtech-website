import Link from "next/link";

export default function Footer({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const base = `/${lang}`;

  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#0b0c14]"
    >
      {/* ❌ max-w yok | ✅ header ile aynı gutter */}
      <div
        className="w-full py-10"
        style={{
          paddingLeft: "var(--page-gutter)",
          paddingRight: "var(--page-gutter)",
        }}
      >
        <div className="grid gap-8 sm:grid-cols-2">
          {/* CONTACT */}
          <div className="space-y-3">
            <div className="text-base font-semibold text-white">
              Contact
            </div>

            <div className="text-sm text-slate-300">
              <div className="opacity-80">E-posta</div>
              <a
                className="mt-1 inline-block font-medium text-white/90 underline underline-offset-4 hover:opacity-90"
                href="mailto:info@btbtech.io"
              >
                info@btbtech.io
              </a>
            </div>

            <div className="text-sm text-slate-300">
              <div className="opacity-80">Telefon</div>
              <a
                className="mt-1 inline-block font-medium text-white/90 underline underline-offset-4 hover:opacity-90"
                href="tel:+9053148000595"
              >
                +90 531 480 05 95
              </a>
            </div>
          </div>

          {/* LEGAL */}
          <div className="sm:text-right">
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} BTB Tech. All rights reserved.
            </div>

            <div className="mt-4 flex gap-4 sm:justify-end text-sm text-slate-300">
              <Link href={`${base}/privacy`} className="hover:text-white">
                Privacy
              </Link>
              <Link href={`${base}/terms`} className="hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* fixed header offset için */}
        <div className="h-6" />
      </div>
    </footer>
  );
}

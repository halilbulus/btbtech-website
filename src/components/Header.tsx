import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function swapLang(asPath: string, to: "tr" | "en") {
  // asPath örnekleri:
  // /tr
  // /tr#ai-nucleus
  // /tr/ai-nucleus
  // /tr/ai-nucleus#contact
  const [pathPart, hashPart] = asPath.split("#");
  const fixedPath = pathPart.replace(/^\/(tr|en)(?=\/|$)/, `/${to}`);
  return hashPart ? `${fixedPath}#${hashPart}` : fixedPath;
}

export default function Header({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const router = useRouter();
  const base = `/${lang}`;

  // Mevcut sayfayı (path+hash) koruyarak dil değişimi için
  const asPath = router.asPath || base;
  const trHref = swapLang(asPath, "tr");
  const enHref = swapLang(asPath, "en");

  // Contact: aynı sayfada en alta smooth scroll
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // 1) URL hash'i güncelle (geri/ileri tuşları tutarlı olsun)
    // shallow: sayfa reload etmeden hash günceller
    router.push(`${base}#contact`, undefined, { shallow: true });

    // 2) Scroll
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/25 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-[clamp(12px,2vw,28px)]">
        {/* LOGO */}
        <Link href={base} className="flex items-center gap-3">
          <div className="relative h-10 w-[140px] sm:h-11 sm:w-[160px]">
            <Image
              src="/logo2.png?v=2"
              alt="BTB Tech"
              fill
              priority
             // className="object-contain"
			  className="object-contain translate-x-[-24px]"
            />
          </div>

          <span
  className="
    hidden sm:inline
    text-lg lg:text-xl
    font-semibold
    tracking-[0.04em]
    opacity-85
    text-white
    relative
    left-[-30px]
  "
>
  Begin to Beyond Technology
</span>

        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-5 sm:gap-7 text-sm sm:text-base text-white">
          <a href={`${base}#ai-nucleus`} className="hover:opacity-85">
            AI Nucleus
          </a>

          {/* ✅ Contact artık sayfanın altına iner */}
           <a href={`${base}#contact`} className="hover:opacity-85">
            Contact
          </a>

          {/* ✅ Dil değişimi: mevcut path + hash korunur */}
          <div className="flex items-center rounded-full border border-white/20 bg-black/20 px-2 py-1">
            <Link
              href={trHref}
              className={`px-2 text-xs sm:text-sm font-semibold ${
                lang === "tr" ? "opacity-100" : "opacity-60 hover:opacity-85"
              }`}
            >
              TR
            </Link>
            <Link
              href={enHref}
              className={`px-2 text-xs sm:text-sm font-semibold ${
                lang === "en" ? "opacity-100" : "opacity-60 hover:opacity-85"
              }`}
            >
              EN
            </Link>
          </div>
        </nav>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </header>
  );
}

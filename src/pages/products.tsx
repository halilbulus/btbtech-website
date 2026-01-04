import Link from "next/link";

export default function Products() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Products</h1>
        <p className="max-w-2xl text-slate-700">
          BTB Tech develops productized software with a security-first mindset for both
          enterprise and consumer use cases.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold">AI Nucleus</h2>
          <p className="mt-2 text-sm text-slate-700">
            A document intelligence approach for enterprise workflows: controlled access,
            structured retrieval, and integration-friendly architecture.
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Request a demo
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold">Infeel</h2>
          <p className="mt-2 text-sm text-slate-700">
            A lightweight social experience for sharing daily mood and supporting friends
            through simple interactions.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Google Play (soon)
            </a>
            <Link
              href="/legal/privacy"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Legal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          BTB Tech — Enterprise-grade software for document-driven workflows.
        </h1>
        <p className="max-w-2xl text-lg text-slate-700">
          We build secure, scalable products focused on document intelligence, integration,
          and operational efficiency.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            View Products
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="font-semibold">Document Intelligence</h3>
          <p className="mt-2 text-sm text-slate-700">
            Structured access to corporate knowledge with search and controlled retrieval.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="font-semibold">Integration & Automation</h3>
          <p className="mt-2 text-sm text-slate-700">
            Practical approaches to connect enterprise systems and operational workflows.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="font-semibold">Security-first</h3>
          <p className="mt-2 text-sm text-slate-700">
            Access control and data handling are designed as core requirements.
          </p>
        </div>
      </section>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="max-w-2xl text-slate-700">
          For demos, partnerships, and product inquiries, reach out to us.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 p-6">
        <div className="space-y-2">
          <div className="text-sm text-slate-600">Email</div>
          <a
            className="text-sm font-medium text-slate-900 underline underline-offset-4"
            href="mailto:info@btbtech.io"
          >
            info@btbtech.io
          </a>
        </div>

        <div className="mt-6 text-sm text-slate-700">
          If you prefer, include a short note about your use case and expected timeline.
        </div>
      </section>
    </div>
  );
}

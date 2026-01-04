export default function Privacy() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="text-slate-700">
        This page will contain the privacy policy for btbtech.io and product-related
        disclosures where applicable.
      </p>

      <div className="rounded-2xl border border-slate-200 p-6 text-sm text-slate-700 space-y-3">
        <p>
          <span className="font-medium">Scope:</span> Website analytics (if enabled),
          contact inquiries, and service communications.
        </p>
        <p>
          <span className="font-medium">Data minimization:</span> We collect only what is
          necessary to provide and improve the service.
        </p>
        <p>
          <span className="font-medium">Updates:</span> This policy may be updated over
          time. The latest version will be published on this page.
        </p>
      </div>
    </div>
  );
}

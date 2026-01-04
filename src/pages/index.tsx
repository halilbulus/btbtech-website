// src/pages/index.tsx
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Statik export uyumlu: JS olmasa bile yönlendirir */}
        <meta httpEquiv="refresh" content="0; url=/tr" />
        <link rel="canonical" href="/tr" />
      </Head>

      {/* Çok kısa bir fallback (kullanıcı çok kısa görür) */}
      <main style={{ padding: 24, color: "#fff" }}>
        Yönlendiriliyor... Eğer otomatik yönlendirme olmazsa{" "}
        <a href="/tr" style={{ textDecoration: "underline" }}>
          buraya tıkla
        </a>
        .
      </main>
    </>
  );
}

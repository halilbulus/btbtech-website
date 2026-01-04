export const tr = {
  brand: {
    legalName: "Begin To Beyond Technology",
    brandName: "BTB Tech",
  },

  site: {
    // Dokümandaki title'ı, küçük dil düzeltmesiyle daha kurumsal hale getirdim.
    title: "BTB Tech – Kurumsal iş akışları için on-premise çalışan AI yazılım ürünleri",
    defaultLang: "tr",
  },

  nav: {
    home: "Ana Sayfa",
    product: "AI Nucleus",
    security: "Güvenlik",
    contact: "İletişim",
  },

  home: {
    hero: {
      h1: "BTB Tech",
      subtitle:
        "Yüksek gizlilik gereksinimleri olan kurumlar için; air-gap uyumlu, on-premise çalışabilen yapay zeka yazılım ürünleri geliştiriyoruz.",
      primaryCta: "AI Nucleus’u İncele",
      secondaryCta: "İletişime Geç",
    },

    valueProps: [
      {
        title: "On-Premise & Air-Gap Uyumlu",
        desc: "Kritik ortamlarda veri gizliliği ve operasyonel süreklilik için tasarlandı.",
      },
      {
        title: "Kurumsal Hafıza",
        desc: "Dağınık doküman, veri ve bilgi varlıklarını tek bir AI çekirdeği altında bütünler.",
      },
      {
        title: "Hızlı ve Güvenilir Erişim",
        desc: "Bağlamsal, güvenilir ve hızlı bilgiye erişimi hedefler.",
      },
    ],
  },

  product: {
    name: "AI Nucleus",
    fullName: "AI Nucleus – Akıllı Doküman Yönetim Sistemi",
    tagline: "Kurumsal hafızayı akıllı hale getiren AI destekli doküman zekası çekirdeği.",

    // Dokümandaki açıklamayı kurumsal bir akışa reorganize ettim.
    description:
      "AI Nucleus, kurumların farklı birimlerde dağınık olarak bulunan doküman, veri ve bilgi varlıklarını tek bir yapay zeka destekli çekirdek altında toplayarak kurumsal hafızayı akıllı hale getiren bir Ar-Ge projesidir. Analitik veri alma (ingestion) hattı, içerik tekilleştirme algoritmaları, hibrit LLM karar mekanizması ve yüksek gizlilik ortamlarında çalışabilen Air-Gap uyumlu yapay zeka işletim katmanı üzerine inşa edilmiştir.",

    dataSourcesTitle: "Kapsanan veri kaynakları (örnek)",
    dataSources: [
      "ERP",
      "CLM",
      "PLM",
      "E-posta",
      "Saha raporları",
      "Dosya sunucuları",
    ],

    howItWorksTitle: "Nasıl çalışır?",
    howItWorks: [
  {
    src: "/visuals/ai-nucleus/how-it-works-ingestion.png",
    title: "Ingestion & Normalizasyon",
    desc: "Heterojen kurumsal veriler normalize edilerek ortak bir katmana alınır.",
  },
  {
    src: "/visuals/ai-nucleus/normalization.png",
    title: "Tekilleştirme",
    desc: "İçerik tekilleştirme algoritmaları ile tekrarlar azaltılır, tutarlılık artırılır.",
  },
  {
    src: "/visuals/ai-nucleus/hybridDecision1.png",
    title: "Hibrit Karar Mekanizması",
    desc: "Hibrit LLM karar mekanizması ile bilgi erişimi ve bağlam oluşturma süreçleri orkestre edilir.",
  },
  {
    src: "/visuals/ai-nucleus/vectorlayer.png",
    title: "Çoklu Vektör Veri Katmanı",
    desc: "Anlamlandırma ve arama süreçleri çoklu vektör veritabanı üzerinde yürütülür.",
  },
],


    outcomesTitle: "Beklenen çıktılar",
    outcomes: [
      "Kurumsal bilgiye erişim süresinde azalma",
      "Bilgi tutarlılığı ve güvenilirliğinde artış",
      "Birden fazla birimde dağınık bilginin tekilleştirilmesi ve standardizasyonu",
      "Yüksek gizlilik ortamlarında çalışabilir AI kabiliyeti",
	  "Doküman oluşturabilme, farklı dokümanları kıyas yapabilme ve rapor alma, kılavuz dokümanları baz alarak doküman performansı ölçebilme",
    ],
  },

  security: {
    title: "Güvenlik ve Dağıtım",
    bullets: [
      "On-premise kurulum yaklaşımı",
      "Air-Gap uyumlu mimari hedefi",
      "RBAC ile hiyerarşik erişim yetkilendirme",
    ],
  },

  contact: {
    title: "İletişim",
    subtitle: "Demo, pilot çalışma ve iş birliği talepleri için iletişime geçin.",
    emailLabel: "E-posta",
    email: "info@btbtech.io",
  },
  
  aiNucleusFeatures: [
    {
    src: "/visuals/ai-nucleus/ai-nucleus-core.png",
    title: "On-Premise",
    description: "Hassas verileriniz kurum altyapınızda kalır, dış sistemlere çıkmaz.",
  },
  {
    src: "/visuals/ai-nucleus/ai-nucleus-enterprise.png",
    title: "Air-Gap Uyumlu",
    description: "Tamamen izole ağ ortamlarında güvenle çalışabilir.",
  },
  {
    src: "/visuals/ai-nucleus/ai-nucleus-intelligence.png",
    title: "Kurumsal Hafıza",
    description: "ERP/CLM, PLM, e-posta ve dosya sunucularını tek bir bilgi çekirdeğinde birleştirir.",
  },
  {
    src: "/visuals/ai-nucleus/ai-nucleus-security.png",
    title: "Güvenli Erişim",
    description: "Rol bazlı yetkilendirme ile kontrollü ve izlenebilir erişim sağlar.",
  },
  ],
};

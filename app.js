// app.js — theme, mobile menu, language (EN/TR), simple mailto form

const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => Array.from(p.querySelectorAll(s));

/* ---------- Theme ---------- */
const themeBtn = $("#themeBtn");
const root = document.documentElement;

function setTheme(theme){
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeBtn.textContent = theme === "light" ? "☀️" : "🌙";
}

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

themeBtn?.addEventListener("click", () => {
  const now = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  setTheme(now);
});

/* ---------- Mobile nav ---------- */
const burger = $("#burger");
const mobileNav = $("#mobileNav");

burger?.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});

$$(".mobile-nav a").forEach(a=>{
  a.addEventListener("click", ()=> mobileNav.classList.remove("show"));
});

/* ---------- Language ---------- */
const langWrap = $("#langWrap");
const langBtn = $("#langBtn");
const langLabel = $("#langLabel");
const langMenu = $("#langMenu");

const dict = {
  en: {
    nav_about:"About",
    nav_brands:"Brands",
    nav_ankara:"Ankara",
    nav_b2b:"B2B",
    nav_contact:"Contact",

    hero_kicker:"Premium cosmetics & daily essentials — starting in Ankara.",
    hero_title:"K-Beauty & Global Brands,<br/>curated for everyday life.",
    hero_lead:"Gijun Store brings together Korean, French, and Italian cosmetics — plus carefully selected daily essentials. We start in Ankara and expand step-by-step across Türkiye.",
    hero_cta1:"Get store updates",
    hero_cta2:"Explore categories",
    hero_cta3:"Request a catalog",
    pill_1:"Verified products",
    pill_2:"Fair pricing",
    pill_3:"Fast restocks",

    side_title:"What we offer",
    side_1_k:"Cosmetics",
    side_1_v:"Skincare, makeup, fragrance — Korean + EU lines.",
    side_2_k:"Daily essentials",
    side_2_v:"Household items, personal care, travel-size basics.",
    side_3_k:"Community store",
    side_3_v:"A friendly local shop — expanding to new cities.",
    side_footer:"* Product lineup may vary by availability and compliance requirements.",

    strip_1_k:"Launch city",
    strip_1_v:"Ankara",
    strip_2_k:"Core categories",
    strip_2_v:"Cosmetics + daily essentials",
    strip_3_k:"Future plan",
    strip_3_v:"Expand to Istanbul and beyond",

    about_title:"About Gijun Store",
    about_sub:"A modern neighborhood store model — inspired by chains like Gratis, but curated with Korean & EU brands.",
    about_c1_t:"Curated selection",
    about_c1_p:"We focus on quality, authenticity, and practical daily use.",
    about_c2_t:"Transparent sourcing",
    about_c2_p:"We work toward reliable import channels and compliant product listings.",
    about_c3_t:"Made for Ankara",
    about_c3_p:"First store in Ankara — built to scale into a multi-city chain.",
    about_banner_k:"Want early access to new arrivals?",
    about_banner_v:"Leave a message and we’ll notify you when the store opens.",
    about_banner_btn:"Notify me",

    brands_title:"Brands & categories",
    brands_sub:"Korean, French, and Italian cosmetics — plus daily essentials for home & travel.",
    brands_k1:"Korean",
    brands_v1:"Skincare routines, sun care, cushion makeup, hair care.",
    brands_l1:"Cleansers / toners / serums",
    brands_l2:"SPF & sensitive-skin lines",
    brands_k2:"French",
    brands_v2:"Dermocosmetics, fragrance, pharmacy-style essentials.",
    brands_l3:"Moisturizers & barrier care",
    brands_l4:"Fragrance & body care",
    brands_k3:"Italian",
    brands_v3:"Beauty & lifestyle items with clean design and quality.",
    brands_l5:"Makeup & accessories",
    brands_l6:"Daily essentials",
    brands_note:"Tip: We can also source requested items if they’re legally importable and available.",

    ank_title:"Ankara launch plan",
    ank_sub:"A simple timeline for opening the first base store.",
    ank_t1:"Location & concept",
    ank_p1:"A compact store with best-sellers, seasonal bundles, and fast rotation.",
    ank_tag1:"Neighborhood",
    ank_tag2:"Curated",
    ank_tag3:"Affordable-premium",
    ank_t2:"Product lineup",
    ank_p2:"Cosmetics + household essentials, grouped by needs (daily, travel, gifts).",
    ank_li1:"Skincare basics + SPF",
    ank_li2:"Makeup staples + tools",
    ank_li3:"Household & hygiene",
    ank_t3:"Step-by-step",
    ank_s1k:"Step 1",
    ank_s1v:"Finalize product list & suppliers",
    ank_s2k:"Step 2",
    ank_s2v:"Branding, signage, and opening campaign",
    ank_s3k:"Step 3",
    ank_s3v:"Soft opening + feedback loop",
    ank_s4k:"Step 4",
    ank_s4v:"Scale to new cities (Istanbul next)",

    b2b_title:"B2B / wholesale",
    b2b_sub:"For salons, small shops, and partners who want consistent supply.",
    b2b_c1_t:"For partners",
    b2b_c1_p:"Wholesale pricing for repeat orders and verified product lists.",
    b2b_c2_t:"For resellers",
    b2b_c2_p:"Starter bundles and category packs (skincare, makeup, essentials).",
    b2b_c3_t:"For events",
    b2b_c3_p:"Gift sets and curated boxes for corporate or community events.",
    b2b_banner_k:"Need a quotation?",
    b2b_banner_v:"Send your category list and expected volume.",
    b2b_banner_btn:"Contact for B2B",

    contact_title:"Contact",
    contact_sub:"Tell us what you want — store updates, product requests, or B2B inquiries.",
    contact_info_t:"Store info",
    contact_info_p:"We’re opening in Ankara first. Expansion to Istanbul is planned.",
    contact_k1:"Email",
    contact_k2:"City",
    contact_k3:"Hours",
    contact_city:"Ankara, Türkiye",
    contact_hours:"Coming soon",
    contact_callout_k:"Quick note",
    contact_callout_v:"We only list items we can source responsibly and legally.",

    contact_form_t:"Send a message",
    form_name:"Your name",
    form_type:"Inquiry type",
    form_opt1:"Store updates",
    form_opt2:"Product request",
    form_opt3:"B2B / wholesale",
    form_msg:"Message",
    form_send:"Send",
    form_copy:"Copy email",
    form_note:"This form opens your email app (mailto). You can also copy the email and send manually.",

    footer_p:"Premium cosmetics & daily essentials. Starting in Ankara, expanding across Türkiye."
  },

  tr: {
    nav_about:"Hakkımızda",
    nav_brands:"Markalar",
    nav_ankara:"Ankara",
    nav_b2b:"B2B",
    nav_contact:"İletişim",

    hero_kicker:"Premium kozmetik ve günlük ihtiyaçlar — Ankara’dan başlıyoruz.",
    hero_title:"K-Beauty ve global markalar,<br/>günlük yaşam için seçildi.",
    hero_lead:"Gijun Store; Kore, Fransa ve İtalya menşeli kozmetiklerin yanı sıra özenle seçilmiş günlük ihtiyaç ürünlerini bir araya getirir. Ankara’da başlıyor, Türkiye genelinde adım adım büyüyoruz.",
    hero_cta1:"Açılış duyurusu al",
    hero_cta2:"Kategorileri keşfet",
    hero_cta3:"Katalog iste",
    pill_1:"Orijinallik odaklı",
    pill_2:"Adil fiyat",
    pill_3:"Hızlı stok yenileme",

    side_title:"Neler var?",
    side_1_k:"Kozmetik",
    side_1_v:"Cilt bakımı, makyaj, parfüm — Kore + Avrupa ürünleri.",
    side_2_k:"Günlük ihtiyaçlar",
    side_2_v:"Ev ürünleri, kişisel bakım, seyahat boyu temel ürünler.",
    side_3_k:"Mahalle konsepti",
    side_3_v:"Samimi yerel mağaza — yeni şehirlere açılma hedefiyle.",
    side_footer:"* Ürün çeşitliliği stok ve yasal uygunluğa göre değişebilir.",

    strip_1_k:"Başlangıç şehri",
    strip_1_v:"Ankara",
    strip_2_k:"Ana kategoriler",
    strip_2_v:"Kozmetik + günlük ihtiyaçlar",
    strip_3_k:"Gelecek planı",
    strip_3_v:"İstanbul ve diğer şehirlere yayılma",

    about_title:"Gijun Store hakkında",
    about_sub:"Gratis gibi zincirlerden ilham alan; Kore ve Avrupa markalarıyla daha seçkin bir mahalle mağazası.",
    about_c1_t:"Seçili ürünler",
    about_c1_p:"Kalite, orijinallik ve günlük kullanım odağındayız.",
    about_c2_t:"Şeffaf tedarik",
    about_c2_p:"Güvenilir ithalat kanalları ve uygun ürün listeleri hedefliyoruz.",
    about_c3_t:"Ankara için",
    about_c3_p:"İlk mağaza Ankara’da — sonra çok şehre ölçeklenecek.",
    about_banner_k:"Yeni ürünlerden erken haberdar olmak ister misin?",
    about_banner_v:"Mesaj bırak, açılışta sana haber verelim.",
    about_banner_btn:"Bana haber ver",

    brands_title:"Markalar & kategoriler",
    brands_sub:"Kore, Fransa ve İtalya kozmetikleri — ev ve seyahat için günlük ihtiyaçlar.",
    brands_k1:"Kore",
    brands_v1:"Cilt bakımı rutinleri, güneş koruyucu, cushion makyaj, saç bakımı.",
    brands_l1:"Temizleyici / tonik / serum",
    brands_l2:"SPF & hassas cilt serileri",
    brands_k2:"Fransa",
    brands_v2:"Dermokozmetik, parfüm ve eczane tipi temel ürünler.",
    brands_l3:"Nemlendirici & bariyer bakımı",
    brands_l4:"Parfüm & vücut bakımı",
    brands_k3:"İtalya",
    brands_v3:"Temiz tasarım ve kalite odaklı güzellik & yaşam ürünleri.",
    brands_l5:"Makyaj & aksesuar",
    brands_l6:"Günlük ihtiyaçlar",
    brands_note:"Not: Yasal olarak ithal edilebilir ve bulunabilirse istek ürün de tedarik edebiliriz.",

    ank_title:"Ankara açılış planı",
    ank_sub:"İlk mağazayı açmak için basit bir yol haritası.",
    ank_t1:"Lokasyon & konsept",
    ank_p1:"Best-seller’lar, sezon paketleri ve hızlı dönüşümlü ürünler.",
    ank_tag1:"Mahalle",
    ank_tag2:"Seçili",
    ank_tag3:"Uygun-premium",
    ank_t2:"Ürün planı",
    ank_p2:"Kozmetik + ev ihtiyaçları, ihtiyaca göre gruplama (günlük, seyahat, hediye).",
    ank_li1:"Cilt bakımı temel + SPF",
    ank_li2:"Makyaj temel + araçlar",
    ank_li3:"Ev & hijyen",
    ank_t3:"Adım adım",
    ank_s1k:"Adım 1",
    ank_s1v:"Ürün listesi ve tedarikçileri netleştir",
    ank_s2k:"Adım 2",
    ank_s2v:"Markalama, tabela ve açılış kampanyası",
    ank_s3k:"Adım 3",
    ank_s3v:"Soft opening + geri bildirim döngüsü",
    ank_s4k:"Adım 4",
    ank_s4v:"Yeni şehirlere yayılma (sonraki: İstanbul)",

    b2b_title:"B2B / toptan",
    b2b_sub:"Kuaförler, küçük mağazalar ve düzenli tedarik isteyen partnerler için.",
    b2b_c1_t:"Partnerlere",
    b2b_c1_p:"Tekrarlı siparişler için toptan fiyat ve doğrulanmış ürün listesi.",
    b2b_c2_t:"Satıcılara",
    b2b_c2_p:"Başlangıç paketleri ve kategori setleri (cilt, makyaj, ihtiyaç).",
    b2b_c3_t:"Etkinliklere",
    b2b_c3_p:"Kurumsal ve topluluk etkinlikleri için hediye setleri.",
    b2b_banner_k:"Teklif mi lazım?",
    b2b_banner_v:"Kategori listenizi ve tahmini adedi gönderin.",
    b2b_banner_btn:"B2B için yaz",

    contact_title:"İletişim",
    contact_sub:"Açılış duyurusu, ürün isteği veya B2B için mesaj gönder.",
    contact_info_t:"Mağaza bilgisi",
    contact_info_p:"İlk açılış Ankara’da. İstanbul genişleme planı var.",
    contact_k1:"E-posta",
    contact_k2:"Şehir",
    contact_k3:"Saatler",
    contact_city:"Ankara, Türkiye",
    contact_hours:"Yakında",
    contact_callout_k:"Kısa not",
    contact_callout_v:"Sorumlu ve yasal şekilde tedarik edebildiklerimizi listeleriz.",

    contact_form_t:"Mesaj gönder",
    form_name:"Adınız",
    form_type:"Talep türü",
    form_opt1:"Açılış duyurusu",
    form_opt2:"Ürün isteği",
    form_opt3:"B2B / toptan",
    form_msg:"Mesaj",
    form_send:"Gönder",
    form_copy:"E-postayı kopyala",
    form_note:"Bu form e-posta uygulamanızı açar (mailto). İsterseniz e-postayı kopyalayıp manuel de gönderebilirsiniz.",

    footer_p:"Premium kozmetik ve günlük ihtiyaçlar. Ankara’dan başlıyor, Türkiye genelinde büyüyor."
  }
};

function applyLang(lang){
  localStorage.setItem("lang", lang);
  langLabel.textContent = lang === "tr" ? "Türkçe" : "English";

  $$("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const val = dict[lang]?.[key];
    if (typeof val === "string") el.innerHTML = val;
  });

  // Topbar small label (not in data-i18n)
  $("#topBadge").textContent = (lang === "tr") ? "Ankara • İlk Mağaza Açılışı" : "Ankara • First Store Launch";
  $("#topNote").textContent  = (lang === "tr") ? "Kore • Fransa • İtalya markaları + günlük ihtiyaçlar" : "Korean • French • Italian brands + daily essentials";
}

const savedLang = localStorage.getItem("lang") || "en";
applyLang(savedLang);

langBtn?.addEventListener("click", (e)=>{
  e.stopPropagation();
  langWrap.classList.toggle("open");
  langBtn.setAttribute("aria-expanded", langWrap.classList.contains("open") ? "true" : "false");
});

langMenu?.addEventListener("click", (e)=>{
  const btn = e.target.closest("button[data-lang]");
  if(!btn) return;
  applyLang(btn.dataset.lang);
  langWrap.classList.remove("open");
  langBtn.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", ()=>{
  langWrap?.classList.remove("open");
  langBtn?.setAttribute("aria-expanded", "false");
});

/* ---------- Contact form (mailto) ---------- */
const contactForm = $("#contactForm");
const copyEmailBtn = $("#copyEmailBtn");
const catalogBtn = $("#catalogBtn");
const EMAIL = "ipec841@gmail.com";

function openMail(subject, body){
  const link = `mailto:${encodeURIComponent(EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = link;
}

contactForm?.addEventListener("submit", (e)=>{
  e.preventDefault();
  const fd = new FormData(contactForm);
  const name = (fd.get("name")||"").toString().trim();
  const type = (fd.get("type")||"").toString();
  const msg  = (fd.get("message")||"").toString().trim();

  const lang = localStorage.getItem("lang") || "en";
  const typeLabel =
    lang === "tr"
      ? ({updates:"Açılış duyurusu", product:"Ürün isteği", b2b:"B2B / toptan"}[type] || type)
      : ({updates:"Store updates", product:"Product request", b2b:"B2B / wholesale"}[type] || type);

  const subject = lang === "tr"
    ? `Gijun Store - ${typeLabel}`
    : `Gijun Store - ${typeLabel}`;

  const body = `${lang === "tr" ? "İsim" : "Name"}: ${name}\n${lang === "tr" ? "Tür" : "Type"}: ${typeLabel}\n\n${msg}`;
  openMail(subject, body);
});

copyEmailBtn?.addEventListener("click", async ()=>{
  try{
    await navigator.clipboard.writeText(EMAIL);
    copyEmailBtn.textContent = (localStorage.getItem("lang")==="tr") ? "Kopyalandı!" : "Copied!";
    setTimeout(()=> copyEmailBtn.textContent = (localStorage.getItem("lang")==="tr") ? "E-postayı kopyala" : "Copy email", 1200);
  }catch{
    alert(EMAIL);
  }
});

catalogBtn?.addEventListener("click", ()=>{
  const lang = localStorage.getItem("lang") || "en";
  const subject = lang === "tr" ? "Katalog talebi" : "Catalog request";
  const body = lang === "tr"
    ? "Merhaba, katalog ve fiyat listesi rica ediyorum.\n\nİlgilendiğim kategoriler:\n- \n\nTeşekkürler."
    : "Hi, I’d like to request a catalog and price list.\n\nCategories I’m interested in:\n- \n\nThanks.";
  openMail(subject, body);
});

/* ---------- Footer year ---------- */
$("#year").textContent = new Date().getFullYear();

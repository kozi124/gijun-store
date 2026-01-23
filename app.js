const dict = {
  tr: {
    nav_about: "Hakkımızda",
    nav_categories: "Kategoriler",
    nav_ankara: "Ankara",
    nav_b2b: "B2B",
    nav_contact: "İletişim",

    hero_kicker: "Premium K-Beauty & Select Shop",
    hero_title: "K-Beauty ve global markalar,<br>günlük yaşam için.",
    hero_desc:
      "Gijun Store; Kore, Fransa ve İtalya menşeli kozmetik ve günlük ihtiyaç ürünlerini bir araya getirir.",
    hero_cta1: "Açılış duyurusu al",
    hero_cta2: "Kategorileri keşfet",
    hero_cta3: "Katalog iste",

    pill_1: "Orijinallik",
    pill_2: "Trend ürünler",
    pill_3: "Hızlı stok",

    side_title: "Neler var?",
    side_1_t: "Kozmetik",
    side_1_d: "Cilt bakımı, makyaj, parfüm",
    side_2_t: "Günlük ihtiyaçlar",
    side_2_d: "Ev ve kişisel bakım ürünleri",
    side_3_t: "Mahalle konsepti",
    side_3_d: "Samimi, seçili mağaza",

    contact_title: "İletişim",
    contact_desc: "Ankara’da açılıyoruz. İstanbul sırada.",

    form_title: "Mesaj gönder",
    form_name: "Adınız",
    form_msg: "Mesajınız",
    form_opt1: "Açılış duyurusu",
    form_opt2: "Ürün isteği",
    form_opt3: "B2B",
    form_send: "Gönder"
  },

  en: {
    nav_about: "About",
    nav_categories: "Categories",
    nav_ankara: "Ankara",
    nav_b2b: "B2B",
    nav_contact: "Contact",

    hero_kicker: "Premium K-Beauty & Select Shop",
    hero_title: "K-Beauty & Global Picks,<br>for everyday life.",
    hero_desc:
      "Gijun Store brings together Korean, French and Italian cosmetics and daily essentials.",
    hero_cta1: "Get store updates",
    hero_cta2: "Explore categories",
    hero_cta3: "Request catalog",

    pill_1: "Authenticity",
    pill_2: "Trending items",
    pill_3: "Fast restock",

    side_title: "What we offer",
    side_1_t: "Cosmetics",
    side_1_d: "Skincare, makeup, fragrance",
    side_2_t: "Daily essentials",
    side_2_d: "Home & personal care",
    side_3_t: "Community store",
    side_3_d: "Friendly curated shop",

    contact_title: "Contact",
    contact_desc: "Opening in Ankara. Istanbul next.",

    form_title: "Send a message",
    form_name: "Your name",
    form_msg: "Your message",
    form_opt1: "Store updates",
    form_opt2: "Product request",
    form_opt3: "B2B",
    form_send: "Send"
  }
};

const langLabel = document.getElementById("langLabel");
const langWrap = document.getElementById("langWrap");

function applyLang(lang) {
  localStorage.setItem("lang", lang);
  langLabel.textContent = lang === "tr" ? "Türkçe" : "English";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[lang][key]) el.innerHTML = dict[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[lang][key]) el.placeholder = dict[lang][key];
  });
}

document.getElementById("langBtn").onclick = () =>
  langWrap.classList.toggle("open");

document.getElementById("langMenu").onclick = e => {
  const btn = e.target.closest("button[data-lang]");
  if (!btn) return;
  applyLang(btn.dataset.lang);
  langWrap.classList.remove("open");
};

applyLang(localStorage.getItem("lang") || "tr");

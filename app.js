const dict={
  en:{
    lang_label:"English",
    top_badge:"Ankara • First Store Opening",
    top_note:"Korea · France · Italy · Daily Select",
    nav_categories:"Categories",
    nav_featured:"Featured",
    nav_about:"About",
    nav_contact:"Contact",
    hero_kicker:"GLOBAL BEAUTY SELECT",
    hero_title:"Beauty & Daily Essentials,<br>Curated Worldwide",
    hero_desc:"Premium K-Beauty and European brands selected for everyday life.",
    hero_cta1:"Explore Selection",
    hero_cta2:"View Categories",
    h1_t:"Authentic Brands",h1_d:"Official & original sourcing",
    h2_t:"Global Selection",h2_d:"Korea, Europe & beyond",
    h3_t:"Premium Experience",h3_d:"Carefully curated",
    cat_title:"Categories",
    cat1:"Skincare",
    cat2:"Makeup",
    cat3:"Body Care",
    cat4:"Hygiene",
    cat5:"Gifts",
    cat6:"Travel",
    feat_title:"Featured Selection",
    feat1:"Best Sellers",
    feat2:"Global Picks",
    feat3:"Limited Selection",
    contact_title:"Contact",
    contact_desc:"Starting in Ankara. Expanding globally."
  },
  tr:{
    lang_label:"Türkçe",
    top_badge:"Ankara • İlk Mağaza",
    top_note:"Kore · Fransa · İtalya · Seçili Ürünler",
    nav_categories:"Kategoriler",
    nav_featured:"Öne Çıkanlar",
    nav_about:"Hakkımızda",
    nav_contact:"İletişim",
    hero_kicker:"GLOBAL GÜZELLİK SEÇKİSİ",
    hero_title:"Güzellik ve Günlük Ürünler,<br>Dünya Çapında Seçildi",
    hero_desc:"K-Beauty ve Avrupa markalarından premium seçki.",
    hero_cta1:"Seçkiyi Keşfet",
    hero_cta2:"Kategoriler",
    h1_t:"Orijinal Markalar",h1_d:"Resmi ve güvenilir",
    h2_t:"Global Seçki",h2_d:"Kore ve Avrupa",
    h3_t:"Premium Deneyim",h3_d:"Özenle seçildi",
    cat_title:"Kategoriler",
    cat1:"Cilt Bakımı",
    cat2:"Makyaj",
    cat3:"Vücut Bakımı",
    cat4:"Hijyen",
    cat5:"Hediye",
    cat6:"Seyahat",
    feat_title:"Öne Çıkanlar",
    feat1:"Çok Satanlar",
    feat2:"Global Seçim",
    feat3:"Sınırlı Ürünler",
    contact_title:"İletişim",
    contact_desc:"Ankara’dan başlıyoruz. Global büyüme."
  }
};

const langWrap=document.getElementById("langWrap");
const langBtn=document.getElementById("langBtn");
const langLabel=document.getElementById("langLabel");

function applyLang(l){
  localStorage.setItem("lang",l);
  langLabel.textContent=dict[l].lang_label;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k=el.dataset.i18n;
    if(dict[l][k]) el.innerHTML=dict[l][k];
  });
}
langBtn.onclick=()=>langWrap.classList.toggle("open");
document.getElementById("langMenu").onclick=e=>{
  const b=e.target.closest("button[data-lang]");
  if(!b)return;
  applyLang(b.dataset.lang);
  langWrap.classList.remove("open");
};
applyLang(localStorage.getItem("lang")||"en");

const mountains = [
  { name_ja: "円山", name_en: "Maruyama", url: "result-10.html" },
  { name_ja: "旭岳", name_en: "Mt. Asahi", url: "result-11.html" },
  { name_ja: "藻岩山", name_en: "Moiwa", url: "result-12.html" },
  { name_ja: "恵山", name_en: "Esan", url: "result-13.html" },
  { name_ja: "ニセコアンヌプリ", name_en: "Niseko Annupuri", url: "result-14.html" },
  { name_ja: "樽前山", name_en: "Tarumae", url: "result-15.html" },
  { name_ja: "雌阿寒岳", name_en: "Mt. Meakan", url: "result-16.html" },
  { name_ja: "十勝岳", name_en: "Tokachidake", url: "result-17.html" },
  { name_ja: "トムラウシ山", name_en: "Mt. Tomuraushi", url: "result-18.html" },
  { name_ja: "黒岳～北鎮岳", name_en: "Mt. Kurodake to Mt. Hokuchin", url: "result-19.html" },
  { name_ja: "二ぺソツ山", name_en: "Mt. Nipesotsu", url: "result-20.html" },
  { name_ja: "幌尻岳", name_en: "Mt. Poroshiri", url: "result-21.html" },
  { name_ja: "カムイエクウチカウシ山", name_en: "Mt. Kamuiekuuchikau", url: "result-22.html" },
  { name_ja: "日高山脈", name_en: "Hidaka Mountains", url: "result-23.html" },
  { name_ja: "日高幌尻岳", name_en: "Mt. Hidaka Poroshiri", url: "result-24.html" },
  { name_ja: "神威岳", name_en: "Mt. Kamui", url: "result-25.html" }
];

document.getElementById("gacha-button").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * mountains.length);
  const selected = mountains[randomIndex];

  const currentLang = i18next.language;
  const displayName = currentLang === "en" ? selected.name_en : selected.name_ja;

  const resultText = document.getElementById("result");
  resultText.textContent = `🎉 ${displayName} ${i18next.t('resultMessage')}`;

  const linkContainer = document.getElementById("link");
  linkContainer.innerHTML = '';

  const link = document.createElement("a");
  link.href = selected.url;
  link.textContent = `${i18next.t('goto')}${displayName}`;
  link.className = "link-button";
  link.style.display = "inline-block";
  link.style.marginTop = "10px";
  link.style.padding = "10px 20px";
  link.style.backgroundColor = "#3498db";
  link.style.color = "white";
  link.style.textDecoration = "none";
  link.style.borderRadius = "8px";

  linkContainer.appendChild(link);
});

// i18next 初期化 & 多言語切替
const resources = {
  ja: {
    translation: {
      title: "ガチャガチャひな形",
      header: "ガチャガチャ",
      button: "回す！",
      resultMessage: "が当たった！",
      goto: "▶ ページへ移動：",
      home: "ホームページを見る"
    }
  },
  en: {
    translation: {
      title: "Mountain Gacha Template",
      header: "Mountain Gacha",
      button: "Spin!",
      resultMessage: "won!",
      goto: "▶ Go to page: ",
      home: "View Homepage"
    }
  }
};

i18next.init({
  lng: 'ja',
  resources
}, function(err, t) {
  updateContent();
});

function changeLang(lang) {
  i18next.changeLanguage(lang, () => {
    updateContent();
  });
}

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = i18next.t(key);
  });
  document.title = i18next.t('title');
}

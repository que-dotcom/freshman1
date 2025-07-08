const originalRSS = 'https://news.google.com/rss/search?q=北海道+登山&hl=ja&gl=JP&ceid=JP:ja';
const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(originalRSS)}`;

fetch(feedUrl)
  .then(response => response.json())
  .then(data => {
    if (data.status !== 'ok') {
      throw new Error(data.message);
    }

    const wrapper = document.getElementById('news-items-wrapper');
    wrapper.innerHTML = '';

    // 1セット目のニュースを作成
    const originalItems = data.items.map(item => {
      const a = document.createElement('a');
      a.href = item.link;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = item.title;
      return a;
    });

    // 2セットにして無限ループのように見せる
    originalItems.concat(originalItems).forEach(el => {
      wrapper.appendChild(el.cloneNode(true));
    });
  })
  .catch(error => {
    console.error('ニュース取得エラー:', error);
    const wrapper = document.getElementById('news-items-wrapper');
    wrapper.textContent = 'ニュースの取得に失敗しました。';
  });

  i18next.init({
  lng: 'ja',
  resources: {
    ja: {
      translation: {
        headline: "北海道登山ニュース",
        "home":"ホームページを見る",
        lang: {
          ja: "日本語",
          en: "英語"
        }
      }
    },
    en: {
      translation: {
        headline: "Hokkaido Mountain News",
        "home": "Go to Homepage",
        lang: {
          ja: "Japanese",
          en: "English"
        }
      }
    }
  }
}, function(err, t) {
  updateContent();
});

// 言語切り替え関数
function changeLang(lng) {
  i18next.changeLanguage(lng, updateContent);
}

// 翻訳を画面に反映
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = i18next.t(key);
  });
}

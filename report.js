const resources = {
  ja: {
    translation: {
      "h1": "登山適正診断",
      // 各質問文
      "q1.text": "1. 持久力・体力<br>持久走であなたはどのレベルまで走れますか？",
      "q2.text": "2. 技術・装備操作能力<br>新しく未知の分野について調べようをと思い試行錯誤しています、最もあなたに近いレベルはどれですか？",
      "q3.text": "3. 状況判断力<br>人間関係でぎくしゃくしてしまいました...あなたは原因に対してどんなレベルの対応をとりますか？",
      "q4.text": "4. 精神力<br>あなたはミスや失敗をしたとき、どのレベルの状態になりやすいですか？",
      "q5.text": "5. チームワーク力<br>あなたは日常生活で人と話すとき、どんなレベルの会話をしていますか？",

      // 各選択肢（例：q1.a1 = 質問1のレベル1）
      "q1.a5": "ハーフマラソン・フルマラソン完走レベル",
      "q1.a4": "10km以上のランニングを安定して走れるレベル",
      "q1.a3": "5～7kmの持久力を安定して完走できるレベル",
      "q1.a2": "3km走をなんとか完走できるレベル",
      "q1.a1": "100mダッシュできるが1km走ると息切れするレベル",

      "q2.a5": "新しく知った知識も即座に習得でき応用するレベル",
      "q2.a4": "トラブル時も基本知識から自力で解決できるレベル",
      "q2.a3": "新しい知識もマニュアルを見ながらなら問題なくこなせるレベル",
      "q2.a2": "新しい知識を利用したトラブル時の対応が苦手なレベル",
      "q2.a1": "マニュアル書いていることなどが理解できないレベル",

      "q3.a5": "複雑な人間関係や予期せぬトラブルも的確に察知し、最善の解決策を提示出来るレベル",
      "q3.a4": "人間関係の変化に柔軟に対応し、リスクを的確に回避できるレベル",
      "q3.a3": "人間関係で問題や気まずさを感じたら話し合いで解決を図るレベル",
      "q3.a2": "人間関係で小さなトラブルには気づくが、どう対応していいか分からないので放置するレベル",
      "q3.a1": "人間関係でトラブルの芽を見抜くのが苦手なレベル",

      "q4.a5": "どんな逆境でも落ち着いて対応し、周りに安心感を与えられるレベル",
      "q4.a4": "トラブルや困難があっても冷静に対処し、ある程度周囲の人の支えにもなれるレベル",
      "q4.a3": "ストレスの多い場面でも何とか踏ん張り、努力を続けることができるレベル",
      "q4.a2": "壁にぶつかるとすぐ投げ出したくなり、問題を先延ばしにしがちレベル",
      "q4.a1": "ちょっとしたミスやトラブルで極端に落ち込み、周囲に頼るばかりで自分で立ち直れないレベル",

      "q5.a5": "どんな状況でも周りをまとめ、全員の力を最大限に引き出すレベル",
      "q5.a4": "複雑な人間関係をうまくまとめ、チームの雰囲気を良くし、問題解決に導く存在レベル",
      "q5.a3": "意見の違いも話し合いで解決し、円滑に協力し合えるレベル",
      "q5.a2": "友人や同僚とは話せるが、伝えたいことがうまく伝わらず誤解を生みやすいレベル",
      "q5.a1": "グループ作業や家庭で自分勝手に動き、他人の意見を聞かず衝突ばかりするレベル",

      "submit": "おすすめの北海道の山を見てみる",

      "result.noticeTitle": "ご注意ください",
      "result.noticeMessage": "一部の項目で最低評価（1）が選択されました。<br>まずは基礎体力をつけてみてはいかがでしょうか？",
      "result.detail": "▶ 詳細を見る",
      "result.totalTitle": "あなたの総合評価は  {{score}}  点です",
      "result.pro": "🌟 あなたはプロレベルの登山家です！あなたには北海道の難易度の極めて高い山紹介します。",
      "result.advanced": "😊 あなたの登山は上級者レベルです！挑戦しがいのある北海道の山を紹介します。",
      "result.intermediate": "😐 あなたの登山は中級者レベルです！少し難易度の高い山を紹介します。",
      "result.beginnerIntermediate": "😕 あなたの登山は初心者～中級者レベルです！基礎を身に付け楽しく登れる山を紹介します。",
      "result.beginner": "⚠️ あなたの登山は初心者レベルです！まずは基礎体力をつけられる山を紹介します。",

      "chart.label1": "持久力・体力",
      "chart.label2": "技術・装備操作能力",
      "chart.label3": "状況判断力",
      "chart.label4": "精神力",
      "chart.label5": "チームワーク力"
    }
  },

  en: {
    translation: {
      "h1": "Mountaineering Aptitude Test",
      "q1.text": "1. Stamina and Physical Strength<br>How far can you run in a long-distance run?",
      "q2.text": "2. Technical & Equipment Skills<br>You are exploring an unfamiliar topic. Which description fits you best?",
      "q3.text": "3. Situational Judgment<br>You’ve had a disagreement with someone—how do you respond?",
      "q4.text": "4. Mental Strength<br>When you make a mistake, how do you usually react?",
      "q5.text": "5. Teamwork<br>What kind of communication do you usually have with others?",

      "q1.a5": "Able to finish a half or full marathon",
      "q1.a4": "Can steadily run more than 10 km",
      "q1.a3": "Able to consistently complete 5–7 km runs",
      "q1.a2": "Barely manage to complete a 3 km run",
      "q1.a1": "Can sprint 100 m but gets winded after 1 km",

      "q2.a5": "Quickly learns and applies new knowledge",
      "q2.a4": "Can solve issues independently using basic knowledge",
      "q2.a3": "Can follow manuals without difficulty",
      "q2.a2": "Struggles in unfamiliar situations",
      "q2.a1": "Unable to understand manuals",

      "q3.a5": "Detects and solves complex social issues with precision",
      "q3.a4": "Adapts to social changes and avoids risks well",
      "q3.a3": "Tries to resolve issues through communication",
      "q3.a2": "Not sure how to respond to small troubles, so ignores them",
      "q3.a1": "Fails to notice early signs of social trouble",

      "q4.a5": "Calmly handles adversity and gives others peace of mind",
      "q4.a4": "Stays composed and supportive during difficult times",
      "q4.a3": "Pushes through stress and keeps going",
      "q4.a2": "Easily discouraged, tends to procrastinate",
      "q4.a1": "Overwhelmed by minor failures, can't recover alone",

      "q5.a5": "Brings everyone together and maximizes team potential",
      "q5.a4": "Balances relationships and improves group atmosphere",
      "q5.a3": "Resolves differences and cooperates smoothly",
      "q5.a2": "Communicates but often misunderstood",
      "q5.a1": "Ignores others' opinions and often causes conflict",

      "submit": "Find Your Ideal Mountain in Hokkaido",

      "result.noticeTitle": "Please Note",
      "result.noticeMessage": "You selected the lowest rating (1) for at least one item.<br>Consider building up your basic physical fitness first.",
      "result.detail": "▶ See Details",
      "result.totalTitle": "Your total score is  {{score}}  points",
      "result.pro": "🌟 You are a professional-level climber! We'll introduce you to extremely challenging mountains in Hokkaido.",
      "result.advanced": "😊 Your climbing is at an advanced level! Let's explore some rewarding mountains in Hokkaido.",
      "result.intermediate": "😐 Your climbing is at an intermediate level! We'll suggest slightly challenging mountains.",
      "result.beginnerIntermediate": "😕 Your climbing is beginner to intermediate level! Let's enjoy some fun and safe mountains to improve your skills.",
      "result.beginner": "⚠️ You are a beginner climber! Let's start with mountains to build your basic fitness.",

      "chart.label1": "Stamina & Physical Strength",
      "chart.label2": "Technical & Equipment Skills",
      "chart.label3": "Situational Judgment",
      "chart.label4": "Mental Strength",
      "chart.label5": "Teamwork"

    }
  }
};

// 多言語リソース（resources）はそのまま使う前提とします

i18next.init({
  lng: 'ja',
  resources,
  interpolation: {
    escapeValue: false // ← これ重要
  }
}, function(err, t) {
  if (err) return console.error('i18next init error:', err);
  updateUITexts();
});


function updateUITexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = i18next.t(key);

    if (translated.includes('<br>') || translated.includes('<')) {
      el.innerHTML = translated;
    } else {
      el.textContent = translated;
    }
  });
}

// 言語切り替え用（必要なら使用）
function changeLang(lang) {
  i18next.changeLanguage(lang, function(err, t) {
    if (err) return console.error('Language switch error:', err);
    updateUITexts();
  });
}

// フォーム送信イベント
const form = document.getElementById('surveyForm');
const canvas = document.getElementById('radarChart');
const ctx = canvas.getContext('2d');
const resultBox = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const answers = [
    +form.q1.value,
    +form.q2.value,
    +form.q3.value,
    +form.q4.value,
    +form.q5.value
  ];

  resultBox.innerHTML = ''; // 結果ボックス初期化
  resultBox.classList.remove("hidden");

  updateSurveyResults(answers);
});

// 結果表示ロジック
function updateSurveyResults(answers) {
  if (answers.length === 5) {
    const total = answers.reduce((sum, val) => sum + val, 0);
    let message = "";

    if (answers.includes(1)) {
      message = `
        <h2>${i18next.t("result.noticeTitle")}</h2>
        <p>${i18next.t("result.noticeMessage")}</p>
        <a href="warning.html" class="next-button">${i18next.t("result.detail")}</a>
      `;
      resultBox.innerHTML = message;
      canvas.style.display = 'none';
    } else {
      if (total >= 23) {
        message = i18next.t("result.pro");
      } else if (total >= 19) {
        message = i18next.t("result.advanced");
      } else if (total >= 15) {
        message = i18next.t("result.intermediate");
      } else if (total >= 10) {
        message = i18next.t("result.beginnerIntermediate");
      } else {
        message = i18next.t("result.beginner");
      }

      resultBox.innerHTML = `
        <h2>${i18next.t("result.totalTitle", { score: total })}</h2>
        <p>${message}</p>
        <a href="result-${total}.html" class="next-button">${i18next.t("result.detail")}</a>
      `;
      canvas.style.display = 'block';
      drawChart(answers);
    }
  }
}

// レーダーチャート描画
function drawChart(values) {
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const radius = 180;
  const sides = 5;
  const angleStep = (2 * Math.PI) / sides;

  // i18nextからラベルを取得（毎回動的に）
  const labels = [
    i18next.t("chart.label1"),
    i18next.t("chart.label2"),
    i18next.t("chart.label3"),
    i18next.t("chart.label4"),
    i18next.t("chart.label5"),
  ];

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // グリッドを描く
  for (let level = 1; level <= 5; level++) {
    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
      const angle = angleStep * i - Math.PI / 2;
      const r = (radius / 5) * level;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = '#ccc';
    ctx.stroke();
  }

  // 軸ラベルを描く
  ctx.fillStyle = "#000";
  ctx.font = "14px sans-serif";
  labels.forEach((label, i) => {
    const angle = angleStep * i - Math.PI / 2;
    const x = cx + Math.cos(angle) * (radius + 20);
    const y = cy + Math.sin(angle) * (radius + 20);
    ctx.fillText(label, x - 20, y);
  });

  // 回答のレーダー形状を描画
  


  // グリッドを描く
  for (let level = 1; level <= 5; level++) {
    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
      const angle = angleStep * i - Math.PI / 2;
      const r = (radius / 5) * level;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = '#ccc';
    ctx.stroke();
  }

  // 軸ラベルを描く
  ctx.fillStyle = "#000";
  ctx.font = "14px sans-serif";
  labels.forEach((label, i) => {
    const angle = angleStep * i - Math.PI / 2;
    const x = cx + Math.cos(angle) * (radius + 20);
    const y = cy + Math.sin(angle) * (radius + 20);
    ctx.fillText(label, x - 20, y);
  });

  // 回答のレーダー形状を描画
  ctx.beginPath();
  values.forEach((val, i) => {
    const angle = angleStep * i - Math.PI / 2;
    const r = (radius / 5) * val;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(0, 123, 255, 0.4)';
  ctx.fill();
  ctx.strokeStyle = '#007bff';
  ctx.stroke();
}



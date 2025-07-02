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

  // 「1」が含まれているかチェック
  if (answers.includes(1)) {
    resultBox.innerHTML = `
      <h2>ご注意ください</h2>
      <p>一部の項目で最低評価（1）が選択されました。<br>
      まずは基礎体力をつけてみてはいかがでしょうか？</p>
      <a href="warning.html" class="next-button">▶ 詳細を見る</a>
    `;
    canvas.style.display = 'none';
    return;
  }

  // 合計スコアに応じて結果表示
  const total = answers.reduce((sum, val) => sum + val, 0);
  let message = "";

  if (total >= 23) {
    message = "🌟 あなたはプロレベルの登山家です！あなたには北海道の難易度の極めて高い山紹介します。";
  } else if (total >= 19) {
    message = "😊 あなたの登山は上級者レベルです！挑戦しがいのある北海道の山を紹介します。";
  } else if (total >= 15) {
    message = "😐 あなたの登山は中級者レベルです！少し難易度の高い山を紹介します。";
  } else if (total >= 10) {
    message = "😕 あなたの登山は初心者～中級者レベルです！基礎を身に付け楽しく登れる山を紹介します。";
  } else {
    message = "⚠️ あなたの登山は初心者レベルです！まずは基礎体力をつけられる山を紹介します。";
  }

  resultBox.innerHTML = `
    <h2>あなたの総合評価は ${total} 点です</h2>
    <p>${message}</p>
    <a href="result-${total}.html" class="next-button">▶ 詳細を見る</a>
  `;

  // レーダーチャート表示
  canvas.style.display = 'block';
  drawChart(answers);
});

function drawChart(values) {
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const radius = 180;
  const sides = 5;
  const angleStep = (2 * Math.PI) / sides;
  const labels = ['品質', '価格', 'サービス', '配送', '使いやすさ'];

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

  // レーダーの多角形を描画
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


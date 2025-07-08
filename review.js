document.getElementById('reviewForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const dest = document.getElementById('destination').value;
  const rating = document.querySelector('input[name="rating"]:checked');
  const name = document.getElementById('name').value.trim() || "匿名";
  const comment = document.getElementById('comment').value.trim();

  if (!dest || !rating || !comment) {
    alert("すべての項目（投稿先、評価、コメント）を入力してください。");
    return;
  }

  const reviewData = {
    rating: rating.value,
    name: name,
    comment: comment,
    date: new Date().toISOString()
  };

  const key = `review_data_${dest}`;
  const existing = JSON.parse(localStorage.getItem(key) || "[]");
  existing.push(reviewData);
  localStorage.setItem(key, JSON.stringify(existing));

  document.getElementById('successMessage').style.display = "block";
  this.reset();
});

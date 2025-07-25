const data = {
  shonen: [
    "🔸 Naruto : Total Ep: 720 | Per Ep: 23min | Movies: 11 (filler)",
    "🔸 One Piece : Total Ep: 1000+ | Per Ep: 22min | Movies: 15",
    "🔸 Bleach : Total Ep: 366 | Per Ep: 24min | Movies: 4"
  ],
  romance: [
    "🔸 Clannad : 47 Ep | 24min | Movies: 1",
    "🔸 Toradora : 25 Ep | 24min",
    "🔸 Kimi ni Todoke : 38 Ep"
  ],
  comedy: [
    "🔸 Gintama : 367 Ep | 24min",
    "🔸 KonoSuba : 20 Ep | Movies: 1",
    "🔸 Saiki K : 120 Ep (short)"
  ],
  horror: [
    "🔸 Another : 12 Ep | 24min",
    "🔸 Tokyo Ghoul : 48 Ep",
    "🔸 Parasyte : 24 Ep"
  ],
  fantasy: [
    "🔸 Fairy Tail : 328 Ep",
    "🔸 Attack on Titan : 87 Ep",
    "🔸 Demon Slayer : 55+ Ep"
  ],
  film: [
    "🔸 Your Name : Movie | Time: 1h 46m",
    "🔸 Weathering With You : Movie | Time: 1h 52m",
    "🔸 Suzume : Movie | Time: 2h",
    "🔸 Spirited Away : Movie | Time: 2h 5m",
    "🔸 A Silent Voice : Movie | Time: 2h 10m"
  ]
};

document.querySelectorAll(".genre-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const genre = btn.dataset.genre;
    const list = data[genre];
    const animeList = document.getElementById("animeList");
    animeList.innerHTML = `<h3>${genre.toUpperCase()} Anime List</h3><ul>${list.map(a => `<li>${a}</li>`).join("")}</ul>`;
    document.getElementById("commentSection").style.display = "block";
  });
});

document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  document.getElementById("toggleMode").innerText = isLight ? "🌑 Dark Mode" : "🌙 Light Mode";
});

document.getElementById("searchInput").addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase();
  const match = Object.keys(data).find(g => g.includes(val));
  const animeList = document.getElementById("animeList");
  if (match) {
    animeList.innerHTML = `<h3>${match.toUpperCase()} Anime List</h3><ul>${data[match].map(a => `<li>${a}</li>`).join("")}</ul>`;
    document.getElementById("commentSection").style.display = "block";
  } else {
    animeList.innerHTML = "No genre found.";
    document.getElementById("commentSection").style.display = "none";
  }
});

// Comment system
const comments = [];

function submitComment() {
  const input = document.getElementById("commentInput");
  if (input.value.trim() !== "") {
    comments.push(input.value);
    input.value = "";
    showComments();
  }
}

function showComments() {
  const display = document.getElementById("commentsDisplay");
  display.innerHTML = comments.map(c => `<p>🗨️ ${c}</p>`).join("");
}
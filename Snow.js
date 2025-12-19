const music = document.getElementById("bgMusic");

function autoPlayMusic() {
  music.volume = 0.6;
  music.play().catch(() => {});
  document.removeEventListener("click", autoPlayMusic);
  document.removeEventListener("touchstart", autoPlayMusic);
  document.removeEventListener("keydown", autoPlayMusic);
}

document.addEventListener("click", autoPlayMusic);
document.addEventListener("touchstart", autoPlayMusic);
document.addEventListener("keydown", autoPlayMusic);

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.innerHTML = "❄️🎈☃️";

  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.fontSize = Math.random() * 10 + 15 + "px";
  snowflake.style.opacity = Math.random();
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

setInterval(createSnowflake, 100);
const btn = document.getElementById("mailBtn");
const envelope = document.getElementById("envelope");
const change = document.getElementById("btn-change");

btn.onclick = (e) => {
  e.stopPropagation();
  envelope.classList.remove("hidden");
  setTimeout(() => envelope.classList.add("show"), 50);
  btn.style.display = "none";
};

envelope.addEventListener("click", (e) => {
  e.stopPropagation();
  envelope.classList.add("open");
});

document.addEventListener("click", () => {
  envelope.classList.remove("open");
  envelope.classList.remove("show");

  btn.style.display = "block";
});
const startBtn = document.getElementById("startBtn");
const countdown = document.getElementById("countdown");
const mainContent = document.getElementById("mainContent");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  countdown.style.display = "block";

  let timeLeft = 5;
  countdown.textContent = timeLeft;

  const timer = setInterval(() => {
    timeLeft--;
    countdown.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      countdown.style.display = "none";
      mainContent.style.display = "block";

      if (typeof player !== "undefined" && player) {
        player.playVideo();
      }
    }
  }, 1000);
});

const showWishesBtn = document.getElementById("showWishesBtn");
const wishesContainer = document.getElementById("wishesContainer");
const wishes = document.querySelectorAll(".wish");

showWishesBtn.onclick = (e) => {
  e.stopPropagation();
  wishesContainer.style.display = "flex";
  envelope.classList.remove("open");
  envelope.classList.remove("show");
  wishes.forEach((wish, i) => {
    setTimeout(() => wish.classList.add("show"), i * 1000);
  });

  setTimeout(() => hideWishes(), 20000);
};

document.addEventListener("click", (e) => {
  if (!wishesContainer.contains(e.target) && e.target !== showWishesBtn) {
    hideWishes();
  }
});

function hideWishes() {
  wishes.forEach((wish) => wish.classList.remove("show"));
  setTimeout(() => {
    wishesContainer.style.display = "none";
    btn.style.display = "block";
  }, 800);
}

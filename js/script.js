const tombol = document.querySelector(".tombol");
const inner = document.querySelector(".inner");

let duration = 1000 * 1000;
let animationEnd = Date.now() + duration;
let skew = 1;

let detik = 2;
let countdown_confetti;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

tombol.addEventListener("click", () => {
  tombol.style.animation = "tombol 1.5s forwards";
  inner.style.animation = "opening 2s 1.5s forwards";
  inner.style.pointerEvents = "all";
  countdown_confetti = setInterval(start_confetti, 1000);
});

function start_confetti() {
  if (detik == 1) {
    clearInterval(countdown_confetti)
    frame();
  }
  detik--;
}

function frame() {
  let timeLeft = animationEnd - Date.now();
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: 200,
    origin: {
      x: Math.random(),
      y: Math.random() * skew - 0.2,
    },
    colors: ["#907AD6"],
    shapes: ["circle"],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4),
  });
  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: 150,
    origin: {
      x: Math.random(),
      y: Math.random() * skew - 0.2,
    },
    colors: ["#DABFFF"],
    shapes: ["star"],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.6, 1),
    drift: randomInRange(-0.4, 0.4),
  });
  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}

const audio = new Audio("tunes/a.wav");

const keys = document.querySelectorAll(".keys .key");
const set = document.querySelector(".input");

const player = (tap) => {
  audio.volume = set.value;
  audio.src = `tunes/${tap}.wav`;
  let clicked = document.querySelector(`[data-key="${tap}"]`);
  clicked.classList.add("active");
  setTimeout(() => {
    clicked.classList.remove("active");
  }, 100);
  audio.play();
};

keys.forEach((key) => {
  key.addEventListener("click", () => {
    player(key.dataset.key);
  });
});

const pressed = (e) => {
  player(e.key);
};

document.addEventListener("keydown", pressed);

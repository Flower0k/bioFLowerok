const phrases = [
  "волосатые сиськи millionlavv...",
  "ДА Я НЕ HITLER_ADOLFO",
  "Vifoxy фурри, или фембой?",
  "маршмелоу...",
  "Moksy44 это две ноздри, а не глаза!",
  "подсветка за 50 грн",
  "кто такой DeNoobMaster?",
  "мне пофик,я легенда",
  "согревание от костра",
  "Mellonov - пьяный? Сонный? всё вместе?"
];

const splash = document.getElementById('splash');

function showSplashPhrase() {
  const index = Math.floor(Math.random() * phrases.length);
  splash.style.opacity = 0;
  setTimeout(() => {
    splash.textContent = phrases[index];
    splash.style.opacity = 1;
  }, 300);
}

showSplashPhrase();
setInterval(showSplashPhrase, 30000);


const text = "Добро пожаловать в Лагерь FL0WER0K";
const container = document.getElementById("undertale-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    container.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 60); // скорость печати
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);

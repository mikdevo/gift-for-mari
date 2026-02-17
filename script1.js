const showLetterBtn = document.getElementById("showLetterBtn");
const letter = document.getElementById("letter");
const letterContent = document.getElementById("letterContent");

showLetterBtn.addEventListener("click", function () {
  letter.style.display = "block";
  animateTyping(
    "My love, you are the melody to my heart, the warmth to my soul, and the light that fills my life with endless joy"
  );
});

function animateTyping(text) {
  letterContent.innerHTML = "";
  const textLength = text.length;
  let i = 0;
  const typingInterval = setInterval(() => {
    letterContent.innerHTML += text.charAt(i);
    i++;
    if (i > textLength) {
      clearInterval(typingInterval);
    }
  }, 100);
}
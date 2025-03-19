let textUnraveled = document.getElementsByClassName("scrambled-text");

function revealText() {
  for (let i = 0; i < textUnraveled.length; i++) {
    textUnraveled[i].classList.remove("scrambled-text");
  }
}

let textUnraveled = document.getElementsByClassName("scrambled-text");

function revealText() {
  for (let i = 0; i < textUnraveled.length; i++) {
    textUnraveled[i].classList.remove("scrambled-text");
  }
}

function revealMore() {
  var readMore = document.getElementById("readMore");
  var btnText = document.getElementById("reveal-btn");
  if (readMore.style.display === "inline") {
    btnText.innerHTML = "Unravel rest of the page";
    readMore.style.display = "none";
  } else {
    readMore.style.display = "none";
    btnText.innerHTML = "Unravel less";
    readMore.style.display = "inline";
  }
}

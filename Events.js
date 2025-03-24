let textUnraveled = document.getElementsByClassName("scrambled-text");

function revealText() {
  for (let i = 0; i < textUnraveled.length; i++) {
    textUnraveled[i].classList.remove("scrambled-text");
  }
}

function forbiddenBtnReveal1() {
  var readMore = document.getElementById("forbiddenReadMore1");
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

function forbiddenBtnReveal2() {
  var readMore = document.getElementById("forbiddenReadMore2");
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

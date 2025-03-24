let textUnraveled = document.getElementsByClassName("scrambled-text");

function revealText() {
  for (let i = 0; i < textUnraveled.length; i++) {
    textUnraveled[i].classList.remove("scrambled-text");
  }
}

function forbiddenBtnReveal1() {
  var readMore = document.getElementById("forbiddenReadMore1");
  var btnText = document.getElementById("reveal-btn1");
  if (readMore.style.display === "inline") {
    btnText.innerHTML = "Unravel rest of the page";
    readMore.style.display = "none";
  } else {
    btnText.innerHTML = "Unravel less";
    readMore.style.display = "inline";
  }
}

function forbiddenBtnReveal2() {
  var readMore = document.getElementById("forbiddenReadMore2");
  var btnText = document.getElementById("reveal-btn2");
  if (readMore.style.display === "inline") {
    btnText.innerHTML = "Unravel rest of the page";
    readMore.style.display = "none";
  } else {
    btnText.innerHTML = "Unravel less";
    readMore.style.display = "inline";
  }
}

function revealAllPages() {
  var PagesHidden = document.getElementById("PagesHidden");
  var btnText = document.getElementById("pages-btn");

  if (PagesHidden.style.display === "block") {
    PagesHidden.style.display = "none";
    btnText.innerHTML = "Shown ll pages & credits";
    console.log("Content hidden");
  } else {
    PagesHidden.style.display = "block";
    btnText.innerHTML = "Hidden all pages & credits";
    console.log("Content revealed");
  }
}

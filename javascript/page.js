const buttonCode = document.querySelector(".btCode");
const buttonMain = document.querySelector(".btMain");
const pageCheck = document.querySelector(".ajax-show");
const codeList = document.querySelector(".code-list");
const SLIDE_MAIN = "slidemain";
const SLIDE_CODE = "slidecode";
let mainLock = true;
let codeLock = false;

function changePage(mainCheck, codeCheck) {
  if (pageCheck.classList[1] == "0-page") {
    ifElsePage(mainCheck, codeCheck, "Slide1", SLIDE_MAIN, SLIDE_CODE);
  }
  if (pageCheck.classList[1] == "1-page") {
    ifElsePage(
      mainCheck,
      codeCheck,
      "web_study2",
      "web_study2.html",
      "code.html"
    );
  }
  if (pageCheck.classList[1] == "2-page") {
    ifElsePage(mainCheck, codeCheck, "Slide3", SLIDE_MAIN, SLIDE_CODE);
  }
}

function ifElsePage(
  mainCheck,
  codeCheck,
  slideFolderName,
  slideMainFileName,
  slideCodeFileName
) {
  if (mainCheck) {
    change(`pages/${slideFolderName}/${slideMainFileName}`);
    codeList.classList.add("code-hidden");
    lock.main();
  } else if (codeCheck) {
    change(`pages/${slideFolderName}/${slideCodeFileName}`);
    pageCheck.style.backgroundImage = "url('')";
    codeList.classList.remove("code-hidden");
    lock.code();
  }
}

const lock = {
  init: function () {
    mainLock = true;
    codeLock = false;
  },
  main: function () {
    mainLock = true;
    codeLock = false;
  },
  code: function () {
    mainLock = false;
    codeLock = true;
  },
};
function clickCode() {
  if (!codeLock && mainLock) {
    changePage(false, true);
  }
}
function clickMain() {
  if (!mainLock && codeLock) {
    changePage(true, false);
  }
}
function change(url) {
  $.ajax({
    type: "get",
    url: url,
    success: function (fileLocation) {
      $(".ajax-show").html(fileLocation);
    },
  });
}
buttonCode.addEventListener("click", clickCode);
buttonMain.addEventListener("click", clickMain);

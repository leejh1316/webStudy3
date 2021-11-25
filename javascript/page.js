const buttonCode = document.querySelector(".btCode");
const buttonMain = document.querySelector(".btMain");
const pageCheck = document.querySelector(".ajax-show");
const codeList = document.querySelector(".code-list");

// page2
const clockJsGreetings = document.querySelector(".clock-js-greetings");
const clockJsQuotes = document.querySelector(".clock-js-quotes");
const clockJsClock = document.querySelector(".clock-js-clock");
const clockJsBackground = document.querySelector(".clock-js-background");
const clockJsTodo = document.querySelector(".clock-js-todo");
const clockJsWeather = document.querySelector(".clock-js-weather");
const clockHtmlCode = document.querySelector(".code-html");
//
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
      "html_code.html"
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
    pageCheck.style.textAlign = "center";
    lock.main();
  } else if (codeCheck) {
    change(`pages/${slideFolderName}/codePages/${slideCodeFileName}`);
    if (pageCheck.classList[1] == "1-page") {
      codeList.classList.remove("code-hidden");
    }
    pageCheck.style.backgroundImage = "url('')";
    pageCheck.style.textAlign = "left";
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

function clockAddEvent(e) {
  // console.dir(e.target.innerHTML);
  if (e.target.innerHTML == "greetings.js") {
    change(`pages/web_study2/codePages/greetings_code.html`);
  } else if (e.target.innerHTML == "quotes.js") {
    change(`pages/web_study2/codePages/quotes_code.html`);
  } else if (e.target.innerHTML == "clock.js") {
    change(`pages/web_study2/codePages/clock_code.html`);
  } else if (e.target.innerHTML == "background.js") {
    change(`pages/web_study2/codePages/background_code.html`);
  } else if (e.target.innerHTML == "todo.js") {
    change(`pages/web_study2/codePages/todo_code.html`);
  } else if (e.target.innerHTML == "weather.js") {
    change(`pages/web_study2/codePages/weather_code.html`);
  } else if (e.target.innerHTML == "html") {
    change(`pages/web_study2/codePages/html_code.html`);
  }
}

buttonCode.addEventListener("click", clickCode);
buttonMain.addEventListener("click", clickMain);
clockJsBackground.addEventListener("click", clockAddEvent);
clockJsClock.addEventListener("click", clockAddEvent);
clockJsGreetings.addEventListener("click", clockAddEvent);
clockJsQuotes.addEventListener("click", clockAddEvent);
clockJsTodo.addEventListener("click", clockAddEvent);
clockJsWeather.addEventListener("click", clockAddEvent);
clockHtmlCode.addEventListener("click", clockAddEvent);

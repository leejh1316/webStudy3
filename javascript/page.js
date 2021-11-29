const buttonCode = document.querySelector(".btCode");
const buttonMain = document.querySelector(".btMain");
const pageCheck = document.querySelector(".ajax-show");
const codeList = document.querySelector(".code-list");

//page1
const codeListPage1 = document.querySelector(".code-list2");
const vendingPyMain = document.querySelector(".vending_code_main");
const vendingPyNfc = document.querySelector(".vending_code_nfc");
const vendingPyMotor = document.querySelector(".vending_code_motor");
const vendingPyAudio = document.querySelector(".vending_code_audio");
const vendingPyLed = document.querySelector(".vending_code_led");
const vendingPyDb = document.querySelector(".vending_code_database");
// page2
const clockJsGreetings = document.querySelector(".clock-js-greetings");
const clockJsQuotes = document.querySelector(".clock-js-quotes");
const clockJsClock = document.querySelector(".clock-js-clock");
const clockJsBackground = document.querySelector(".clock-js-background");
const clockJsTodo = document.querySelector(".clock-js-todo");
const clockJsWeather = document.querySelector(".clock-js-weather");
const clockHtmlCode = document.querySelector(".code-html");
const clockCssCode = document.querySelector(".code-css");
//
const SLIDE_MAIN = "slidemain.html";
const SLIDE_CODE = "slidecode.html";
let mainLock = true;
let codeLock = false;

function changePage(mainCheck, codeCheck) {
  if (pageCheck.classList[1] == "0-page") {
    ifElsePage(
      mainCheck,
      codeCheck,
      "Slide1",
      "vending_machine.html",
      "main.html"
    );
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
    codeListPage1.classList.add("code-hidden");
    pageCheck.style.textAlign = "center";
    lock.main();
  } else if (codeCheck) {
    change(`pages/${slideFolderName}/codePages/${slideCodeFileName}`);
    if (pageCheck.classList[1] == "0-page") {
      codeListPage1.classList.remove("code-hidden");
      codeList.classList.add("code-hidden");
    }
    if (pageCheck.classList[1] == "1-page") {
      codeList.classList.remove("code-hidden");
      codeListPage1.classList.add("code-hidden");
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
  } else if (e.target.innerHTML == "css") {
    change(`pages/web_study2/codePages/css_code.html`);
  }
}

function vendingAddEvent(e) {
  if (e.target.innerHTML == "main") {
    change(`pages/Slide1/codePages/main.html`);
  } else if (e.target.innerHTML == "nfc") {
    change(`pages/Slide1/codePages/nfc.html`);
  } else if (e.target.innerHTML == "motor") {
    change(`pages/Slide1/codePages/motor.html`);
  } else if (e.target.innerHTML == "audio") {
    change(`pages/Slide1/codePages/audio.html`);
  } else if (e.target.innerHTML == "led") {
    change(`pages/Slide1/codePages/led.html`);
  } else if (e.target.innerHTML == "database") {
    change(`pages/Slide1/codePages/database.html`);
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
clockCssCode.addEventListener("click", clockAddEvent);
vendingPyMain.addEventListener("click", vendingAddEvent);
vendingPyNfc.addEventListener("click", vendingAddEvent);
vendingPyMotor.addEventListener("click", vendingAddEvent);
vendingPyAudio.addEventListener("click", vendingAddEvent);
vendingPyLed.addEventListener("click", vendingAddEvent);
vendingPyDb.addEventListener("click", vendingAddEvent);

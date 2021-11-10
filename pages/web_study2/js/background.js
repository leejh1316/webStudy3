var imgs = ["0.jpg", "1.png", "2.jpg", "3.jpg"];
var randomImg = imgs[Math.floor(Math.random() * imgs.length)];
var bgImg = document.createElement("img");
var clockClassAdd = document.querySelector("#clock");
var backGridImg = document.querySelector(".ajax-show");
var login = document.querySelector(
  ".grid-container-item1-box-item-login-greeting"
);
var todolistColor = document.querySelector(
  ".grid-container-item1-box-item-todo-list-show"
);
var clockClass = {
  init: function () {
    if (clockClassAdd.className)
      clockClassAdd.classList.remove(clockClassAdd.className);
  },
  addClass: function () {
    clockClassAdd.classList.add(randomImg);
  },
};

console.log(login.className[1]);
if (randomImg === "0.jpg") {
  login.classList.add("set-black-color");
  todolistColor.classList.add("set-add-color");
} else {
  login.classList.add("set-white-color");
  todolistColor.classList.add("set-white-color");
}

bgImg.classList.add("bgImg");
bgImg.src = `pages/web_study2/img/${randomImg}`;
var urlLoc = `pages/web_study2/img/${randomImg}`;
// backGridImg.append(bgImg);
backGridImg.style.backgroundImage = `url('${urlLoc}')`;
backGridImg.style.backgroundSize = "cover";
// clockClass.init();
clockClass.addClass();
console.dir(bgImg);
console.dir(clockClassAdd);

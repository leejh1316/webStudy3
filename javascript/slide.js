const slideAll = document.querySelectorAll(".swiper-slide");
const hiddenAll = document.querySelectorAll(".hidden-slide-item");
const buttonAll = document.querySelectorAll(".btn-open");
const openPage = document.querySelector(".grid-container");
const closePage = document.querySelector(".close-btn");
const pageShow = document.querySelector(".ajax-show");
const slideHidden = document.querySelector(".swiper");
let checkOpen;
let btIndex;
let index;

//중복제거용
const CLICK_STYLE = "click-style";
const HIDDEN_ITEM = "hidden-slide-item";
const OPEN_PAGE = "open-page";
//swiper사용
const swiper = new Swiper(".mySwiper", {
  loop: false,
  centeredSlides: true,
  slidesPerView: "auto",
  grabCursor: true,
  slideToClickedSlide: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  on: {
    init: function () {
      console.log("swiper initialized");
    },
  },
});

swiper.on("click", function () {
  const selectSlide = slideAll[this.clickedIndex];
  const selectHidden = hiddenAll[this.clickedIndex];
  index = this.clickedIndex;
  const checkClass = classFunctions.location(
    selectSlide.classList, //selectClass
    CLICK_STYLE //findClassName
  );
  //true 값이 반환되면 if문 실행, false일때 실행 안함
  if (checkClass) {
    selectSlide.classList.remove(CLICK_STYLE);
    selectHidden.classList.add(HIDDEN_ITEM);
  } else {
    if (!checkOpen) {
      classFunctions.removeStyleAll(slideAll, CLICK_STYLE);
      classFunctions.addStyleAll(hiddenAll, HIDDEN_ITEM);
      selectHidden.classList.remove(HIDDEN_ITEM);
      selectSlide.classList.add(CLICK_STYLE);
    }
  }
});

swiper.on("sliderMove", function () {
  classFunctions.removeStyleAll(slideAll, CLICK_STYLE);
  classFunctions.addStyleAll(hiddenAll, HIDDEN_ITEM);
});

const classFunctions = {
  removeStyleAll: function (elementAll, removeClass) {
    for (let i = 0; i < elementAll.length; i++) {
      elementAll[i].classList.remove(removeClass); //swiper-slide에서 선택된 클래스를 지우기
    }
  },
  addStyleAll: function (elementAll, addClass) {
    for (let i = 0; i < elementAll.length; i++) {
      elementAll[i].classList.add(addClass); //swiper-slide에서 선택된 클래스를 지우기
    }
  },
  location: function (selectClass, findClassName) {
    for (let i = 0; i < selectClass.length; i++) {
      if (selectClass[i] === findClassName) {
        //i가 반복될동안 findClassName의 값을 찾으면 true 반환
        return true;
      }
    }
    return false; //값을 찾지 못할시 false 반환
  },
};

const buttonFunctions = {
  click: function (e) {
    const selectSwiperSlide = e.target.parentElement.parentElement;
    const findPage = findFetchPage(index);
    btIndex = index;
    if (classFunctions.location(selectSwiperSlide.classList, OPEN_PAGE)) {
      selectSwiperSlide.classList.remove(OPEN_PAGE);
      checkOpen = false;
    } else {
      selectSwiperSlide.classList.add(OPEN_PAGE);
      pageShow.classList.add(`${btIndex}-page`);
      fetchPage(findPage);
      openPage.classList.remove("grid-hidden");
      openPage.classList.add("fade-in");
      checkOpen = true;
      slideHidden.classList.add(HIDDEN_ITEM);
    }
  },
  addEvent: function () {
    for (let i = 0; i < buttonAll.length; i++) {
      buttonAll[i].addEventListener("click", buttonFunctions.click);
    }
  },
  removeEvent: function (elementAll, type, listener) {
    for (let i = 0; i < elementAll.length; i++) {
      elementAll[i].removeEventListener(type, listener);
    }
  },
};

function findFetchPage(index) {
  if (index == 0) {
    return "pages/Slide1/slidemain";
  } else if (index == 1) {
    return "pages/web_study2/web_study2.html";
  } else if (index == 2) {
    return "pages/Slide3/slidemain";
  }
}
function fetchPage(url) {
  $.ajax({
    type: "get",
    url: url,
    success: function (fileLocation) {
      $(".ajax-show").html(fileLocation);
    },
  });
}

function closePageEvent() {
  openPage.classList.add("grid-hidden");
  classFunctions.removeStyleAll(slideAll, OPEN_PAGE);
  pageShow.classList.remove(`${btIndex}-page`);
  lock.init();
  checkOpen = false;
  pageShow.innerHTML = "";
  slideHidden.classList.remove(HIDDEN_ITEM);
  slideHidden.classList.add("slide-fade-in");
  pageShow.style.backgroundImage = "url('')";
}
closePage.addEventListener("click", closePageEvent);
buttonFunctions.addEvent();

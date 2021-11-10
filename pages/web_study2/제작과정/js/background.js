const imgs = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];
const randomImg = imgs[Math.floor(Math.random()*imgs.length)];
const bgImg = document.createElement("img");
const clockClassAdd = document.querySelector("#clock");
const clockClass = {
    init : function(){
        if(clockClassAdd.className)
            clockClassAdd.classList.remove(clockClassAdd.className)
    },
    addClass : function(){
        clockClassAdd.classList.add(randomImg)
    }
}

bgImg.classList.add('bgImg');
bgImg.src = `img/${randomImg}`;
document.body.appendChild(bgImg);
// clockClass.init();
clockClass.addClass();
console.dir(bgImg);
console.dir(clockClassAdd);

 
const clock = document.querySelector("#clock");
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    if(hours>=13){
        time12hour=hours;
        time12hour=time12hour-12
        clock.innerHTML = `오후 ${time12hour}:${min}`;
    }
    else{
        clock.innerHTML = `오전 ${hours}:${min}`;
    }
    // const sec = String(date.getSeconds()).padStart(2,"0"); 
    //`${hours}:${min}:${sec}`;
}
getClock();
setInterval(getClock,1000);
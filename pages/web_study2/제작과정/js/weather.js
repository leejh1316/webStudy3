const API_KEY = "caca40f14c5b311ca0c6dacbb3305aaf"
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const country = document.querySelector('#weather #conutry');
        const city = document.querySelector('#weather span:last-child');
        weather.innerHTML = data.weather[0].main;
        country.innerHTML = data.sys.country;
        city.innerHTML = data.name;
    });
    console.log(url)
}
function onGeoError(){
    alert("위치를 찾지 못했습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
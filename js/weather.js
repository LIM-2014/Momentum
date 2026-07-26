const API_KEY = "ee14d076297bf7cdbbdfb9e7e3562bbf";

function geoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //I tried to connect api, but it was not working. Also I couldn't do anything because it was 1:20 am. If I wake up early and if I can fix it, I will tired to fix it.
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#city span:last-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
    console.log(lat, lon);
}

function geoError() {
    alert("위치 권한을 허용해주세요.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

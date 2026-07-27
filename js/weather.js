const API_KEY = "ee14d076297bf7cdbbdfb9e7e3562bbf";

function geoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const cityElement = document.querySelector("#city");
            const tempElement = document.querySelector("#temp");

            cityElement.innerText = data.name;
            tempElement.innerText = `${data.main.temp}°C · ${data.weather[0].main}`;
        })
        .catch(() => {
            alert("날씨 정보를 불러오지 못했습니다.");
        });
}

function geoError() {
    alert("위치 권한을 허용해주세요.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

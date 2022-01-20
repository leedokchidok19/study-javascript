/*
API
URL : https://openweathermap.org/
*/

const API_KEY = '';

function onGeoOk(position) {
    const lat = position.coords.latitude;//위도
    const lon = position.coords.longitude;//경도
    console.log('you live in', lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');

            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert('Cant find you. No weather for you.');
}

if(API_KEY !== '') {
    //getCurrentPosition('성공했을 때 호출 함수', '실패했을 때 호출 함수')
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

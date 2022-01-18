const clock = document.querySelector('h2#clock');

function getClcok() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClcok();
setInterval(getClcok, 1000);
//입력한 시간에 한 번만 실행
//setTimeout(getClcok, 5000);

// padStart(자릿수, 채워 넣을 문자열)
//"1".padStart(2, "0");
//"01"
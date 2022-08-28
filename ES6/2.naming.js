// 주석
/*
여러 줄 주석
다음 줄로 자동으로 넘어감
*/

/**
* 변수규칙
* 라틴문자(0-9, a-z, A-Z), _
* 대소문자 구분
* 추천 :camelCase 예) likeThis
* 변수는 한국어로 사용하지 않는다
* 예약어는 변수로 사용하지 않는다
* 숫자로 시작 X
* 특수문자 X (_, $ 두가지는 예외)
* 이모지 X
* 여러개의 변수를 1, 2, 3, 숫자로 구분 X
    최대한 의미있게, 구체적인 이름으로 작성
    예) audio1, audio2 -> backgroundAudio, windAudio
* 명사
*/

let a;
let redApple;//camelCase formet

//나쁜 예제 - 변수만으로 의미를 알 수 없는 것
let num =0;
let number = 20;

//좋은 예제 - 의미를 알 수 있게 naming
//number -> myAge
let myAge = 20;

//나쁜 예제 - 구체적이지 않은 이름
let audio1;
let audio2;

//좋은 예제 - 구체적인 이름
let backgroundAudio;
let windAudio;

//꿀팁 - 연관있는 변수들의 경우 검색하기 편하게
//       앞글자를 키워드로 사용
let audioaBckground;
let audioWind;

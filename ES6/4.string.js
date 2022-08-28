//문자열타입
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

//특수 문자 출력하는 법
//따옴표를 사용하고 싶은 경우
string = '"안녕!"';
console.log(string);
string = "'안녕!'";
console.log(string);

//줄바꿈(\n)
string = '안녕!\n자바스크립트야!';
console.log(string);

//탭(\t)
string = '안녕!\n자바스크립트야!\t\t내 이름은';
console.log(string);

//백슬래시(\\)
string = '안녕!\n자바스크립트야!\t\t내 이름은\\';
console.log(string);

//유니코드(\유니코드)
string = '안녕!\n자바스크립트야!\t\t내 이름은\\\u09AC';
console.log(string);

/*
긴 문자열 리터럴
역슬래시 문자("\")를 각 줄의 맨 끝에 붙여 문자열이 이어진다는걸 표시할 수도 있습니다.
역슬래시 다음에 공백을 포함한 어떤 문자라도 붙으면 제대로 작동하지 않으므로 주의해야 합니다.
*/
let longString = "여러 줄에 걸쳐 작성해야 할 정도로 \
긴 문자열인데 왜 한 줄에 다 적으면 안되냐면 \
코드를 읽기 힘들어지니까요.";
console.log(longString);

//템플릿 리터럴(Template Literal) -> ``
let id = '자바스크립트';
let greetings = "'안녕!," + id + "\n즐거운 하루 보내요!'";
console.log(greetings);

greetings = `'안녕!, ${id}
즐거운 하루 보내요!'`;
console.log(greetings);
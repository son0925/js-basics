// js은 html의 종속된 언어이다
// 웹 페이지에서의 동작을 책임진다
// 브라우저가 소스 코드를 직접 해석하여 순차적으로 실행하는 인터프리터 언어이다
// V8엔진이라는 뛰어난 엔진으로 인해 html뿐만 아니라 다른 환경에서도 사용할 수 있게 되었다



// 넷스케이프의 브렌던 아이크가 개발
// 처음에는 라이브스크립트라는 이름이였다
// 최신버전은 자바스크립트 ES6(2015)

// 인터프리트 언어
// 동적 타이핑
// 구조적 프로그래밍 지원
// 객체 기반 - 자바스크립트는 객체 지향 언어이다.
// 최근에는 class 키워드도 사용할 수 있다
// 함수형 프로그래밍 지원 - 자바스크립트에서 함수는 일급 객체이다
// 즉 함수는 그 자체로 객체이다. 람다식도 지원한다

// 자바 스크립트 용도
// 1. html 콘텐츠를 동적으로 변경할 수 있다
// 2. 이벤트에 반응하는 동작을 구현할 수 있다.
// 3. html 요소들의 속성을 동적으로 변경할 수 있다
// 4. html 요소를 표시하거나 숨길 수 있다
// 5. 사용자가 입력한 값들을 검증하는 작업도 JS를 이용한다
// 6. 게임이나 애니메이션과 같은 상호대화적인 콘텐츠를 구현할 수 있다


// 예제 
// 마우스를 이미지 위로 올리면 이미지가 커지게 하는 코드 작성
// function hoverImage(el) {
//   el.style.width = '500px';
// }
// function leaveImage(el) {
//   el.style.width = '300px'
// }


// JS는 웹 페이지를 위한 언어였지만
// node js처럼 자바스크립트를 서버 프로그래밍 언어로 변화시키려는 시도가 진행되고 있다
// 현재의 웹 프로그래밍 기술에서 자바스크립트는 아주 중요한 역할을 하고 있다.

// JS는 CSS와 마찬가지로 3가지 방법으로 HTML 문서에 삽입될 수 있다
// 1. 내부 JS
// 2. 외부 JS
// 3. 인라인 JS


// ※ document.write() document객체의 write 메소드를 호출하는 문장이다
// document객체는 웹페이지를 나타내는 객체이다
// document.write()는 동적으로 html 파일의 콘텐츠를 생성하는 메소드다

// 자바스크립트 삽입 방법

// 내부 JS
// <head> 태그 안에 <script> 태그를 만들어 삽입하는 방식이다
// 예제:
{/* <head>
  <script>
    console.log('hi');
  </script>
</head> */}

// 외부 JS
// <head> 태그 안에 <script> 태그의 src 속성으로 경로를 표기하는 방법이다
// 예제:
{/* <head>
  <script src="경로"></script>
</head> */}

// 인라인 JS
// <body> 태그 안에 JS 속성을 추가하는 것이다
// 예제:
{/* <body>
  <button onclick="alert('hello')">Click me</button>
</body> */}

// head, body에 js 삽입 차이점
// head에 js 삽입
// 장점
// 구조적인 분리가 되어 가독성이 좋아진다
// 단점
// js가 먼저 실행이 된 후 html이 파싱되어 속도가 현저히 떨어진다
// dom객체가 생성되기 전이기 때문에 dom객체를 js가 인식하지 못한다

// body에 js 삽입
// 장점
// html이 파싱된 후 js가 실행되어 속도가 빠른 것 처럼 보인다
// dom객체를 js가 인식할 수 있다
// 단점
// 구조적인 분리가 되지 않는다

// 해결 방법
// script 태그 안에 defer라는 속성을 주어 html 파싱 후 실행이 되게 바꾼다
// 옛날 브라우저는 defer를 지원하지 않는다는 단점이 있지만
// 하지만 이러한 문제점은 대부분의 브라우저가 defer를 지원하기 때문에 사소하다


// 변수 선언
// 1. var
// 2. let
// 3. const

// var
// 가장 오래된 변수 선언 키워드

// 1. 함수 스코프 특징
// var로 선언된 변수는 함수 스코프를 가진다
// 즉 함수 내에서 선언된 변수는 함수 내부 어디서든 접근 가능
// 함수 외부에서 선언된 변수는 전역 스코프를 가진다

// 2. 호이스팅
// var 변수는 선언과 동시에 undefined로 초기화되며, 스코프의 최상위로 올려지는 호이스팅 발생
// 선언 전에 변수를 참조해도 에러 발생하지 않는다

// 3. 재선언 가능
// 같은 스코프 내에서 var 변수를 다시 선언 가능
// 코드의 가독성과 유지보수성을 떨어뜨릴 수 있다
// 이러한 문제 때문에 현대에서는 거의 사용하지 않는다


// let
// ES6에 도입된 변수 선언 키워드

// 1. Block Scope
// 블록 스코프를 가진다
// 변수는 해단 블록 {} 내에서만 유효하다
// 블록은 함수 조건문 반복문등 여러곳에서 사용할 수 있다

// 2. Hoisting
// let 변수도 호이스팅 되지만 초기화되지 않은 상태로 호이스팅된다
// 따라서 변수를 선언하기 전에 참조하면 ReferenceError 발생

// 3. 재선언 불가
// 같은 스코프 내에서 let 변수를 다시 선언 할 수 없다
// 가독성과 유지보수성을 높인다


// const
// ES6에 도입된 변수로 상수 Constant를 선언할 때 사용

// 1. Block Scope
// let과 마찬가지로 블록 스코프를 가진다

// 2. 호이스팅
// 초기화 되지 않은 상태로 호이스팅
// 똑같이 변수 선언 전에 참조시 ReferenceError 발생

// 3. 재선언 및 재할당 불가
// 상수를 선언하는 변수이기 때문에 재할당 불가하다
// 단 객체, 배열같은 참조 타입의 경우, 객체 속성, 배열 요소는 변경 가능



// 데이터 타입
// Number 정수나 실수가 될 수 있다
// String 문자들이 연결된 것을 의미한다. 텍스트라고 생각하면 된다
// boolean true, false 값만 가질 수 있다
// object 객체를 나타내는 타입이다
// undefined 변수는 선언되었지만 아직 값이 정해지지 않은 상태


// Number
// 수치형은 정수 혹은 실수가 가능하다
// 실수는 e를 사용하여 지수형으로 표시할 수 있다

// let x = 123.00 // 실수
// let y = 123    // 정수
// let z1 = 123e3 // 123000
// let z2 = 123e-3 // 0.123

// console.log(x)
// console.log(y)
// console.log(z1)
// console.log(z2)


// boolean
// let x = (20 > 10) // true
// let y = (20 < 10) // false


// String
// 큰따움표, 작은따움표 둘다 선언이 가능하다
// let s1 = "abc"
// let s2 = 'abc'
// let s3 = "안녕은 'Hello'"



// 템플레이트 리터럴
// js에서 문자열 안에 변수값을 넣을려면 `...%{expression}...` 형태의 문자열을 사용한다
// 백틱기호를 사용한 문자열은 ES6버전에서 추가된 것으로 템플릿 리터럴이라고 한다
// `Hello ${x}번`


// 객체
// object는 사물의 속성과 동작을 묶어서 표현하는 기법

// let myCar = {
//   model: 'bmw',
//   color: 'red',
//   hp: 100
// }

// document.write(myCar.model + '<br>')
// document.write(myCar.color + '<br>')
// document.write(myCar.hp + '<br>')




// 연산자
// + 덧셈
// - 뺄셈
// * 곱셈
// / 나눗셈
// % 나머지
// ++ 1증가
// -- 1감소

// 비교 연산자
// == 값이 같으면 참
// != 값이 다르면 참
// > 크면 참
// < 작으면 참
// >= 크거나 같으면 참
// <= 작거나 같으면 참
// === 타입과 값이 같아야 참
// !== 타입 혹은 값 둘중 한개가 틀리면 참
// x && y x와 y 둘다 참이면 참
// x || y x 혹은 y 하나가 참이면 참
// !x x가 false면 참



// prompt() 함수
// 사용자에게 어떤 사항을 알려주고 사용자가 '답변'을 입력할 수 있는 화면을 띄운다
// 사용자가 입력한 내용을 문자열로 반환

// let age = prompt('나이를 입력해주세요') // 문자열로 반환된다
// console.log(age)
// console.log(typeof(age))    // string


// confirm() 함수 
// 사용자에게 어떤 사항을 알려주고 true, false를 반환 받는다

// let check = confirm('동의하시겠습니까?')
// console.log(check)
// console.log(typeof(check))


// 예제
// 사용자가 입력한 값을 출력하기
// let userName = prompt('이름을 입력해주세요')
// document.write(`사용자의 이름은 ${userName}입니다`)

// 예제
// 덧셈 프로그램
// let x = Number(prompt('첫번째 숫자'))
// let y = Number(prompt('두번째 숫자'))
// alert(x+y)


// HTML 문서에 쓰기
// 페이지가 로딩된 후에 document.write를 호출하면 전체 HTML 페이지가 다시 쓰여진다
// 이전에 만들어졌던 요소들이 전부 삭제된다
// 중요한 점은 페이지 로딩 "중"에 write를 하면 쓰여지지 않고 추가로 적힌다
// function 으로 write를 로딩 후에 실행시 덮어진다

// 조건문
// if..else
// switch

// 반복문
// while 몇번 반복할 모르고 특정 조건에 만족할 때까지 반복할때
// for 몇번인지 횟수가 정해진 반복문
// do while 한번은 무조건 실행하고 그 후부터 조건에 따라 반복하기
// break 반복문중 조건에 맞으면 반복문 종료
// continue 해당 조건이 맞을 때 끝까지 명령어를 실행하지 않고 첫 명령어로 돌아가 다음 순서 실행

// 함수
// function 함수이름(인자, 매개변수) {
//   함수 몸체
// }
// 함수이름(인수1, 인수2) 호출 방법

// 무명함수
// 함수 이름을 주지 않고 만들어서 한번만 사용하는 경우
// let greeting = function() {}

// 화살표 함수
// () => {} 자바 언어의 람다식과 유사하다


// 지역 변수와 전역 변수
// 함수 안에서 선언된(함수 스코프)는 지역 변수가된다
// 함수 외부에서 선언된 변수는 전역 변수이다



// 객체 지향 프로그래밍 OOP
// 객체는 데이터와 동작을 가지고 있다
// 데이터는 특성 값이다
// 메소드 동작, 속성(property)

// 내장 객체: 자바스크립트에 내장된 객체
// Date, String, Array와 같은 객체들이 내장객체이다
// 사용자 정의 객체: 개발자가 정의하여 사용하는 객체이다

// 내장 객체는 핵심객체와 DOM, BOM 객체로 나눌 수 있다
// 핵심 객체 : 기본적인 객체인 Date, String, Array들이 핵심 객체이다

// DOM: 브라우저가 HTML문서를 파싱하여 각 요소들을 객체 트리로 정의한것
// BOM: 브라우저의 종류나 크기등의 정보를 제공하는 객체

// 객체 생성
// new 키워드를 사용한다
// let today = new Date()
// let books = new Array("HTML", "JAVA", "C")

// 객체 멤버 사용하기
// dot . 을 사용한다
// today.getDate()

// Date 객체
// 날짜와 시간을 저장하고 있는 객체이다
// 내장 객체중 Date 객체는 상당히 많이 사용된다
// let date = new Date()
// let date = new Date('August 24, 2023 18:30:00')
// let date = new Date(2023,7,21)
// document.write(date)


// Date 객체 메소드
// let date = new Date();
// document.write(date.getDate() + "<br>") // 몇일
// document.write(date.getDay() + "<br>")  // 요일을 숫자로 표현
// document.write(date.getFullYear() + "<br>") // 4자리 년도
// document.write(date.getHours() + "<br>")  // 시간 0~23
// document.write(date.getMilliseconds() + "<br>") // 밀리초
// document.write(date.getMinutes() + "<br>") // 몇 분
// document.write(date.getMonth() + "<br>") // 몇 월
// document.write(date.getSeconds() + "<br>") // 몇 초


// 날짜 비교
// const date1 = new Date('2024/06/15')
// const dateNow = new Date('2024/06/16');
// document.write((dateNow - date1))   // 밀리세컨드로 빼져있음


// String 객체
// String 객체는 텍스트를 저장하고 조작하는 개게로 아주 많이 사용된다
// 문자열에는 2가지 종류가 있다
// 문자열 리터럴, 문자열 객체
// 리터럴은 따옴표
// 객체는 new

// let s1 = 'abc'
// let s2 = new String('abc')
// console.log(s1)
// console.log(s2)
// console.log(typeof(s1))
// console.log(typeof(s2))


// 문자열 길이와 개별 문자 접근
// let length = 'abc'.length
// let ch = 'abc'[1]

// String 객체 메소드
// let s = 'abcde'
// document.write(s.charAt(1) + "<br>")   // 지정된 위치의 문자를 반환한다
// document.write(s.indexOf('c') + "<br>")  // 지정된 문자의 index를 반환 없으면 -1을 반환
// document.write(s.replace('c', 'f') + "<br>")   // 지정된 값을 대체값으로 반환
// document.write(s.slice(2,4) + "<br>")      // 시작 및 끝 인덱스를 기반으로 일부 추출 새 문자열 반환
// document.write(s.substring(2,4) + "<br>")
// document.write(s.toUpperCase() + "<br>")
// document.write(s.split('') + "<br>")
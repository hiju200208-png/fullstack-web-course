// 1. 함수 기본 실습 (매개변수와 반환값)
function greet(name) {
    return `안녕하세요, ${name}님! 환영합니다.`;
}

const message = greet('김코딩');
console.log(message);

// 화면에 인사말 출력하기
const greetingBox = document.getElementById('greeting-box');
greetingBox.innerHTML = `<p><strong>${message}</strong></p>`;


// 2. 객체(Object)와 배열(Array) 데이터 구조
const users = [
    { id: 1, name: '김철수', age: 25, isActive: true },
    { id: 2, name: '이영희', age: 30, isActive: false },
    { id: 3, name: '박민수', age: 28, isActive: true },
    { id: 4, name: '최지우', age: 24, isActive: false }
];


// 3. map() 활용: 모든 회원의 정보를 HTML 문자열 배열로 변환
const userListEl = document.getElementById('user-list');

const userHtmls = users.map(user => {
    return `<li>이름: ${user.name} / 나이: ${user.age}세</li>`;
});

userListEl.innerHTML = userHtmls.join('');


// 4. filter() 활용: 활성 회원만 골라내기
const activeUserListEl = document.getElementById('active-user-list');
const activeUsers = users.filter(user => user.isActive);

const activeUserHtmls = activeUsers.map(user => {
    return `<li>활성 회원 이름: ${user.name}</li>`;
});

activeUserListEl.innerHTML = activeUserHtmls.join('');


// 5. 확인 버튼 클릭 시 나이와 이름 출력 + 인사말 변경
const confirmBtn = document.getElementById('confirm-btn');

confirmBtn.addEventListener('click', function() {
    const age = document.getElementById('age').value.trim();
    const name = document.getElementById('name').value.trim();

    // 입력한 이름으로 인사말 변경
    const newMessage = greet(name);
    greetingBox.innerHTML = `<p><strong>${newMessage}</strong></p>`;

    // 나이와 이름을 alert로 출력
    alert(`나이: ${age}세, 이름: ${name}`);
});
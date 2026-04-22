const API = 'http://localhost:8081/api/members';

async function handleLogin() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    const res = await fetch(`${API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, password })
    });

    if (res.ok) {
        const data = await res.json();
        alert(`환영합니다, ${data.name}님!`);
    } else {
        alert('아이디 또는 비밀번호가 틀렸습니다.');
    }
}

async function handleRegister() {
    const userId = document.getElementById('regUserId').value;
    const password = document.getElementById('regPassword').value;
    const name = document.getElementById('regName').value;

    const res = await fetch(`${API}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, password, name })
    });

    if (res.ok) {
        alert('회원가입 성공! 로그인 해주세요.');
    } else {
        alert('회원가입 실패');
    }
}
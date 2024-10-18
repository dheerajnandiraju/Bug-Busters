document.getElementById('student-btn').addEventListener('click', () => {
    localStorage.setItem('userType', 'student');
    window.location.href = '../signin/signin.html';
});

document.getElementById('mentor-btn').addEventListener('click', () => {
    localStorage.setItem('userType', 'mentor');
    window.location.href = '../signin/signin.html';
});

document.getElementById('signin-btn').addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the form from submitting
    window.location.href = '../login/login.html'; // Navigates to the login page
});

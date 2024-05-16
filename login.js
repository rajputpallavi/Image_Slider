function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.indexOf('@') === -1) {
        console.log('Invalid email address entered.');
        alert('Please enter a valid email address.');
        return;
    }
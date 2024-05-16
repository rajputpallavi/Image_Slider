function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.indexOf('@') === -1) {
        console.log('Invalid email address entered.');
        alert('Please enter a valid email address.');
        return;
    }
    
    if (password.length < 8) {
        console.log('Password must be at least 8 characters long.');
        alert('Password must be at least 8 characters long.');
        return;
    }

    console.log('Email and password entered successfully.');
    window.location.href = 'another-page.html';
}

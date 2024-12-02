document.getElementById('register').addEventListener('click', function() {
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
    let errors = '';

    if (password !== confirmPassword) {
        errors += '<p>Passwords do not match.</p>';
    }

    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        errors += '<p>All fields are required.</p>';
    }

    if (errors !== '') {
        document.getElementById('registration-errors').innerHTML = errors;
    } else {
        const user = { email: email, password: password };
        localStorage.setItem(email, JSON.stringify(user));
        alert('Registration successful! Redirecting to login page.');
        window.location.href = 'login.html';
    }
});

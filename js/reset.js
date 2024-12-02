document.getElementById('reset-password').addEventListener('click', function() {
    const email = document.getElementById('reset-email').value;
    const newPassword = document.getElementById('new-password').value;
    let errors = '';

    const user = JSON.parse(localStorage.getItem(email));

    if (!user) {
        errors += '<p>User not found.</p>';
    } else {
        user.password = newPassword;
        localStorage.setItem(email, JSON.stringify(user));
        alert('Password reset successful! Redirecting to login page.');
        window.location.href = 'login.html';
    }

    if (errors !== '') {
        document.getElementById('reset-errors').innerHTML = errors;
    }
});

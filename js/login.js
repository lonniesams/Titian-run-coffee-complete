
document.getElementById("login").addEventListener("click", function () {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (email === "admin" && password === "test123") {
        alert("Login successful! Redirecting to sales page.");
        document.getElementById("sales-link").style.display = "inline-block";
        window.location.href = "sales.html";
    } else {
        const user = JSON.parse(localStorage.getItem(email));
        let errors = "";

        if (!user || user.password !== password) {
            errors += "<p>Invalid email or password. Please try again.</p>";
        }

        if (errors !== "") {
            document.getElementById("login-errors").innerHTML = errors;
        } else {
            alert("Login successful! Redirecting to menu page.");
            window.location.href = "menu.html";
        }
    }
});

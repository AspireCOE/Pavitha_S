function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect to dashboard or homepage
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

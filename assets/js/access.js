// check user login or not
const userId = JSON.parse(localStorage.getItem("bb-user-id"));
if (!userId) {
    window.location.href = "login.html"; // if no logged in, redirect to login page
}

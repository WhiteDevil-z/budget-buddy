// Register a service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("sw.js")
        .then((registration) => {
            // console.log("Service Worker registered:", registration);
        })
        .catch((error) => {
            console.error("Service Worker registration failed:", error);
        });
}

const database = firebase.database();

// create account
function signUp(e) {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const form = document.getElementById("sign-up-form");

    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            localStorage.setItem("bb-user-id", JSON.stringify(user.uid));
            writeUserData(uid, firstName, lastName, email);
            form.reset();
            window.location.href = "index.html";
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
}

// save user data
function writeUserData(userId, firstName, lastName, email) {
    firebase
        .database()
        .ref("users/" + userId)
        .set({
            firstName: firstName,
            lastName: lastName,
            email: email,
        });
}

// Login in account
function signIn(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const form = document.getElementById("log-in-form");

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            localStorage.setItem("bb-user-id", JSON.stringify(user.uid));
            form.reset();
            window.location.href = "index.html";
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}

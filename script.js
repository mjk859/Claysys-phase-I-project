
function validateEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.")
    }
}

function confirmPassword() {
    const passwordInput = document.getElementById('pswd');
    const cPasswordInput = document.getElementById('confpswd');
    const passwordError = document.getElementById("passwordError");
    const inputPassword = passwordInput.value;
    const inputConfirmPassword = cPasswordInput.value;
    if (inputPassword !== inputConfirmPassword) {
        passwordError.textContent = "Passwords do not match.";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

function validateName() {
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
    }
}

function validateMessage() {
    if (messageInput.value.trim() === '') {
        alert('Please enter a message.');
    }
}

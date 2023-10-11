
function validateEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.")
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('pswd');

    const password = passwordInput.value.trim();
    const passwordStrength = calculatePasswordStrength(password);

    if (passwordStrength < 2) {
        alert("Password must be at least moderately strong.");
        passwordInput.focus();
    }
}

function calculatePasswordStrength(password) {
    // Define your criteria for password strength here.
    // You can customize these rules based on your requirements.
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

    let strength = 0;

    if (password.length >= minLength) {
        strength++;
    }

    if (hasUpperCase) {
        strength++;
    }

    if (hasLowerCase) {
        strength++;
    }

    if (hasNumbers) {
        strength++;
    }

    if (hasSpecialChars) {
        strength++;
    }

    return strength;
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

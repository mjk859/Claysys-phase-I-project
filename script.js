
function validateEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailError = document.getElementById("emailError");
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email id.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validateUsername() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const userNameError = document.getElementById("userNameError");
    if (!emailPattern.test(username)) {
        userNameError.textContent = "Please enter a valid email id.";
        return false;
    } else {
        userNameError.textContent = "";
        return true;
    }
}

function validateLPassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById("passwordError");
    const password = passwordInput.value.trim();
    const passwordStrength = calculatePasswordStrength(password);

    if (passwordStrength < 2) {
        passwordError.textContent = "Incorrect password.";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById("passwordError");
    const password = passwordInput.value.trim();
    const passwordStrength = calculatePasswordStrength(password);

    if (passwordStrength < 2) {
        passwordError.textContent = "Password must be moderately strong.";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
    
}

function calculatePasswordStrength(password) {
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
    const passwordInput = document.getElementById('password');
    const cPasswordInput = document.getElementById('confirmpassword');
    const cpasswordError = document.getElementById("cpasswordError");
    const inputPassword = passwordInput.value;
    const inputConfirmPassword = cPasswordInput.value;
    if (inputPassword !== inputConfirmPassword) {
        cpasswordError.textContent = "Passwords do not match.";
        return false;
    } else {
        cpasswordError.textContent = "";
        return true;
    }
}

function validateName() {
    const nameInput = document.getElementById("name")
    const nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === '') {
       nameError.textContent = "Please enter your name.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

function validateMessage() {
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById("messageError");

    if (messageInput.value.trim() === '') {
        messageError.textContent = "Please enter a message and subject.";
        return false;
    } else {
        messageError.textContent = "";
        return true;
    }
}

function validateFirstName() {
    const firstNameInput = document.getElementById('firstName');
    const firstName = firstNameInput.value.trim();
    const firstNameError = document.getElementById('firstNameError');
    const namePattern = /^[A-Za-z]+$/;

    if (!namePattern.test(firstName)) {
        firstNameError.textContent = "Name should contain only letters.";
        return false;
    } else {
        firstNameError.textContent = "";
        return true;
    }
}

function validateLastName() {
    const lastNameInput = document.getElementById('lastName');
    const lastName = lastNameInput.value.trim();
    const lastNameError = document.getElementById('lastNameError');
    const namePattern = /^[A-Za-z]+$/;

    if (!namePattern.test(lastName)) {
        lastNameError.textContent = "Name should contain only letters.";
        return false;
    } else {
        lastNameError.textContent = "";
        return true;
    }
}
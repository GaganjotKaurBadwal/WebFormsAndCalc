document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const messageDiv = document.getElementById("message");
    
    // Clear previous message
    messageDiv.textContent = "";

    // Validation
    if (username === "") {
        messageDiv.textContent = "Username cannot be empty.";
        return;
    }

    if (email === "" || !validateEmail(email)) {
        messageDiv.textContent = "Invalid email address.";
        return;
    }

    if (phone === "" || !validatePhone(phone)) {
        messageDiv.textContent = "Phone number must be 10 digits and numeric.";
        return;
    }

    if (password === "" || !validatePassword(password)) {
        messageDiv.textContent = "Password must be at least 7 characters long and contain at least one capital letter, one digit, and one special character (&, $, #, @).";
        return;
    }

    if (password !== confirmPassword) {
        messageDiv.textContent = "Passwords do not match.";
        return;
    }

    // If all validations pass
    messageDiv.style.color = "green";
    messageDiv.textContent = "Registration successful!";
    document.getElementById("registrationForm").reset(); // Reset form
});

// Function to validate email
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]{2,}.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

// Function to validate phone number
function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/; // Only allows exactly 10 digits
    return phoneRegex.test(phone);
}

// Function to validate password
function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@])[A-Za-z\d&$#@]{7,}$/;
    return passwordRegex.test(password);
}

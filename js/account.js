const form = document.getElementById('accountForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Reset color on every submit
    errorMessage.style.color = 'red';

    if (!email || !password) {
        errorMessage.textContent = 'Email and password must not be empty.';
        return;
    }

    if (!email.includes('@')) {
        errorMessage.textContent = 'Invalid email format. Must contain @.';
        return;
    }

    // Passed all checks
    errorMessage.textContent = 'Profile updated successfully!';
    errorMessage.style.color = 'lightgreen';
});

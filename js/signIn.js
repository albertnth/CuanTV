document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signInForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailPhone = document.getElementById('emailPhone').value.trim();
    const password = document.getElementById('password').value.trim();

    // Individual field checks
    if (!emailPhone) {
      alert('Email or phone number is required!');
      return;
    }

    if (!password) {
      alert('Password is required!');
      return;
    }

    // Check if input is a valid phone or email
    const isPhone = /^[0-9]{10,15}$/.test(emailPhone);
    const isEmail = /^\S+@\S+\.\S+$/.test(emailPhone);

    if (!isPhone && !isEmail) {
      alert('Please enter a valid email or phone number!');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }

    // All checks passed
    window.location.href = 'home.html';
  });
});

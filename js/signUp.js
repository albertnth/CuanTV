document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signUpForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value;

    if (!name) {
      alert('Please enter your name.');
      return;
    }

    if (!email) {
      alert('Please enter your email.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!password) {
      alert('Please enter your password.');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    if (!age || isNaN(age) || parseInt(age) < 0) {
      alert('Please enter a valid age.');
      return;
    }

    if (!gender) {
      alert('Please select your gender.');
      return;
    }

    alert('Sign Up Successful!');
    window.location.href = 'signIn.html';
  });
});

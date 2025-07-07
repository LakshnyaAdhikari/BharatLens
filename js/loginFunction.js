document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password');
  const passwordToggle = document.getElementById('password-toggle');

  if (passwordToggle) {
    passwordToggle.addEventListener('click', () => {
      // Check the current type of the password input
      const type =
        passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);

      // Change the icon based on the type
      passwordToggle.textContent = type === 'password' ? '👁️' : '🙈';
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password');
  const passwordToggle = document.getElementById('password-toggle');

  if (passwordToggle) {
    passwordToggle.addEventListener('click', () => {
      
      const type =
        passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);

      
      passwordToggle.textContent = type === 'password' ? '👁️' : '🙈';
    });
  }
});
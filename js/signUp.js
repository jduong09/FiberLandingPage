document.addEventListener('DOMContentLoaded', () => {
  const btnSignUp = document.getElementById('btn-free-trial');

  btnSignUp.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = './signUp.html';
  });
});
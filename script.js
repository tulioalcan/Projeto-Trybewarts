const button = document.querySelector('.button-loggin');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
function getUserValue(event) {  
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
button.addEventListener('click', getUserValue);

const checkbox = document.querySelector('#agreement');

function activateButton() {
  document.querySelector('#submit-btn').disabled = false;
}

checkbox.addEventListener('click', activateButton);

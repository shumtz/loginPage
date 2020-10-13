const inputPassword = document.getElementById('password');
const inputEmail = document.getElementById('email');
const textError = document.getElementById('valid_pass')

inputPassword.addEventListener('keyup', keyboard)


function valid() {
  if (inputEmail.value == "" || inputEmail.value == " ") {
    textError.innerHTML = "Digite o email"
    inputEmail.className = 'error'
    return false;
  }
  else if (inputPassword.value == "" || inputPassword.value == " ") {
    textError.innerHTML = "Digite a senha"
    inputPassword.className = 'error'
    return false;
  }
  return true;
}

function keyboard(e) {
  if (e.getModifierState('CapsLock')) {
    textPassword.innerHTML = "CapsLock ligado";
  } else {
    textPassword.innerHTML = ""
  }
}
const formStatus = document.getElementById('fs-frm');
const formEmail = document.getElementById('email-address');

formStatus.addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('test-alert').innerHTML = '';
  if (formEmail.value === formEmail.value.toLowerCase()) {
    formStatus.submit();
  } else {
    document.getElementById('test-alert').innerHTML = "<p class='email-error'> Error: Please use lowercase letters for your email</p>";
  }
});
function createNode(type, nodeClass) {
  const node = document.createElement(type);
  if (nodeClass) node.className = nodeClass;
  return node;
}

const formStatus = document.getElementById('fs-frm');
const formEmail = document.getElementById('email-address');
const formButton = document.getElementById('form-submit-button');
const alertLowercase = formButton.appendChild(createNode('label', 'email-error'));
alertLowercase.innerHTML = 'Error: Please use lowercase letters for your email';

formStatus.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formEmail.value === formEmail.value.toLowerCase()) {
    formStatus.submit();
  } else {
    const emailAlert = formButton.insertAdjacentElement('beforebegin', createNode('p', 'email-error'));
    emailAlert.innerHTML = 'Error: Please use lowercase letters for your email';
  }
});
const registerUser = (event) => {
  event.preventDefault(); // Impede o comportamento padrão do formulário
  const nome = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#password').value;

  const user = {
    nome,
    email,
    senha,
  };

  sendUser(user);
};

const sendUser = (usuario) => {
  fetch('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

document.addEventListener('DOMContentLoaded', () => {
  const loginUser = (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#password').value;

    // TOAST - Mostrar as notificações
    const showToast = (message, isError = false) => {
      const toast = document.querySelector('#toast');
      toast.textContent = message;
      toast.style.backgroundColor = isError ? '#e74c3c' : '#27ae60';
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000); // Oculta o toast após 3 segundos
    };

    fetch(`http://localhost:3000/users?email=${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao obter lista de usuários cadastrados');
        }
        return response.json();
      })
      .then((usersData) => {
        const user = usersData.find((user) => user.email === email);

        if (user) {
          //usuário existe
          if (user.senha === senha) {
            //senha correta
            sessionStorage.setItem('user', JSON.stringify(user));
            showToast('Login realizado com sucesso', false);
            // redireciona para a página userPage ( ainda n esta pronta manda p Home Page)
            window.location.href = 'http://localhost:8080/index.html';
          } else {
            //senha incorreta
            showToast('Email ou senha incorretos', true);
          }
        } else {
          // usuário não cadastrado
          showToast('Usuário não cadastrado. Por favor, cadastre-se', true);
        }
      })
      .catch((error) => {
        showToast(
          'Erro ao tentar fazer login. Por favor, tente novamente.',
          true
        );
        console.error(error);
      });
  };

  loginForm.addEventListener('submit', loginUser);
});

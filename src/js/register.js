document.addEventListener('DOMContentLoaded', () => {
  createPreferencesButtonList();
});

// Adiciona os botões de preferências dinâmicamente
const createPreferencesButtonList = () => {
  fetch(`http://localhost:3000/availablePreferences`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao obter lista de preferências');
      }
      return response.json();
    })
    .then((preferencesData) => {
      const preferencesContainer = document.querySelector(
        '#register-chip-group'
      );
      preferencesData.forEach((preference) => {
        const preferenceButton = document.createElement('button');
        preferenceButton.setAttribute('class', 'chip');
        preferenceButton.setAttribute('type', 'button');
        preferenceButton.setAttribute(
          'data-preference',
          JSON.stringify(preference)
        );
        preferenceButton.textContent = preference.name;
        preferenceButton.addEventListener('click', () => {
          preferenceButton.classList.toggle('active');
        });
        preferencesContainer.appendChild(preferenceButton);
      });

      // CHIPS - BOTÕES DE PREFERÊNCIAS
      const chips = document.querySelectorAll('.chip');
      let maxWidth = 0;

      // Calcula a largura máxima dos chips, respeitando o max-width definido no CSS
      chips.forEach((chip) => {
        chip.style.width = 'auto'; // Resetar a largura antes de calcular
        const chipWidth = chip.offsetWidth;
        if (chipWidth > maxWidth) {
          maxWidth = chipWidth;
        }
      });

      // Ajusta a largura de todos os chips
      chips.forEach((chip) => {
        chip.style.width = `${maxWidth}px`;
      });
    });
};

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

//CADASTRO DO USUÁRIO
const registerUser = (event) => {
  event.preventDefault(); // Impede o comportamento padrão do formulário de recarregar
  const nome = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#password').value;

  const user = {
    nome,
    email,
    senha,
  };

  const selectedChips = document.querySelectorAll('.chip.active');
  if (selectedChips.length === 0) {
    showToast('Por favor, selecione pelo menos uma preferência.', true);
    return;
  }

  const preferences = [];
  selectedChips.forEach((chip) => {
    preferences.push(chip.getAttribute('data-preference'));
  });

  // Verificar se o usuário já existe pelo e-mail
  fetch(`http://localhost:3000/users?email=${email}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao verificar a existência do usuário');
      }
      return response.json();
    })
    .then((data) => {
      if (data.length > 0) {
        // Usuário já existe, utilizar o ID existente
        const existingUserId = data[0].id;
        showToast('Usuário já existe. Por favor, faça login.', true);
        //return sendUserAndPreferences(existingUserId, user, preferences);
      } else {
        // Usuário não existe, criar um novo
        return createUserAndPreferences(user, preferences);
      }
    })
    .then((userData) => {
      if (userData) {
        showToast('Cadastro efetuado com sucesso. Redirecionando...', false);
        // Redirecionar para a página de login após 3 segundos
        setTimeout(() => {
          window.location.href = '../pages/login.html';
        }, 3000);
      }
    })
    .catch((error) => {
      console.error('Erro:', error);
      showToast('Erro ao cadastrar. Por favor, tente novamente.', true);
    });
};

//CADASTRO DAS PREFERÊNCIAS DO USUÁRIO
const createUserAndPreferences = (user, preferences) => {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao cadastrar o usuário');
      }
      return response.json();
    })
    .then((userData) => {
      const userId = userData.id;
      return sendPreferences(userId, preferences);
    });
};

const sendPreferences = (userId, preferences) => {
  return fetch('http://localhost:3000/userPreferences', {
    method: 'POST',
    body: JSON.stringify({ userId, tags: preferences }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Erro ao cadastrar as preferências');
    }
    return response.json();
  });
};

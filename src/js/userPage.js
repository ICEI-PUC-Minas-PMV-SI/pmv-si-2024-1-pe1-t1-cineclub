document.addEventListener('DOMContentLoaded', async () => {
  const loggedUser = JSON.parse(sessionStorage.getItem('user'));

  getLoggedUser(loggedUser);
  const userPreferences = await findUserPreferences(loggedUser.id);
  const userSuggestions = await findUserSuggestions(userPreferences.tags);
  mountBanner(userSuggestions.results[0]);

  mountUserSuggestions(userSuggestions.results.slice(1));
});

//Função para setar o nome do usuário logado
const getLoggedUser = (loggedUser) => {
  const avatarContainer = document.querySelector('#userpage-avatar');
  const userNameContainer = document.querySelector('#userpage-name');
  if (avatarContainer) {
    const userNames = loggedUser.nome.split(' ');
    const userInitials = [
      userNames[0].substring(0, 1),
      userNames[userNames.length - 1].substring(0, 1),
    ];
    avatarContainer.innerHTML = `${userInitials.join('')}`;
  }
  if (userNameContainer) {
    userNameContainer.innerText = loggedUser.nome;
  }
};

//Função para buscar as preferencias do usuário logado
const findUserPreferences = async (userId) => {
  return await fetch(`http://localhost:3000/userPreferences?userId=${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao obter lista de preferências');
      }
      return response.json();
    })
    .then((preferencesData) => {
      return preferencesData[0];
    });
};

//Função para buscar filmes na TMDB API
const findUserSuggestions = async (genres) => {
  const apiKey = ''; // inserir apiyKeyd do TMDB
  return await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genres.join(
      '|'
    )}&language=pt-BR`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao obter lista de preferências');
      }
      return response.json();
    })
    .then((suggestionData) => {
      return suggestionData;
    });
};

//Função para buscar o gênero na TMDB API por ID
const findGenreById = async (genreId) => {
  return await fetch(`http://localhost:3000/availablePreferences/${genreId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao obter lista de preferências');
      }
      return response.json();
    })
    .then((genreData) => {
      return genreData.name;
    });
};

// Função para montar os cards com as sugestões de acordo com as preferências do usuário
const mountUserSuggestions = async (suggestions) => {
  const suggestionsContainer = document.querySelector(
    '#userpage-recomended-group'
  );

  suggestionsContainer.innerHTML = '';

  suggestions.forEach(async (suggestion) => {
    const suggestionElement = document.createElement('div');
    suggestionElement.classList.add('userpage-recomended-item');
    suggestionElement.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${suggestion.poster_path}")`;
    suggestionElement.innerHTML = `
     <div class='userpage-recomended-movie-note'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 -960 960 960'
        width='24px'
        fill='#FFA41C'
      >
        <path d='m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z' />
      </svg>
      ${suggestion.vote_average.toFixed(1)}
    </div>

    <div class='userpage-recomended-item-info'>
      <span class='userpage-info-movie-name'>${suggestion.title}</span>
      <div class='userpage-info-movie-details'>
        <span class='userpage-info-movie-year'>${
          suggestion.release_date.split('-')[0]
        }</span>
        <span class='userpage-info-movie-genre'>${await findGenreById(
          suggestion.genre_ids[0]
        )}</span>
      </div>
    </div>
    `;
    suggestionsContainer.appendChild(suggestionElement);
  });
};

//Função para trazer o filme em destaque no banner de acordo com as preferências do usuário
const mountBanner = async (movie) => {
  const titleContainer = document.querySelector('#userpage-banner-title');
  const infoContainer = document.querySelector('#userpage-banner-info');
  const bannerImage = document.querySelector('#userpage-banner-image');

  titleContainer.innerText = movie.title;
  infoContainer.innerText = `${
    movie.release_date.split('-')[0]
  } | ${await findGenreById(movie.genre_ids[0])} • ${movie.vote_average.toFixed(
    1
  )} ★ `;

  bannerImage.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
};

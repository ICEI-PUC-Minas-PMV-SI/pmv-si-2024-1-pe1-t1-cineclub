document.addEventListener('DOMContentLoaded', function () {
    fetch('pages/cadastro.html')
      .then((response) => response.text())
      .then((data) => {
        document.getElementById('cadastro-container').innerHTML = data;
      })
      .catch((error) => {
        console.error(
          'There has been a problem with your fetch operation:',
          error
        );
      });
  });
  
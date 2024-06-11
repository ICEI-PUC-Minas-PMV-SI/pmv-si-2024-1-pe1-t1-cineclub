document.addEventListener('DOMContentLoaded', function () {
    fetch('pages/login/login.html')
      .then((response) => response.text())
      .then((data) => {
        document.getElementById('login-container').innerHTML = data;
      })
      .catch((error) => {
        console.error(
          'There has been a problem with your fetch operation:',
          error
        );
      });
  });
  
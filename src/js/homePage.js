document.addEventListener('DOMContentLoaded', function () {
  fetch('pages/homePage/homePage.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('home-container').innerHTML = data;
    })
    .catch((error) => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    });
});

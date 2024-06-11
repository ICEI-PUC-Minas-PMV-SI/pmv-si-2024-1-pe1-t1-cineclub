document.addEventListener('DOMContentLoaded', function () {
  fetch('components/header.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('header').innerHTML = data;
    })
    .catch((error) => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    });
});

document.addEventListener('DOMContentLoaded', function () {
  fetch('components/footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch((error) => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    });
});

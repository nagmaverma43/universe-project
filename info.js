  var menuButton = document.getElementById('menu-button');
  var dropdown = document.getElementById('dropdown');

  menuButton.addEventListener('click', function() {
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
    }
  });

  document.addEventListener('click', function(event) {
    if (event.target !== menuButton && event.target !== dropdown) {
      dropdown.style.display = 'none';
    }
  });
  const joinButton = document.getElementById('joinButton');
const confirmationMessage = document.getElementById('confirmationMessage');

joinButton.addEventListener('click', () => {
    confirmationMessage.innerText = 'You have joined!';});

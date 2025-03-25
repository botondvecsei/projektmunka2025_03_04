document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('formMessage');

  // Form validálás
  if (name === '' || email === '') {
    message.textContent = "Kérlek töltsd ki az összes mezőt!";
    message.classList.remove('text-success');
    message.classList.add('text-danger');
    message.style.display = 'block';  // Üzenet megjelenítése
  } else {
    const data = {
      name: name,
      email: email
    };

    fetch('/send-message', {  // Cseréld ki a /send-message-t a megfelelő backend URL-re
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        message.textContent = "Sikeres küldés!";
        message.classList.remove('text-danger');
        message.classList.add('text-success');
        message.style.display = 'block';  // Üzenet megjelenítése
      } else {
        message.textContent = "Hiba történt a küldés során.";
        message.classList.remove('text-success');
        message.classList.add('text-danger');
        message.style.display = 'block';  // Üzenet megjelenítése
      }
    })
    .catch(error => {
      message.textContent = "Hiba történt. Kérlek próbáld újra később.";
      message.classList.remove('text-success');
      message.classList.add('text-danger');
      message.style.display = 'block';  // Üzenet megjelenítése
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header h1');
  header.addEventListener('click', () => {
    header.textContent = "Filmek & Sorozatok – Kattintottál!";
  });
});

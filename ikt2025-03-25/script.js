document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('formMessage');
    
    if (name === '' || email === '') {
      message.textContent = "Kérlek töltsd ki az összes mezőt!";
    } else {
        alert("Sikeres küldés");
      message.classList.remove('text-danger');
      message.classList.add('text-success');
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header h1');
    header.addEventListener('click', () => {
      header.textContent = "Filmek & Sorozatok – Kattintottál!";
    });
  });

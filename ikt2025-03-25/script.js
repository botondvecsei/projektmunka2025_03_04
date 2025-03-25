document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('formMessage');

    if (name === '' || email === '') {
        message.textContent = "Kérlek töltsd ki az összes mezőt!";
        message.classList.remove('text-success');
        message.classList.add('text-danger');
    } else {
        const data = {
            name: name,
            email: email
        };

        fetch('/send-message', { 
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
            } else {
                message.textContent = "Hiba történt a küldés során.";
                message.classList.remove('text-success');
                message.classList.add('text-danger');
            }
        })
        .catch(error => {
            message.textContent = "Hiba történt. Kérlek próbáld újra később.";
            message.classList.remove('text-success');
            message.classList.add('text-danger');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header h1');
    header.addEventListener('click', () => {
        header.textContent = "Filmek & Sorozatok – Kattintottál!";
    });
});

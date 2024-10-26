document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for contacting us, ${email}!`);
});

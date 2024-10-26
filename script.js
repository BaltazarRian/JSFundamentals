document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`You have successfully submitted your email @, ${email}!`);
});

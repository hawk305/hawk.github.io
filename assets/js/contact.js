$(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
        e.preventDefault(); // Prevent the form from refreshing the page

        const name = $('#name').val();
        const email = $('#email').val();
        const subject = $('#subject').val() || 'Kein Betreff';
        const message = $('#comment').val();

        const mailtoLink = `mailto:info@lebenswertes-scharbeutz.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nNachricht:\n${message}`
        )}`;

        window.location.href = mailtoLink;
    });
});
window.addEventListener("load", (e) => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const formData = new FormData(form);

        const data = {};

        for (const [key, value] of formData) {
            data[key] = value;
        }

        // Google Forms configuration
        const apiKey = 'AIzaSyBYABaJyImN1-m4UR9--iDs8NQNLrEolPg';
        const formId = '1LAcraUYb05m1Iuy1psZXSW6huNZVpBPt6dz_YwKCaPw';

        fetch(`https://forms.googleapis.com/v1/forms/${formId}:submit?key=${apiKey}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Origin': '*',
            },
        })

            .then(() => {
                console.log('Message sent successfully!');
                form.clear();
            })

            .catch((error) => {
                console.error('Error sending message:', error);
            });
    });

});
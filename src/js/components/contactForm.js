window.addEventListener("load", (e) => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const formData = new FormData(form);

        const data = {};

        for (const [key, value] of formData) {
            data[key] = value;
        }

        console.log(data);

        // fetch('https://example.com/submit', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
    });

});
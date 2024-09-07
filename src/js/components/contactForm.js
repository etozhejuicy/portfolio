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
        // You can send the data to a third-party service or handle it locally
        // For example, you can use the Fetch API to send the data to a server

        // fetch('https://example.com/submit', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
    });

});
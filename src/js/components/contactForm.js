window.addEventListener("load", (e) => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const formData = new FormData(form);

        const data = {};

        for (const [key, value] of formData) {
            data[key] = value;
        }

        const token = '7155676478:AAEjVwCxt3AtnUZL9-3bqxrv4b1Xw2RI52M';

        const chatId = 'Black_Magic_Feedback_bot'; // Replace with the chat ID you want to send the message to

        form.addEventListener('submit', (e) => {

            e.preventDefault();

            const formData = new FormData(form);

            const message = `Form submitted with data: ${JSON.stringify(Object.fromEntries(formData))}`;

            sendTelegramMessage(token, chatId, message);
        });


        function sendTelegramMessage(token, chatId, message) {

            const xhr = new XMLHttpRequest();

            xhr.open('POST', `https://api.telegram.org/bot${token}/sendMessage`, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = function () {
                if (xhr.status === 200) {
                    console.log(`Message sent: ${xhr.responseText}`);
                } else {
                    console.error(`Error sending message: ${xhr.statusText}`);
                }
            };

            xhr.onerror = function () {
                console.error(`Error sending message: ${xhr.statusText}`);
            };

            const data = JSON.stringify({
                chat_id: chatId,
                text: message
            });

            xhr.send(data);
        }
    });

});
let contact = document.getElementById('contact');

// Add event listener to contact form

contact.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    

    const token = '7922823597:AAEklh3WLSxNSrgwyvgQ6c4jeZSArtzHudI';
    const chatId = '-1002459903634';
    const telegramMessage = `New Contact Form Submission:
Name: ${name}
Phone: ${phone}
Subject: ${subject}
Message: ${message}`;

    sendTelegramMessage(token, chatId, telegramMessage);
});


const sendTelegramMessage = async (token, chatId, message) => {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const payload = {
        chat_id: chatId,
        text: message
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        console.log(data);
        alert("Message sent successfully!");
    } catch (error) {
        console.error('Error sending message:', error);
        alert("Failed to send message. Please try again.");
    }
};



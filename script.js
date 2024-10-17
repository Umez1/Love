function showReasonInput(answer) {
    const reasonContainer = document.getElementById('reasonContainer');
    const reasonLabel = document.getElementById('reasonLabel');

    if (answer === 'yes') {
        reasonLabel.textContent = 'Why did you say Yes?';
    } else {
        reasonLabel.textContent = 'Why did you say No?';
    }

    reasonContainer.style.display = 'block';
}

function sendToWhatsApp(event) {
    event.preventDefault();
    
    const reason = document.getElementById('reason').value;
    const phoneNumber = '+2348108384407'; // Replace with your phone number, including the country code (e.g., +1234567890)

    if (reason) {
        const message = `She said: ${document.getElementById('reasonLabel').textContent} - ${reason}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

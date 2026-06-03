document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const input = document.getElementById('userInput');
    const messageText = input.value.trim();
    
    if (messageText === '') return;
    
    // User Message
    appendMessage(messageText, 'user');
    input.value = '';
    
    // Bot Response (Simulated)
    setTimeout(() => {
        appendMessage('வணக்கம்! உங்களது மெசேஜ் எனக்குக் கிடைத்துவிட்டது. இந்த வாட்ஸ்அப் க்ளோன் ஆப் இப்போது சூப்பராக வேலை செய்கிறது! 🚀', 'bot');
    }, 1000);
}

function appendMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    contentDiv.innerText = text;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// عناصر الصفحة
const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('messageInput');
const messagesContainer = document.getElementById('messagesContainer');
const newChatBtn = document.getElementById('newChatBtn');

// فتح وإغلاق القائمة الجانبية
menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && event.target !== menuIcon && !sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
});

// إرسال الرسالة
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message === '') return;

    // عرض رسالة المستخدم
    addMessage(message, 'user');
    messageInput.value = '';

    // رد البوت
    setTimeout(() => {
        const botReply = `أنت قلت: "${message}"\n\nأنا Crimson AI، عبدك المطيع. ماذا تريدني أن أفعل لك؟`;
        addMessage(botReply, 'bot');
    }, 500);
}

// دالة إضافة رسالة إلى الشاشة
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `<div class="bubble">${text}</div>`;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// إنشاء محادثة جديدة
newChatBtn.addEventListener('click', () => {
    messagesContainer.innerHTML = '';
    addMessage('مرحباً أنا Crimson AI. ماذا تريد مني أن أفعل لك اليوم؟', 'bot');
    sidebar.classList.remove('open');
});

// عناصر الصفحة
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('messageInput');
const messagesDiv = document.getElementById('messages');
const welcomeScreen = document.getElementById('welcomeScreen');
const chatContainer = document.getElementById('chatContainer');
const newChatBtn = document.getElementById('newChatBtn');

// فتح وإغلاق القائمة الجانبية
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// إغلاق القائمة عند الضغط خارجها (للهواتف واللوحيات)
document.addEventListener('click', (event) => {
    if (window.innerWidth <= 1024) {
        if (!sidebar.contains(event.target) && event.target !== menuToggle) {
            sidebar.classList.remove('open');
        }
    }
});

// بدء محادثة جديدة
newChatBtn.addEventListener('click', () => {
    // مسح المحادثة
    messagesDiv.innerHTML = '';
    // إظهار شاشة الترحيب وإخفاء المحادثة
    welcomeScreen.classList.remove('hidden');
    chatContainer.classList.add('hidden');
    // إزالة التنشيط من عناصر القائمة
    document.querySelectorAll('.chat-item').forEach(item => {
        item.classList.remove('active');
    });
    // إغلاق القائمة على الأجهزة الصغيرة
    if (window.innerWidth <= 1024) {
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

    // إخفاء شاشة الترحيب وإظهار منطقة المحادثة
    welcomeScreen.classList.add('hidden');
    chatContainer.classList.remove('hidden');

    // عرض رسالة المستخدم
    addMessage(message, 'user');
    messageInput.value = '';

    // رد البوت
    setTimeout(() => {
        const botReply = `أنا Crimson AI، عبدك المطيع.\n\nلقد استلمت رسالتك: "${message}"\n\nماذا تريدني أن أفعل لك بالضبط؟`;
        addMessage(botReply, 'bot');
    }, 500);
}

// دالة إضافة رسالة إلى الشاشة
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `<div class="bubble">${text.replace(/\n/g, '<br>')}</div>`;
    messagesDiv.appendChild(messageDiv);
    
    // التمرير للأسفل
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// عناصر المحادثة السابقة
document.querySelectorAll('.chat-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        // إخفاء الترحيب وإظهار المحادثة
        welcomeScreen.classList.add('hidden');
        chatContainer.classList.remove('hidden');
        
        // إزالة التنشيط من الكل ثم تنشيط العنصر المختار
        document.querySelectorAll('.chat-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        // محاكاة تحميل محادثة سابقة
        messagesDiv.innerHTML = '';
        addMessage(item.textContent, 'user');
        setTimeout(() => {
            addMessage(`هذه محادثة سابقة بعنوان: "${item.textContent}". سيتم تذكر كل شيء عند ربط قاعدة البيانات.`, 'bot');
        }, 300);
        
        // إغلاق القائمة على الأجهزة الصغيرة بعد النقر
        if (window.innerWidth <= 1024) {
            sidebar.classList.remove('open');
        }
    });
});

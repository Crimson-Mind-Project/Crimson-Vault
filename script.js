function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// إغلاق القائمة عند الضغط على منطقة المحادثة
document.getElementById('mainContent').addEventListener('click', function(e) {
    if (window.innerWidth <= 1024) {
        document.getElementById('sidebar').classList.remove('active');
    }
});

function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    
    // تغيير لون زر الإرسال عند الكتابة
    const btn = document.getElementById('sendBtn');
    if(textarea.value.length > 0) {
        btn.style.color = "white";
    } else {
        btn.style.color = "#555";
    }
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const msg = input.value.trim();
    
    if(msg) {
        document.getElementById('welcomeView').style.display = 'none';
        
        // هنا يمكنك إضافة منطق عرض الفقاعات (bubbles) لاحقاً
        const chatContainer = document.getElementById('chatMessages');
        chatContainer.innerHTML += `<div style="padding: 15px; text-align: right; color: var(--crimson);">● جاري معالجة: ${msg}</div>`;
        
        input.value = "";
        input.style.height = 'auto';
    }
}

function createNewChat() {
    document.getElementById('welcomeView').style.display = 'flex';
    document.getElementById('chatMessages').innerHTML = "";
    toggleSidebar();
}

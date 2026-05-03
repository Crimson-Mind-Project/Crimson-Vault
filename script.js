function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const msg = input.value.trim();
    
    if(msg) {
        // إخفاء الترحيب عند بدء المحادثة
        document.getElementById('welcomeView').style.display = 'none';
        
        // هنا يتم إضافة منطق عرض الرسائل في chatMessages
        console.log("إرسال رسالة: " + msg);
        
        input.value = "";
        input.style.height = 'auto';
        
        // إضافة عنوان المحادثة للقائمة الجانبية (كمثال)
        addNewHistoryItem(msg);
    }
}

function addNewHistoryItem(text) {
    const history = document.getElementById('recentChats');
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerText = text.substring(0, 20) + "...";
    history.prepend(item);
}

function createNewChat() {
    document.getElementById('welcomeView').style.display = 'flex';
    document.getElementById('chatMessages').innerHTML = "";
    if(window.innerWidth <= 768) toggleSidebar();
}

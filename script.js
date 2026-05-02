function selectOption(text) {
    const input = document.getElementById('textIn');
    input.value = text;
    // تأثير بصري بسيط عند الاختيار
    input.style.color = "var(--crimson)";
    setTimeout(() => { input.style.color = "white"; }, 500);
}

function run() {
    const input = document.getElementById('textIn').value;
    if(input) {
        document.getElementById('startView').style.display = 'none';
        const aiMsg = document.getElementById('aiMessage');
        aiMsg.style.display = 'block';
        
        // جاري المعالجة تظهر بالأحمر القرمزي
        aiMsg.innerHTML = `<span style="color:var(--crimson); font-size:0.8em;">جاري استدعاء النواة...</span>`;
        
        setTimeout(() => {
            aiMsg.innerHTML = "تم الاتصال بـ Crimson AI. أنا جاهز لمعالجة طلبك.";
            document.getElementById('textIn').value = "";
        }, 1500);
    }
}

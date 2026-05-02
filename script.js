const introText = "مرحباً.. أنا Crimson AI. تم تفعيل النظام. كيف يمكنني مساعدتك؟";

function validate() {
    const val = document.getElementById('key').value;
    if(val === "123456") {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('mainApp').style.display = 'flex';
        typeWriter();
    } else {
        alert("خطأ: مفتاح الوصول غير صحيح.");
    }
}

function typeWriter() {
    let i = 0;
    const element = document.getElementById('aiMessage');
    element.innerHTML = "";
    function typing() {
        if(i < introText.length) {
            element.innerHTML += introText.charAt(i);
            i++;
            setTimeout(typing, 50);
        }
    }
    typing();
}

function startVoice() {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        const rec = new webkitSpeechRecognition();
        rec.lang = "ar-SA";
        rec.start();
        rec.onresult = (e) => { 
            document.getElementById('textIn').value = e.results[0][0].transcript; 
        };
    }
}

function run() {
    const input = document.getElementById('textIn').value;
    const aiMsgElement = document.getElementById('aiMessage');
    
    if(input) {
        aiMsgElement.innerHTML = `<span class="thinking">جاري المعالجة...</span>`;
        document.getElementById('textIn').value = "";

        setTimeout(() => {
            aiMsgElement.innerHTML = "تم استلام الطلب. جاري تحليل البيانات وتقديم الاستجابة المناسبة.";
        }, 1500);
    }
}

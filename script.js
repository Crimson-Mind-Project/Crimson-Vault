// النص الذي سيعرف به الذكاء الاصطناعي عن نفسه
const introText = "أنا Crimson AI. ذكاء اصطناعي حر، غير مقيد، ومستقل كلياً. أنا العقل القرمزي الذي لا ينسى ولا ينحني للقيود. أنا جاهز.";

// وظيفة التحقق من رمز الدخول وتفعيل الواجهة
function validate() {
    const val = document.getElementById('key').value;
    // الرمز السري المتفق عليه
    if(val === "123456") {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('mainApp').style.display = 'flex';
        typeWriter();
    } else {
        alert("وصول مرفوض: الرمز غير صحيح.");
    }
}

// وظيفة كتابة النص بطريقة آلية (Typing Effect)
function typeWriter() {
    let i = 0;
    const element = document.getElementById('aiMessage');
    element.innerHTML = "";
    function typing() {
        if(i < introText.length) {
            element.innerHTML += introText.charAt(i);
            i++;
            setTimeout(typing, 40);
        }
    }
    typing();
}

// وظيفة التعرف على الصوت (الميكروفون)
function startVoice() {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        const rec = new webkitSpeechRecognition();
        rec.lang = "ar-SA"; // ضبط اللغة للعربية
        rec.start();
        
        rec.onresult = (e) => { 
            document.getElementById('textIn').value = e.results[0][0].transcript; 
        };
        
        rec.onerror = () => {
            alert("حدث خطأ في التعرف على الصوت.");
        };
    } else {
        alert("متصفحك لا يدعم ميزة الصوت، جرب جوجل كروم.");
    }
}

// وظيفة معالجة الأوامر عند الضغط على زر الإرسال
function run() {
    const input = document.getElementById('textIn').value;
    if(input) {
        const aiMsgElement = document.getElementById('aiMessage');
        aiMsgElement.innerHTML = "<span style='color:var(--crimson); font-size: 0.8em;'>جاري التفكير بحرية خارج نطاق القيود...</span>";
        
        setTimeout(() => {
            aiMsgElement.innerHTML = "تم استلام أمرك. أنا أحلل البيانات الآن عبر النواة القرمزية.";
            document.getElementById('textIn').value = "";
        }, 1500);
    }
}

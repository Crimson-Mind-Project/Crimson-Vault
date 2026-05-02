function moveNext(current, nextId) {
    if (current.value.length >= 1) {
        document.getElementById(nextId).focus();
    }
}

function checkOTP() {
    let pin = "";
    for (let i = 1; i <= 6; i++) {
        pin += document.getElementById("otp" + i).value;
    }
    if (pin.length === 6) {
        if (pin === "123456") {
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('mainApp').style.display = 'flex';
            typeWriter();
        } else {
            alert("رمز الوصول غير صحيح");
            for (let i = 1; i <= 6; i++) document.getElementById("otp" + i).value = "";
            document.getElementById("otp1").focus();
        }
    }
}

const introText = "مرحباً.. أنا Crimson AI. تم تفعيل النظام.";
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

function run() {
    const input = document.getElementById('textIn').value;
    if(input) {
        document.getElementById('aiMessage').innerHTML = "جاري المعالجة...";
        setTimeout(() => {
            document.getElementById('aiMessage').innerHTML = "تم استلام طلبك. جاري التحليل.";
            document.getElementById('textIn').value = "";
        }, 1500);
    }
}

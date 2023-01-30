const password = document.querySelector(".password");
const generate = document.querySelector(".generateButton");
const copyIcon = document.querySelector(".reguler");
const copyIconActive = document.querySelector(".solid");



// ***** Generate Password ***** --------------------------
function newPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()__-=+[]{}/~<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passLength = 20;
    let generatedPassword = "";
    function genPassword(){
        copyIcon.style.display = "inline-block";
        copyIconActive.style.display = "none";
        for(let i=0; i<=passLength; i++){
            let randomPassword =  chars.charAt( Math.floor(Math.random() * chars.length));
            generatedPassword += randomPassword;
        }
        return generatedPassword;
    }
    password.value = genPassword();
    console.log(password.value);
}

generate.addEventListener("click", newPassword);



// ***** Copy Generated Password ***** --------------------------
function copyPassword(){
    copyIcon.style.display = "none";
    copyIconActive.style.display = "inline-block";
    let copyText = password;
    copyText.select();
    copyText.setSelectionRange(0,999);
    document.execCommand("copy");
}

copyIcon.addEventListener("click", copyPassword);
copyIconActive.addEventListener("click", copyPassword);

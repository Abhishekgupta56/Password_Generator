const passwordBox = document.getElementById("password");
const length = 12;
const upparCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~`|}{[]:;?><,./-=";
// const generateBtn = document.getElementById("generateBtn");

const allChars = upparCase + lowerCase + numbers + symbols;

function createPassword(){
    let password = "";
    password += upparCase[Math.floor(Math.random() * upparCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

 function copyPassword(){
        passwordBox.select();
        document.execCommand("copy");
    }
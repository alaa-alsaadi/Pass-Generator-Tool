const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+={}[]\\|:;\"'<>,.?/";

const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const passwordInput = document.getElementById("password");
const passwordLengthInput = document.getElementById("password-length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

function generatePassword() {
  let password = "";
  let characters = "";
  if (uppercaseCheckbox.checked) {
    characters += uppercaseLetters;
  }
  if (lowercaseCheckbox.checked) {
    characters += lowercaseLetters;
  }
  if (numbersCheckbox.checked) {
    characters += numbers;
  }
  if (symbolsCheckbox.checked) {
    characters += symbols;
  }
  for (let i = 0; i < passwordLengthInput.value; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  passwordInput.value = password;
}

function copyPassword() {
  passwordInput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard");
}

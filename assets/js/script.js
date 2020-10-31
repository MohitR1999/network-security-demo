const plainTextInput = document.getElementById("plaintext");
const calcButton = document.getElementById("calc");
const outputDiv = document.getElementById("output");

const caesarCipher = (pt) => {
    let res = pt.toString();
    res = "(" + res + "*&^)";
    return res;
}

calcButton.addEventListener("click", (e) => {
    e.preventDefault();
    let output = "";
    let plaintext = plainTextInput.value;
    let encText = caesarCipher(plaintext);
    output += `Plain text : ${plainTextInput.value}, Encrypted text : ${encText}`;
    outputDiv.innerText = output;
})


const inputSentence = document.getElementById("inputSentence");
const panicBtn = document.getElementById("panicBtn");
const outputPanic = document.getElementById("outputPanic");

// function panic(str) {
//     return str.split(' ').join(' 😱 ').toUpperCase() + '!';
// }

function panic(str) {
    const words = str.split(' ');
    if (words.length === 1) {
        return str.toUpperCase() + " 😱!";
    } else {
        return words.join(" 😱 ").toUpperCase() + "!";
    }
}
// console.log(panic('I am almost out of coffee.'))

panicBtn.addEventListener("click", function() {
    const inputText = inputSentence.value;
    const panicText = panic(inputText);
    outputPanic.value = panicText;
})

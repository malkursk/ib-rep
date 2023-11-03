document.getElementById("processButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    const outputText = document.getElementById("outputText");
    outputText.textContent = removeVowels(inputText);
});

function removeVowels(text) {
    return text.replace(/[aeiouаеёиоуыэюя]/ig, '');
}
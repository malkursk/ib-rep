document.addEventListener("DOMContentLoaded", function() {


    let button = document.querySelector(".btn-convert")

    button.addEventListener("click", () => {
        let sourceText = document.getElementById('sourceText').value;
        let resultText = sourceText.replace(/[aeiouAEIOUаеёиоуыэюяАЕЁИОУЫЭЮЯ]/g, '');
        document.getElementById('resultText').value = resultText;
    })
});
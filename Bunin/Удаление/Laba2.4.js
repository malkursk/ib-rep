document.getElementById('remove').addEventListener('click', function() {
    let sourceText = document.getElementById('sourceText').value;
    let resultText = sourceText.replace (/[aeiouAEIOUаеёиоуыэюяАЕЁИОУЫЭЮЯ]/g, '');
    document.getElementById('resultText').value = resultText;
});

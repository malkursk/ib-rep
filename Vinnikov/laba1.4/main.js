function excludeVowels() {
    // Получаем введенный пользователем текст из текстового поля
    var inputText = document.getElementById("inputText").value;
    
    // Создаем регулярное выражение для поиска гласных
    var vowelRegex = /[aeiouаеёиоуыэюя]/ig;
    
    // Заменяем гласные на пустую строку
    var resultText = inputText.replace(vowelRegex, "");
    
    // Выводим результат на страницу
    document.getElementById("result").innerHTML = "Текст без гласных: " + resultText;
  }
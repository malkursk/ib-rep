function reverseSortArray() {
    // Получаем введенные пользователем числа из текстового поля
    var inputArray = document.getElementById("inputArray").value;
    
    // Разделяем строку на числа и удаляем возможные пробелы
    var numbers = inputArray.split(" ").map(Number);
    
    // Сортируем массив в порядке убывания
    var sortedArray = numbers.sort(function(a, b) {
      return b - a;
    });
    
    // Преобразуем отсортированный массив в строку
    var sortedString = sortedArray.join(" ");
    
    // Выводим результат на страницу
    document.getElementById("result").innerHTML = "Отсортированный массив: " + sortedString;
  }
// Функция для проверки, является ли одна строка анаграммой другой
function isAnagram(str1, str2) {
    // Удаляем пробелы и приводим к одному регистру
    str1 = str1.replace(/\s/g, "").toLowerCase();
    str2 = str2.replace(/\s/g, "").toLowerCase();

    // Проверяем, имеют ли строки одинаковую длину
    if (str1.length !== str2.length) {
        return false;
    }

    // Создаем объекты для подсчета символов в строках
    const charCount1 = {};
    const charCount2 = {};

    // Заполняем объекты символами из первой строки
    for (let char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    // Заполняем объекты символами из второй строки
    for (let char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Сравниваем объекты для подсчета символов
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}

document.getElementById("checkButton").addEventListener("click", function () {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;

    const result = document.getElementById("result");

    if (isAnagram(input1, input2)) {
        result.innerText = "Эти строки являются анаграммами.";
    } else {
        result.innerText = "Эти строки не являются анаграммами.";
    }
});
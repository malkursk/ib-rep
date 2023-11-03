 
function convert() {
    var number = document.getElementById("numberInput").value;
    var system = document.getElementById("systemSelect").value;
    var resultOutput = document.getElementById("resultOutput");
  
    if (number === "") {
      resultOutput.value = "Введите число!";
    } else if (isNaN(number)) {
      resultOutput.value = "Неправильно написано число!";
    } else {
      var convertedNumber = parseInt(number).toString(system);
      resultOutput.value = convertedNumber;
    }
  }
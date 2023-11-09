function calculateDecToBin() {
    const inputForNumber = document.getElementById('inputNumber');
    const inputForResult = 
  document.getElementById('outputNumber');
    
    let decimalNumber = inputForNumber.value;
    
    if (!isNaN(decimalNumber)) {
      let octalResult = decimalToOctal(Number(decimalNumber));
      
      inputForResult.value = octalResult;
    } else {
      inputForResult.value = "Некорректный ввод. Введите число.";
    }
  }

  function decimalToOctal(decimalNumber) {
    if (decimalNumber === 0) {
      return "0";
    }
  
    let octalResult = "";
    while (decimalNumber > 0) {
      const remainder = decimalNumber % 8;
      octalResult = remainder + octalResult;
      decimalNumber = Math.floor(decimalNumber / 8);
    }
  
    return octalResult;
  }
  
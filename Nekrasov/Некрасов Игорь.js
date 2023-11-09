function calculateDecToBin() {
    const inputForNumber = document.getElementById('inputNumber');
    const inputForResult = document.getElementById('outputNumber');
    let decimalNumber = inputForNumber.value;
    if  (!isNaN(decimalNumber))   {
      isTernary(decimalNumber)
      if (a === true){
      let result = convertBase(Number(decimalNumber));
      inputForResult.value = result;
    } else    
    inputForResult.value = "Некорректный ввод. Введите число.";
    }else {
        inputForResult.value = "Некорректный ввод. Введите число.";
  }
function convertBase(decimalNumber) {
    if (decimalNumber === 0) {
        return "0";
      }
        i=0;
        const string = decimalNumber.toString();
        const words = string.split('');
        x = words.length-1;
        let result= 0;
        while (x>=0) {
            var a = parseInt((words[i]));
            var b =parseInt(a*Math.pow(5,x));
            result =parseInt(result+ b);
            x--;
            i++;
        }
    return result;
}
function isTernary(str) {
    return a = /^[01234]+$/.test(str);
  }
}
function fen() {
    const inputForNumber1 = document.getElementById('outputNumber1');
    let n2 = inputForNumber1.value; 
    if (isNaN(parseInt(n2))) {
      document.getElementById("fen1").innerText = "Неправильный ввод";
      return
    }
    var arr = new Array();
    i=1;
    arr.push(1);
    arr.push(1);
    a=0;
    console.log(arr[1])
    console.log(arr[0])
    if ( (n2 !=="1") && (n2!=="0") && (n2!=="2") ) {
      fend(n2,arr,i)
    } else if (n2==="1") {
      document.getElementById("fen1").innerText = arr[1];
    } else if (n2==="2") {
      document.getElementById("fen1").innerText = arr;
    } else  {
      document.getElementById("fen1").innerText = "Неправильный ввод";
    }
}
function fend(param,arr1,i1) {
  if (i === 1) {
  n2=param;
  arr=arr1;
  i=i1;
  }
  n2-=1;
  a = arr[i]+arr[i-1];
  i+=1;
  arr.push(a);
  document.getElementById("fen1").innerText = arr;
  console.log(arr[i]);
  if (n2>1 ) {
    fend();
  }  else return
}
function readvector(){
  const inputForNumber2 = document.getElementById('outputNumber2');
  let n2 = inputForNumber2.value; 
  const inputForNumber3 = document.getElementById('outputNumber3');
  let n3 = inputForNumber3.value; 
  vector(n2,n3); 

}
function text1(){
  const textInput = document.getElementById("outputNumber4").value;
  const textWithoutVowels = textInput.replace(/[aeiouAEIOUуеыаоэяиюёУЕЫАОЭЯИЮЁ]/g, '');
  document.getElementById("text2").innerText = textWithoutVowels
}


function vector(vector, offsetVector) {
  if (vector.length !== offsetVector.length) {
    throw new Error('Размер векторов не совпадает!');
  }
  var result = [];
  for (var i = 0; i < vector.length; i++) {
    result[i] = vector[i] + offsetVector[i];
  }
  return document.getElementById("vector1").innerText = result; 
}
  




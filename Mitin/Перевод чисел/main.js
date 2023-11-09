const tags = {
    10: "Десятеричная",
    2: "Двоичная",
    8:"Восьмеричная",
    16: "Шестнадцатеричная",
    13: "Тринадцатеричная",
};
 
    function update() { 
        inputType.innerText = tags[typeFrom.value]; 
        resultType.innerText = tags[typeTo.value]; 
 
        // Обновить значения
        res.value = Number( 
            parseInt(input.value, typeFrom.value) 
        ).toString(typeTo.value); 
    } 
 
    function reverse() { 
        inputType.innerText = tags[typeFrom.value]; 
        resultType.innerText = tags[typeTo.value]; 
 
        // Обновить входное значение
        input.value = Number( 
            parseInt(res.value, typeTo.value) 
        ).toString(typeFrom.value); 
    } 
 
    update();
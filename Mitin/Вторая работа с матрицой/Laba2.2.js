document.getElementById('countButton').addEventListener('click', function() {
    var arrayString = document.getElementById('array').value;
    var number = parseInt(document.getElementById('number').value);
    
    var array = arrayString.split(',').map(function(item) {
        return parseInt(item.trim(), 10);
    });

    var count = array.filter(function(item) {
        return item === number;
    }).length;

    document.getElementById('result').innerText = `Число ${number} встречается в массиве ${count} раз(а).`;
});
function transport()
{
do{
    var arr= new Array();
 
    do{
        var columns=prompt("Введите количество строк в матрице");
        if (columns.replace(/\d/g,'').length)
            {
                alert("Ошибка. Введите число");
            }
      }while(columns.replace(/\d/g,'').length)
 
    do{         
        var rows=prompt("Ведите количество столбцов в матрице");
        if (rows.replace(/\d/g,'').length)
            {
                alert("Ошибка. введите число");
            }
        }
            while(rows.replace(/\d/g,'').length)
            
    for ( var i=1; i<=columns; i++)
        {
        arr[i]=new Array();
            for (var j=1; j<=rows; j++)
                {
                do{                 
                arr[i][j]=prompt("введите "+i+","+j+" элемент:");
                 if (arr[i][j].replace(/\d/g,'').length)
                    {
                    alert("Ошибка. введите число");
                    }
        }
                while(arr[i][j].replace(/\d/g,'').length)           
                }       
        }
document.close();
document.write("Исходная матрица: ");
document.write("</br>");
    for (i=1; i<=columns; i++)
        {
        for (j=1; j<=rows; j++)
                {
                document.write(arr[i][j]+"      ");
                }
        document.write("</br>");
        }
document.writeln("Результирующая матрица: ");
document.writeln("</br>");
        for (i=1; i<=rows; i++)
        {
            for (j=1; j<=columns; j++)
                {       
                    document.writeln(arr[j][i]+"        ");
                }
            document.writeln("</br>");
        }
var t=confirm("Хотите повторить?");          
}
while (t);      
};
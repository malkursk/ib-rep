// document.getElementById("calculateButton").addEventListener("click", function () {
//     const matrix1 = [
//         [parseInt(document.getElementById("m11").value), parseInt(document.getElementById("m12").value)],
//         [parseInt(document.getElementById("m21").value), parseInt(document.getElementById("m22").value)]
//     ];

//     const matrix2 = [
//         [parseInt(document.getElementById("n11").value), parseInt(document.getElementById("n12").value)],
//         [parseInt(document.getElementById("n21").value), parseInt(document.getElementById("n22").value)]
//     ];

//     const resultMatrix = document.getElementById("resultMatrix");

//     resultMatrix.style.display = "block";
//     resultMatrix.innerHTML = "";

//     const kronMatrix = kronProduct(matrix1, matrix2);

//     for (let i = 0; i < kronMatrix.length; i++) {
//         const row = resultMatrix.insertRow();
//         for (let j = 0; j < kronMatrix[0].length; j++) {
//             const cell = row.insertCell();
//             cell.innerText = kronMatrix[i][j];
//         }
//     }
// });

// function kronProduct(matrix1, matrix2) {
//     const result = [];
//     for (let i = 0; i < matrix1.length; i++) {
//         for (let j = 0; j < matrix1[0].length; j++) {
//             const row = [];
//             for (let k = 0; k < matrix2.length; k++) {
//                 for (let l = 0; l < matrix2[0].length; l++) {
//                     row.push(matrix1[i][j] * matrix2[k][l]);
//                 }
//             }
//             result.push(row);
//         }
//     }
//     return result;
// }
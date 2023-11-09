function isSymmetric(matrix) {
    if (matrix.length !== matrix[0].length) {
      return false;
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < i; j++) {
        if (matrix[i][j] !== matrix[j][i]) {
          return false;
        }
      }
    }
    return true;
  }

  function checkSymmetry() {
    const n = document.getElementById('nNumber').value;
    const m = document.getElementById('mNumber').value;
    const matrixString = document.getElementById('matrixNumber').value;
    
    const matrix = parseMatrix(n, m, matrixString);
    
    const result = isSymmetric(matrix);
    
    const resultTextarea = document.getElementById('result');
    resultTextarea.value = result ? 'Matrix is symmetric' : 'Matrix is not symmetric';
  }

  function parseMatrix(n, m, matrixString) {
    const matrix = [];
    const rows = matrixString.split(';');
    
    for (let i = 0; i < n; i++) {
      matrix.push(rows[i].split(',').map(Number));
    }
    
    return matrix;
  }
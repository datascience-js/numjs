//naive 3x3 matrix determinant calculator
import Matrix from "../src/naive/matrix"

var determinant = function(matrix) {
    if (!matrix) return;
    var matrixDim = matrix.shape();
    if (matrixDim[0] != matrixDim[1]) return;

    if (matrixDim[0] == 2 && matrixDim[1] == 2) {
        return ((matrix.at(0,0) * matrix.at(1,1)) - (matrix.at(0,1) * matrix.at(1,0)));
    }

    var detArr = new Array(matrixDim[1]);
    var refRow = matrix.row(0);
    var elementSign = 1;

    for (var col = 0; col < matrixDim[1]; col++) {
        var refElement = refRow[col] * elementSign;
        detArr[col] = refElement * determinant(matrix.minor(0, col));
        elementSign *= -1;
    }

    var det = 0;
    for (var i = 0; i < detArr.length; i++) {
        det += detArr[i];
    }

    return det;
};




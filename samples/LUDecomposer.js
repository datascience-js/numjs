//Decomposes a nxn matrix A by PA=LU and returns L, U and P
import Matrix from "../src/naive/matrix"

export function luDecompose(A) {
    let dim = matrix.shape();
    if (dim[0] != dim[1]) {
        return;
    }

    let L = Matrix.zeros(dim[0]);
    let U = Matrix.zeros(dim[0]);
    let P = pivotize(matrix);
    let A2 = P.mul(A);

    for (var j=0; j<dim[0]; j++) {
        L.set(j, j, 1.0);

    }



}

function pivotize(matrix) {
    let dim = matrix.shape();
    let idMat = Matrix.eye(dim[0]);
    for (var j=0; i<dim[0]; i++) {
        let row = getMax(matrix, j);
        if (j != row) {
            //swap the rows



            idMat.data[row] =  [idMat.data[j], idMat.data[row] = idMat.data[j]][0];
        }
    }

    return idMat;
}

function getMax(matrix, j) {
    let currMax = 0;
    let dim = matrix.shape();
    for (var i = j; i < dim[0]; i++) {
        var matVal = Math.abs(matrix.at(i,j));
        currMax = (currMax < matVal)? matVal : currMax;
    }

    return currMax;
}



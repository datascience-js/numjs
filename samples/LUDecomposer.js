//Decomposes a nxn matrix A by PA=LU and returns L, U and P
import Matrix from "../src/naive/matrix"

export function luDecompose(A) {
    let dim = A.shape();

    if (dim[0] != dim[1]) {
        return;
    }

    let L = Matrix.zeros(dim[0]);
    let U = Matrix.zeros(dim[0]);
    let P = pivotize(A);
    let A2 = P.mul(A);

    for (let j=0; j<dim[0]; j++) {
        let sum1 = 0;
        let sum2 = 0;
        L.set(j, j, 1.0);

        for (let i=0; i<j+1; i++) {
            for (let k=0; k<i; k++) {
                sum1 += (U.at(k,j) * L.at(i,k));
            }

            let val = A2.at(i,j) - sum1;
            U.set(i, val);
        }

        for (let i=j; i<dim[0]; i++) {
            for (let k = 0; k < j; k++) {
                sum2 += (U.at(k,j) * L.at(i,k));
            }

            let val = (A2.at(i,j) - sum2) / U.at(j,j);
            L.set(i,j,val);
        }
    }

    return [L,U,P];
}

function pivotize(matrix) {
    let dim = matrix.shape();
    let idMat = Matrix.eye(dim[0]);
    for (var j=0; i<dim[0]; i++) {
        let row = getMax(matrix, j);
        if (j != row) {
            //swap the rows
            let temp = idMat.getRow(row);
            idMat.setRow(row, idMat.getRow(j));
            idMat.setRow(j, temp);
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



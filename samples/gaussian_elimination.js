import Matrix from "../src/naive/matrix";
import Vector from "../src/naive/vector";

/**
 * Solving systems of n linear equations by Gaussian elimination algorithm.
 * The given matrix will change to the form of triangle matrix (as expected).
 * @param matrixToCalc
 * @param b
 * @returns {Array} the result n-vector
 */
export function calc(matrixToCalc, b){
    var x = [], sum, ik, temp, tempb, ratio, newVal, n = matrixToCalc.shape()[0];

    for (var k = 0; k < n; k++) {
        ik = k;
        // find the k-th pivot
        for (var i = k + 1; i < n; i++) {
            if (Math.abs(matrixToCalc.at(i, k)) > Math.abs(matrixToCalc.at(ik, k))) {
                ik = i;
            }
        }

        // swap rows in matrix
        for (var j = k; j < n; j++) {
            temp = matrixToCalc.at(ik, j);
            matrixToCalc.set(ik, j, matrixToCalc.at(k, j));
            matrixToCalc.set(k, j, temp);
        }
        // swap row in b
        tempb = b[k];
        b[k] = b[ik];
        b[ik] = tempb;

        for (var i = k+1; i < n; i++) {
            // make the calculation on the wnated item in the matrix
            ratio = matrixToCalc.at(i, k) / matrixToCalc.at(k, k);

            // make the calculation on vector b
            b[i] -= (ratio * b[k]);

            for (var j = k; j < n; j++) {
                newVal = (ratio * matrixToCalc.at(k, j));
                matrixToCalc.set(i, j, matrixToCalc.at(i,j) - newVal);
            }
        }
    }

    // back substitution
    for(var i=0; i< n; i++){
        x[i] = 0;
    }
    for (var i = n - 1; i >= 0; i--) {
        sum = 0;
        for (var j = i + 1; j < n; j++) {
            sum += matrixToCalc.at(i, j) * x[j];
        }
        x[i] = (b[i] - sum) / matrixToCalc.at(i, i);
    }
    return x;

};


// TODO : move and change this tests to appropriate testing framework :
//import {calc} from "../samples/gaussian_elimination";

//var m = new Matrix(3, 3);

////////////////////////////
//m.set(0,0,2);
//m.set(0,1,1);
//m.set(0,2,-1);
//
//m.set(1,0,-3);
//m.set(1,1,-1);
//m.set(1,2,2);
//
//m.set(2,0,-2);
//m.set(2,1,1);
//m.set(2,2,2);
//var res = calc(m, [8,-11,-3]);
////////////////////expected: 2,3,-1

//m.set(0,0,0);
//m.set(0,1,1);
//m.set(0,2,1);
//
//m.set(1,0,2);
//m.set(1,1,4);
//m.set(1,2,-2);
//
//m.set(2,0,0);
//m.set(2,1,3);
//m.set(2,2,15);
//var res = calc(m, [4,2, 36]); expected: -1, 2,2

//console.log(m.toString());
//console.log(res);

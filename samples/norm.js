import Matrix from "../src/naive/matrix";
import Vector from "../src/naive/vector";

/**
 * Calculate the (frobenius) norm of a given matrix
 * @param matrixToCalc
 * @returns the norm of the given matrix
 */
export function frobeniusNorm(matrixToCalc){
    var norm = 0;

    for (var i = 0; i < matrixToCalc.shape[0]; i++)
    {
        for (var j = 0; j < matrixToCalc.shape[1]; j++) {
            norm += Math.pow(matrixToCalc.at(i, j), 2);
        }
    }

    return Math.sqrt(norm);
}


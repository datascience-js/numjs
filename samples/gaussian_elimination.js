import Matrix from "../src/naive/matrix";
import Vector from "../src/naive/vector";

class GaussianElimination{
    calc(matrixToCalc){
        var ratio, b = new Vector();
        for (var i = 0; i < matrixToCalc.shape()[0]-1; i++) {
            for (var j = i; j < matrixToCalc.shape()[1]; j++) {
                ratio = matrixToCalc[j][i] / matrixToCalc[i][i];
                for (var k = i; k < matrixToCalc.shape()[0]; k++) {
                    matrixToCalc[j][k] -= (ratio * matrixToCalc[i][k]);
                    b[j] -= (ratio * b[i]);
                }
            }
        }
    }
}
export default GaussianElimination;
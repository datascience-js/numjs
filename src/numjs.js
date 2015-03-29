import Matrix from "./naive/matrix";
import {determinant} from "../samples/determinantCalculator.js"

function bullshit() {
    var arr = new Array(3);
    arr[0] = [6,1,1];
    arr[1] = [4,-2,5];
    arr[2] = [2,8,7];
    var matrix = Matrix.fromArray(arr);
    console.log(matrix.toString());
    var det = determinant(matrix);
    console.log(det);
}

bullshit();
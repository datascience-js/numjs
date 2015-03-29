import Matrix from "./naive/matrix";
import {determinant} from "../samples/determinantCalculator.js"

function bullshit() {
    var arr = new Array(2);
    arr[0] = [6,1,1];
    arr[1] = [4,-2,5];
    var matrix = Matrix.fromArray(arr);
    console.log(matrix);
    console.log(matrix.toString());
    var det = determinant(matrix);
    console.log(det);
}

bullshit();
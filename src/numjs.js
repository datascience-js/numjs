import Matrix from "./naive/matrix";
import {calc} from "../samples/gaussian_elimination";

//<<<<<<< HEAD
var m = new Matrix(3, 3);

//m.set(0,0,0);
//m.set(0,1,1);
//m.set(0,2,0);
//m.set(0,3,3);
//
//m.set(1,0,2);
//m.set(1,1,1);
//m.set(1,2,0);
//m.set(1,3,7);
//
//m.set(2,0,0);
//m.set(2,1,0);
//m.set(2,2,1);
//m.set(2,3,-1);


//m.set(0,0,9);
//m.set(0,1,3);
//m.set(0,2,4);
//m.set(0,3,7);
//
//m.set(1,0,4);
//m.set(1,1,3);
//m.set(1,2,4);
//m.set(1,3,8);
//
//m.set(2,0,1);
//m.set(2,1,1);
//m.set(2,2,1);
//m.set(2,3,3);
////////////////////////////
m.set(0,0,2);
m.set(0,1,1);
m.set(0,2,-1);

m.set(1,0,-3);
m.set(1,1,-1);
m.set(1,2,2);

m.set(2,0,-2);
m.set(2,1,1);
m.set(2,2,2);
////////////////////

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
//var res = calc(m, [4,2, 36]);


//var res = calc(m, [8,-11,-3]);

console.log(m.toString());
m.setCol(0, 5);
m.setCol(1, 9);
m.getCol(0);
m.getCol(1);

m.setRow(2, 99);
m.getRow(2);
//console.log(res);


//=======
//function bullshit() {
//    var arr = new Array(3);
//    for (var i = 0; i < 3; i++) {
//        arr[i] = [3,1,1];
//    }
//
//    var m = Matrix.fromArray(arr);
//    console.log("array: " + arr.toString());
//    console.log("matrix: " + m.toString());
//}
//
//bullshit();
//>>>>>>> d3279652d22aff2d742f3a1116fda420c89b15c7

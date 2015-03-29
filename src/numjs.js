import Matrix from "./naive/matrix";

function bullshit() {
    var arr = new Array(3);
    for (var i = 0; i < 3; i++) {
        arr[i] = [3,1,i];
    }

    var m = Matrix.fromArray(arr);
    console.log("matrix: " + m.toString());
    var minor1 = m.minor(0,0);
    console.log("matrix minor 0,0: " + minor1.toString());
    var minor2 = m.minor(1,0);
    console.log("matrix minor 1,0: " + minor2.toString());
    var minor3 = m.minor(2,0);
    console.log("matrix minor 1,0: " + minor3.toString());
    var minor4 = m.minor(1,1);
    console.log("matrix minor 1,1: " + minor4.toString());
}

bullshit();
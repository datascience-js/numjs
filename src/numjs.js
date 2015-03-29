import Matrix from "./naive/matrix";

function bullshit() {
    var arr = new Array(3);
    for (var i = 0; i < 3; i++) {
        arr[i] = [3,1,1];
    }

    var m = Matrix.fromArray(arr);
    console.log("array: " + arr.toString());
    console.log("matrix: " + m.toString());
}

bullshit();
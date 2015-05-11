import Vector from "../src/naive/vector";
import Matrix from "../src/naive/matrix";

export function calculateGramSchmidt(vectorsAsMatrix){
    let [rowsA , colsA] = vectorsAsMatrix.shape(), Y, Q, productX1, productYj;

    Y = new Vector(rowsA).zeros();
    Q = Matrix.zeros(rowsA, colsA);

    // Step 1
    let firstCol = new Vector(vectorsAsMatrix.col(0));
    productX1 = 1.0 / Math.sqrt(firstCol.dot(firstCol));

    // Steps 2 through 5
    Q.setCol(0, Vector.scalarMul(productX1, firstCol).toArray());

    for (let j=1; j < colsA; j++){

        // Step 3
        Y = new Vector(vectorsAsMatrix.getCol(j));

        for (let i = 0; i < j; i++){
            let inner = Y.dot(new Vector(Q.getCol(i)));
            console.log(inner);
            Y = Y.sub(Vector.scalarMul(inner, Q.getCol(i)));
        }

        // Step 4
        productYj = 1.0 / Math.sqrt(Y.dot(Y));
        Q.setCol(j, Vector.scalarMul(productYj, Y).toArray());
    }

    return Q;
}
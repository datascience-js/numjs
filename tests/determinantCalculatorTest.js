import {determinant} from "../samples/determinantCalculator.js"
import Matrix from "../src/naive/matrix";
import assert from "assert";

describe("Determinant function tests", () => {
    it("2X2 matrix should return -37", () => {
        let matrix = Matrix.fromArray([[1,2],[28,19]]);
        assert.equal(determinant(matrix), -37);
    });

    it("2X2 matrix should return -37", () => {
        let matrix = Matrix.fromArray([[1,2],[28,19]]);
        assert.equal(determinant(matrix), -37);
    });

    it("2X2 matrix with large values should return 255,505", () => {
        let matrix = Matrix.fromArray([[100,905],[-281,12]]);
        assert.equal(determinant(matrix), 255505);
    });

    it("2X2 matrix should return 1", () => {
        let matrix = Matrix.fromArray([[1,0],[0,1]]);
        assert.equal(determinant(matrix), 1);
    });

    it("2X2 matrix with negative values should return 6750", () => {
        let matrix = Matrix.fromArray([[-12,201],[-30,-60]]);
        assert.equal(determinant(matrix), 6750);
    });

    it("2X2 matrix with zero values should return 0", () => {
        let matrix = Matrix.fromArray([[0,0],[0,0]]);
        assert.equal(determinant(matrix), 0);
    });

    it("2X2 matrix with linear dependent values should return 0", () => {
        let matrix = Matrix.fromArray([[1,2],[2,4]]);
        assert.equal(determinant(matrix), 0);
    });

    it("2X3 matrix should return undefined", () => {
        let matrix = Matrix.fromArray([[1,2,3],[2,4,3]]);
        assert.equal(determinant(matrix), undefined);
    });

    it("3x3 matrix should return -3", () => {
        let matrix = Matrix.fromArray([[1,2,3],[2,4,3], [1,1,1]]);
        assert.equal(determinant(matrix), -3);
    });

    it("3x3 matrix should return -3900", () => {
        let matrix = Matrix.fromArray([[1,50,11],[1,100,90],[-1,0,-10]]);
        assert.equal(determinant(matrix), -3900);
    });

    it("3x3 matrix should return 0", () => {
        let matrix = Matrix.fromArray([[1,2,999],[0,0,0],[1,0,1000]]);
        assert.equal(determinant(matrix), 0);
    });

    it("4x4 matrix should return 0", () => {
        let matrix = Matrix.fromArray([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]);
        assert.equal(determinant(matrix), 0);
    });

    it("4x4 matrix should return -671,172", () => {
        let matrix = Matrix.fromArray([[1,2,3,5],[1,1,1,1],[900,10,191,17],[300,500,10,2]]);
        assert.equal(determinant(matrix), -671172);
    });

    it("6x6 matrix should return 253165", () => {
        let matrix = Matrix.fromArray([[1,5,10,1,5,6],[20,2,3,5,1,10],[100,-1,-4,10,-3,-4],
            [9,-50,-300,16,-10,-5],[1,2,5,7,7,8],[2,1,2,1,8,10]]);
        assert.equal(determinant(matrix), 40084623);
    });

    it("6x6 matrix should return 253165", () => {
        let matrix = Matrix.fromArray([[1,5,10,1,5,6],[20,2,3,5,1,10],[100,-1,-4,10,-3,-4],
            [9,-50,-300,16,-10,-5],[1,2,5,7,7,8],[2,1,2,1,8,10]]);
        assert.equal(determinant(matrix), 40084623);
    });


});

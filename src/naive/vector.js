class Vector {

	constructor(arrayOrSize){
		if(arrayOrSize instanceof Array){
			for(var i = 0; i < arrayOrSize.length; i++){
				this[i] = arrayOrSize[i];
			}
			this.len = arrayOrSize.length; 
		} else {
			this.len = arrayOrSize;
		}
	}

	add(other){
		var v = new Vector(this.len);
		for(var i = 0; i < other.len; i++){
			v[i] = this[i] + other[i];
		}
		return v;
	}

	sub(other){
		var v = new Vector(this.len);
		for(var i = 0; i < other.len; j++){
			v[i] = this[i] - other[i];
		}
		return v;
	}

	dot(other){
		let sum = 0;
		for(var i = 0; i < this.len; i++){
			sum += this[i] * other[i];
		}
		return sum;
	}

	zeros(){
		for(var i = 0; i < this.len; i++){
			this[i] = 0;
		}
	}

	toArray(){
		let arr = new Array(this.len);
		for(let i = 0; i< this.len; i++){
			arr[i] = this[i];
		}
		return arr;
	}
}
export default Vector;

Vector.scalarMul = function(c, vec){
	let mulVec = new Vector(vec.len);
	mulVec.zeros();

	for (let j = 0; j < vec.len; j++){
		mulVec[j] = c*vec[j];
	}
	return mulVec;
};
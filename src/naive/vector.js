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
			sum += this[i] + other[i];
		}
		return sum;
	}
	
}
export default Vector;
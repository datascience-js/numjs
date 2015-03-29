// naive matrix implementation
class Matrix {
	constructor(w,h){
		// data should be stored in initial slots, attributes 
		// should be cached to take less slots, arrays are expensive
		this.data = new Array(h);
		for(var i = 0; i < h; i++){
			this.data[i] = new Array(w);
		}
	}
	shape(){
		return [this.data.length, this.data[0].length];
	}

	set(x,y,v){
		this.data[x][y]=v;
	}
	
	at(x,y){
		return this.data[x][y];
	}
	
	add(other){
		var m = new Matrix(this.data.length, this.data[0].length);
		for(var i = 0; i < this.data.length;i++){
			for(var j = 0; j < this.data[0].length; j++){
				m.data[i][j] = this.data[i][j] + other.data[i][j]; 
			}
		}
		return m;
	}
	clone(){
		var [width, height] = this.shape();
		var m = new Matrix(width, height);
		for(var i = 0; i < width; i++){
			for(var j = 0; j < height; j++){
				m.data[i][j] = this.data[i][j];
			}
		}
		return m;
	}
	pow(n){
		// this is so naive I'm offended, not even squaring
		var m = this.clone();
		for(var i = 0; i < n; i++){
			var m = m.mul(this);
		}
		return m;
	}
	smul(scalar){
		var m = new Matrix(this.data.length, this.data[0].length);
		for(var i = 0; i < this.data.length; i++){
			for(var j = 0; j < this.data[0].length; j++){
				m.data[i][j] = this.data[i][j] * scalar;
			}
		}
	}
	mul(other){
		// this should definitely be at least Strassen
		// n[i][j] = Sum
		var m = new Matrix(this.data.length, this.data[0].length);
		for(var i = 0; i < this.data.length;i++){
			for(var j = 0; j < this.data[0].length; j++){
				m.data[i][j] = this.data[i][j] + other.data[i][j]; 
			}
		}
		return m;
	}
	
	row(i){
		return this.data[i];
	}
	
	col(j){
		var column = new Array(this.data[0].length);
		for(var i = 0; i < this.data[0].length; i++){
			column[i] = this.data[i][j];
		}
		return column;
	}
	
	transpose(){
		var m = new Matrix(this.data.length, this.data[0].length);
		for(var i = 0; i < this.data.length; i++){
			for(var j = 0; j < this.data[0].length; j++){
				m.data[i][j] = this.data[j][i];
			}
		}
		return m;
	}
	
	sub(other){
		var m = new Matrix(this.data.length, this.data[0].length);
		for(var i = 0; i < this.data.length;i++){
			for(var j = 0; j < this.data[0].length; j++){
				var row = this.data[i];
				var col = other.col(j);
				var sum = 0;
				for(var i = 0; i < row.length; i++){
					sum += row[i] * col[j];
				} 
				m.data[i][j] = sum;
			}
		}
		return m;
	}
	sum(){
		let [width, height] = this.shape();
		let sum = 0;
		for(let i = 0; i < width; i++){
			for(let j = 0; j < height; j++){
				sum += this.data[i][j];
			}
		}
		return num;
	}
	toString(){
		var str = '{';
		for (var i = 0; i < this.data.length; i++) {
			str += "[" + this.data[i].toString() + "]";
			if (i < this.data.length - 1) {
				str += ",";
			}
		}
		return str + '}';
	}
	//toArray() {
	//	var rows = this.data.length;
	//	var cols = this.data[0].length;
	//}
}

Matrix.eye = function(size){
	var m = new Matrix(size, size);
	for(var i = 0; i < size; i++){
		for(var j = 0; j < size; j++){
			if(i === j) m.data[i][j] = 1.0;
			else m.data[i][j] = 0.0;
		}
	}
	return m;
};
Matrix.zeros = function(size){
	var m = new Matrix(size, size);
	for(var i = 0; i < size; i++){
		for(var j = 0; j < size; j++){
			m.data[i][j] = 0.0;
		}
	}
	return m;
};

Matrix.fromArray = function(arr) {
	//TODO: check input is valid (non zero size array etc.)
	if (arr[0] && arr[1]) {
		var rows = arr[0].length;
		var cols = arr[1].length;
		var m = new Matrix(rows, cols);
		for (var i = 0; i < rows; i++) {
			m.data[i] = arr[i];
		}
		return m;
	}
};

export default Matrix;
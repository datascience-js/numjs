// naive matrix implementation
class Matrix{
	constructor(w,h){
		// data should be stored in initial slots, attributes 
		// should be cached to take less slots, arrays are expensive
		this.data = new Array(h);
		for(var i = 0; i < h; i++){
			this.data[i] = new Array(w);
		}
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
export default Matrix;
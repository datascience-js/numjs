// Matrix of up to 16K elements on x and y for doubles
// HHHH HHHH HHHH HHWW WWWW WWWW WWWW ???? 

function SmallMatrix(x,y){
	const doubleSize = 8;

	if((this.x > (1 << 14)) || (this.y > (1 << 14))){
		throw new Error("Unsupported size " + x + " " + y);
	}
	this.bitfield = x | (y << 14);
	this._raw = new Buffer(8 * x * y); // todo lazy allcoate
}

SmallMatrix.prototype.toArray = function(){
	var w = width(this.bitfield);
	var h = height(this.bitfield);
	console.log(w, h);
	var arr = new Array(w);
	for(var i = 0; i < w; i++){
		arr[i] = new Array(h);
		for(var j = 0; j < h; j++){

			arr[i][j] = this.get(i, j);
		}
	}
	return arr;
};

SmallMatrix.prototype.set = function(x,y,val){
	this._raw.writeDoubleBE(val, at(this, x, y));
};

SmallMatrix.prototype.get = function(x,y,val){
	return this._raw.readDoubleBE(at(this, x, y));
};
SmallMatrix.zeros = function(size){
	var m = new SmallMatrix(size, size);
	m._raw.fill(0);
	return m;
};

SmallMatrix.eye = function(size){
	var m = new SmallMatrix(size, size);
	m._raw.fill(0);
	for(var i = 0; i < size; i++){
		m.set(i, i, 1);
	}
	return m;
};

function at(mat, x, y){
	return x * width(mat.bitfield) + y;
}

function width(bitmask){
	return bitmask & 16383;
}

function height(bitmask){
	return (bitmask >> (1 << 14)) & 16383;

}
export default SmallMatrix;
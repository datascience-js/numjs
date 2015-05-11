console.log("Bootstrapping!");
var Promise = require("bluebird");
require("babel/register")({ 
	"stage" : 0,
	optional: ["bluebirdCoroutines"],
	sourceMap: "inline"
});
Promise.longStackTraces();
require("./numjs.js");



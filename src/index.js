console.log("Bootstrapping!");
var Promise = require("bluebird");
require("babel/register")({ 
	experimental: true,
	optional: ["bluebirdCoroutines"],
	sourceMap: "inline"
});
Promise.longStackTraces();
require("./numjs.js");



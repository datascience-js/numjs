console.log("Bootstrapping!");
var Promise = require("bluebird");
require("babel/register")({ 
	experimental: true,
	optional: ["bluebirdCoroutines"]
});
Promise.longStackTraces();
require("./numjs.js");



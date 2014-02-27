/************************************** EXTERNAL IMPORTS ******************************************/

var mkdirp = require("mkdirp");

/************************************** INTERNAL IMPORTS ******************************************/

/******************************************* MODULE ***********************************************/

// This function makes sure that a directory path exists. If it doesn't, then 
// its created.
var assertPath = function (path, callback) {
	mkdirp(path, callback)
};

/******************************************* EXPORTS **********************************************/

exports.assertPath = assertPath;
const path = require("path");

// returns path for the main file that the app is running at
module.exports = path.dirname(process.mainModule.filename);

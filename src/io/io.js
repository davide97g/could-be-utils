const fs = require("fs");
const io = function() {};
io.prototype = {
  read: function(filename, format) {},
  write: function(filename, data) {},
  append: function(filename, data) {}
};
module.exports = io;

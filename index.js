'use strict';

var diff = function(a, b) {
  return a.filter(function(i) {
    return b.indexOf(i) < 0;
  });
};

module.exports = function(obj, keys) {
  if (obj !== null && typeof obj === 'object') {
    console.log("Not an object");
    throw new Error("First argument must be an object.");
  }
  if (!Array.isArray(keys)) {
    console.log("Not an array");
    throw new Error("Second argument must be an array.")
  }
  return diff(keys, Object.keys(obj)).length === 0;
};
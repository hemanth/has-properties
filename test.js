'use strict';
var assert = require('assert');
var hasProperties = require('./index');

var positive = {
  name: 'Kitty',
  age: 42,
  type: 'Cat'
};

var negitive = {
  name: 'Kitty',
  age: 24
}

var mandatory = ['name', 'type'];

describe("has key check", function() {

  it("should have mandatory keys", function() {
    assert(hasProperties(positive, mandatory));
  });

  it("should not have mandatory keys", function() {
    assert(!hasProperties(negitive, mandatory));
  });

  it("should throw exception", function() {
    try {
      hasProperties('', []);
      assert.fail();
    } catch (err) {
      assert.equal(err, 'Error: First argument must be an object.');
    }
  });

  it("should throw exception", function() {
    try {
      hasProperties([], []);
      assert.fail();
    } catch (err) {
      assert.equal(err, 'Error: First argument must be an object.');
    }
  });

  it("should throw exception", function() {
    try {
      hasProperties(null, []);
      assert.fail();
    } catch (err) {
      assert.equal(err, 'Error: First argument must be an object.');
    }
  });

  it("should throw exception", function() {
    try {
      hasProperties(undefined, []);
      assert.fail();
    } catch (err) {
      assert.equal(err, 'Error: First argument must be an object.');
    }
  });
});

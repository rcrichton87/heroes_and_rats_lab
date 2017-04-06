var Food = require('../food.js');
var assert = require('assert');

describe("Food", function(){

  var food;

  beforeEach(function(){
    food = new Food("Milk", 10);
  })

  it("has a name", function(){
    assert.strictEqual("Milk", food.name);
  })

  it("has a regen value", function(){
    assert.strictEqual(10, food.regen);
  })

  it("has is not poisoned", function(){
    assert.strictEqual(false, food.poisoned);
  })




})
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

})
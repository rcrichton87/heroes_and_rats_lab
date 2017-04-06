var Rat = require('../rat.js');
var Food = require('../food.js');
var assert = require('assert');

describe("Rat", function(){

  var rat;
  var food;

  beforeEach(function(){
    rat = new Rat();
    food = new Food("Sausage",15);

  });

  it("can touch food", function(){
    rat.touch(food);
    assert.strictEqual(true, food.poisoned);
  })

})
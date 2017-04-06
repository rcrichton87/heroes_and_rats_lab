var Hero = require('../hero.js');
var assert = require('assert');

describe("Hero", function(){

  var hero;

  beforeEach(function(){
    hero = new Hero("Link", "Milk");
  });

  it("has a name", function(){
    assert.strictEqual("Link", hero.name);
  })

  it("has a fave food", function(){
    assert.strictEqual("Milk", hero.faveFood);
  })

})
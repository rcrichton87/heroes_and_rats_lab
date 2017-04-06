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

  it("has health 100 to start", function(){
    assert.strictEqual(100, hero.health);
  })

  it("has no quests to start", function(){
    assert.strictEqual(0, hero.quests.length);
  })

})
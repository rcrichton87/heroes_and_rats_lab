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

})
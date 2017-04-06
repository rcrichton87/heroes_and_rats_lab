var Quest = require('../quest.js');
var assert = require('assert');

describe("Quest", function(){

  var quest;

  beforeEach(function(){
    quest = new Quest(2, 4, 1000);
  });

  it("has a difficulty", function(){
    assert.strictEqual(2, quest.difficulty);
  })


it("has an urgency", function(){
  assert.strictEqual(4, quest.urgency);
})
})
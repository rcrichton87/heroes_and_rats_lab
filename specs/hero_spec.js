var Hero = require('../hero.js');
var Food = require('../food.js');
var Quest = require('../quest.js');
var assert = require('assert');

describe("Hero", function(){

  var hero;
  var food1;
  var food2;
  var quest1;
  var quest2;
  var quest3;

  beforeEach(function(){
    hero = new Hero("Link", "Milk");
    food1 = new Food ("Milk", 10);
    food2 = new Food ("Bread", 5);
    quest1 = new Quest (1, 2, 50);
    quest2 = new Quest (2, 4, 200);
    quest3 = new Quest (3, 5, 2000);
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

  it("can talk", function(){
    assert.strictEqual("My name is Link", hero.talk());
  })

  it("can heal from food", function(){
    hero.health = 80;
    hero.eat(food2);
    assert.strictEqual(85, hero.health);
  })

  it("gets more from fave food", function(){
    hero.health = 80;
    hero.eat(food1);
    assert.strictEqual(95, hero.health);
  })

  it("can add a task", function(){
    hero.addQuest(quest1);
    assert.strictEqual(1, hero.quests.length);
  })

  it("can sort quests by difficulty", function(){
    hero.addQuest(quest1);
    hero.addQuest(quest3);
    hero.addQuest(quest2);

    var expected = [quest1, quest2, quest3];
    hero.sortQuests("difficulty");

    assert.deepEqual(expected, hero.quests);
  })

  it("can sort quests by urgency", function(){
    hero.addQuest(quest1);
    hero.addQuest(quest3);
    hero.addQuest(quest2);

    var expected = [quest1, quest2, quest3];
    hero.sortQuests("urgency");

    assert.deepEqual(expected, hero.quests);
  })

  it("can sort quests by reward", function(){
    hero.addQuest(quest1);
    hero.addQuest(quest3);
    hero.addQuest(quest2);

    var expected = [quest1, quest2, quest3];
    hero.sortQuests("reward");

    assert.deepEqual(expected, hero.quests);
  })

  it("can view complete quests", function(){
    quest2.completeQuest();
    quest3.completeQuest();
    hero.addQuest(quest1);
    hero.addQuest(quest3);
    hero.addQuest(quest2);
    var expected = [quest3, quest2];
    assert.deepEqual(expected, hero.viewCompletedQuests());
  })

  it("can view incomplete quests", function(){
    quest2.completeQuest();
    quest3.completeQuest();
    hero.addQuest(quest1);
    hero.addQuest(quest3);
    hero.addQuest(quest2);
    var expected = [quest1];
    assert.deepEqual(expected, hero.viewIncompletedQuests());
  })

})
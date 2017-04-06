var Hero = function(name, faveFood){
  this.name = name;
  this.faveFood = faveFood;
  this.health = 100;
  this.quests = [];
}

Hero.prototype = {
  talk: function(){
    return "My name is " + this.name;
  },

  eat: function(food){
    if (food.name === this.faveFood){
      this.health += (food.regen * 1.5);
    } else {
      this.health += food.regen;
    }
  },

  addQuest: function(quest){
    this.quests.push(quest);
  },

  sortQuests: function(sortBy){
    if(sortBy === "difficulty"){
      this.quests.sort(function (a, b){
        return a.difficulty - b.difficulty
      })
    
    }
  
  }

}


module.exports = Hero;
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
      console.log("fave food")
      this.health += (food.regen * 1.5);
    } else {
      console.log("other food")
      this.health += food.regen;
    }
  }
}


module.exports = Hero;
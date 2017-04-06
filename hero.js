var Hero = function(name, faveFood){
  this.name = name;
  this.faveFood = faveFood;
  this.health = 100;
  this.quests = [];
}

Hero.prototype = {
  talk: function(){
    return "My name is " + this.name;
  }
}


module.exports = Hero;
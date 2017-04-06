var Quest = function(difficulty, urgency, reward){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.complete = false;
}

Quest.prototype = {
  completeQuest: function(){
    this.complete = true;
  }
}


module.exports = Quest;
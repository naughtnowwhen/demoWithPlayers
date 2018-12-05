'use strict';

//pushed array for Constructed players
let players = [];

// simplified constructor
function Player (rawObj){
  for (let key in rawObj){
    this[key] = rawObj[key];
  }
}

// handlebars prototype
Player.prototype.toHtml = function () {
  // 1. grab the template from the HTML doc
  let templating = $('#display-template').html();
  // 2. compile with Handlebars
  let compiler = Handlebars.compile(templating);
  let compiled = compiler(this);
  return compiled;
};

// feeder
arrOfPlayers.forEach(rawPlayer => {
  players.push(new Player(rawPlayer));
});

// appender
players.forEach(playerObj => {
  $('#putHere').append(playerObj.toHtml());
});


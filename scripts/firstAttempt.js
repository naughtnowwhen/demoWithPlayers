let offense = 'offense', defense = 'defense', tylerLockett, bobbyWagner, russellWilson, duaneBrown;
let playerObj = {};

let builtPlayers = [];
const Builder = function (name,speed,strength,catching,side,throwing) {
  this.name = name;
  this.speed = speed;
  this.strength = strength;
  this.catching = catching;
  this.side = side;
  this.throwing = throwing;
  builtPlayers.push(this);
};


Builder.prototype.render = function () {
// a) get the template from the HTML document
  let templateHtml = $('#display-template').html();
  // compile it with Handlebars
  let templateCompiled = Handlebars.compile(templateHtml);
  // with this method, must return
  let displayPlayer = templateCompiled(this);
  console.log(displayPlayer);
  return displayPlayer;
};

//that works, now generalize it to the others.
const TylerLockettBuilder = function (rawData) {
  for (let key in rawData){
    this[key] = rawData[key];
  }
};

let freshlyBuilt = [];
const PlayerBuilder = function (rawData){
  for (let key in rawData){
    this[key] = rawData[key];
  }
  freshlyBuilt.push(this);
};

PlayerBuilder.prototype.render = function (){
  // a) get the template from the HTML document
  let templateHtml = $('#display-template').html();
  // compile it with Handlebars
  let templateCompiled = Handlebars.compile(templateHtml);
  // with this method, must return
  let displayPlayer = templateCompiled(this);
  console.log(displayPlayer);
  return displayPlayer;
};
// first attempt
// let putHere = $('#putHere');
// putHere.append(freshlyBuilt[0].render());

freshlyBuilt.forEach(obj => {
  $('putHere').append(obj.render());

});



let arrOfPlayers = [
  {
    name : 'tylerLockett',
    speed : true,
    strength : 'limited',
    catching : 'great',
    side : offense,
    throwing : false
  },

  {
    name : 'bobbyWagner',
    speed : true,
    strength : 'great',
    catching : false,
    side : defense,
    throwing : false
  },

  {
    name : 'russellWilson',
    speed : true,
    strength : 'limited',
    catching : 'limited',
    side : offense,
    throwing : true
  },

  {
    name : 'duaneBrown',
    speed : false,
    strength : true,
    catching : false,
    side : offense,
    throwing : false
  },
];


//ok, that worked
let tyler = new TylerLockettBuilder(arrOfPlayers[0]);

let aaa = "that worked and i like it!";


arrOfPlayers.forEach(playerObj => {
  let order = new PlayerBuilder(playerObj);
});

// name,speed,strength,catching,side,throwing
// long form way to do it here here
// let buildFirst = new Builder(arrOfPlayers[0].name, arrOfPlayers[0].speed, arrOfPlayers[0].strength, arrOfPlayers[0].catching, arrOfPlayers[0].side,arrOfPlayers[0].throwing);

// let buildSecond = new Builder (arrOfPlayers[1].name, arrOfPlayers[1].speed, arrOfPlayers[1].strength, arrOfPlayers[1].catching, arrOfPlayers[1].side,arrOfPlayers[1].throwing);

// let buildThird = new Builder (arrOfPlayers[2].name, arrOfPlayers[2].speed, arrOfPlayers[2].strength, arrOfPlayers[2].catching, arrOfPlayers[2].side,arrOfPlayers[2].throwing);

// let buildFourth = new Builder (arrOfPlayers[3].name, arrOfPlayers[3].speed, arrOfPlayers[3].strength, arrOfPlayers[3].catching, arrOfPlayers[3].side,arrOfPlayers[3].throwing);
// there there

//example
// neighborhoodDataSet.forEach(neighborhoodObject => {
//   neighborhoods.push(new Neighborhood(neighborhoodObject));
// });

arrOfPlayers.forEach(playerObj => {
  console.log(playerObj);
  builtPlayers.push(new Builder(playerObj));
});




for (let player in arrOfPlayers){
  playerObj[arrOfPlayers[player].name] = arrOfPlayers[player];
}

/* <option value="3"> 3 </option> */


let finder = $('#selId');

let l = Object.keys(playerObj).length;

let optionArr = [];
for (let key in playerObj) {
  let option = `<option value="${playerObj[key].name}"> ${playerObj[key].name} </option> `;
  optionArr.push(option);
}

for (let opt in optionArr) {
  let option = optionArr[opt];
  finder.append(option);
}

let selector = $('#selId');
selector.on('change', function (){
  let current = this.value;
  // console.log(current);
  // for (let player in playerObj){
  // console.log(current, 'current', playerObj[player].name);
});

function displayer (arg) {
  console.log('from the callback', arg);

}

function grabByHandles () {
  console.log('grab the handlebars');
}

grabByHandles();

let playerButton = $('#playerBtn');

playerButton.on('click', displayer, function(){
  let player = $('#selId').val();
  displayer(player);
});



let entryArr = [];
let elArr = [];
Object.entries(playerObj).forEach(entry => {
  entryArr.push(entry);
  console.log(entry, 'entry');
  entry.forEach(ele => {
    console.log(ele, 'ele');
    elArr.push(ele);
  });
});






// playerObj[arrOfPlayers[0].name] = arrOfPlayers[0];






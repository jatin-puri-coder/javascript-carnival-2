  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

let cells = document.getElementsByTagName('td')

let randomNumber = Math.floor(Math.random() * cells.length);

let randomCell = cells[randomNumber]

var mole = document.createElement('img');
mole.src = './mole.PNG';
mole.height = 75;
mole.width = 75;
randomCell.appendChild(mole);

mole.onclick= moleJump

function moleJump (){
  randomNumber = Math.floor(Math.random() * cells.length);
  randomCell = cells[randomNumber]
  randomCell.appendChild(mole);

  let audio = new Audio('./whack-audio.wav');
  audio.play();


}




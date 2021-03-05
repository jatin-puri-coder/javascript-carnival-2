  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') { 
        // up arrow
        changeUpDown(-1);
    }
    else if (e.keyCode == '40') {
        // down arrow
        changeUpDown(1);
    }
    else if (e.keyCode == '37') {
       // left arrow
      changeLeftRight(-1);
    }
    else if (e.keyCode == '39') {
       // right arrow
       changeLeftRight(1);
    }

}
let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0

let selectorIndex = 0


let head = document.getElementById("head")
let body = document.getElementById("body")
let shoes = document.getElementById("shoes")


function changeLeftRight (direction){

  if (selectorIndex === 0) {
    headIndex += direction

    if (headIndex < 0){
      headIndex = 5
    }

    if (headIndex > 5){
      headIndex = 0
    }

    head.src = "./images/head" + headIndex + ".png"
  }


  if (selectorIndex === 1){

    bodyIndex += direction
      
    if (bodyIndex < 0){
      bodyIndex = 5
    };
        
    if (bodyIndex > 5){
      bodyIndex = 0
    };
        
    body.src = "./images/body" + bodyIndex + ".png"
    }



  if (selectorIndex === 2){

    shoesIndex += direction
     
    if (shoesIndex < 0){
        shoesIndex = 5
    };
        
    if (shoesIndex > 5){
      shoesIndex = 0
    };
        
    shoes.src = "./images/shoes" + shoesIndex + ".png"
      }




}


function changeUpDown (direction){
selectorIndex += direction

if (selectorIndex < 0){
  selectorIndex = 2
};

if (selectorIndex > 2){
  selectorIndex = 0
};

};
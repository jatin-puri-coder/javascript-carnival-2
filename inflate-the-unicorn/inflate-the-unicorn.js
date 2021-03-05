  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

let unicorn = [unicorn1 = {
  name: "unicorn1",
  status: 0,
  id: "unicorn1"
}, unicorn2 = {
  name: "unicorn2",
  status: 0,
  id: "unicorn2"
}, unicorn3 = {
  name: "unicorn3",
  status: 0,
  id: "unicorn3"}]


function inflateBalloon(unicornNum){
  var img1 = "./images/unicorn-0.png"
  var img2 = "./images/unicorn-1.png"
  var img3 = "./images/unicorn-2.png"
  var img4 = "./images/unicorn-3.png"

 
  if (unicornNum.status === 0) {
    unicornNum.status ++
    document.getElementById(unicornNum.id).src = img2;
  }
 else if (unicornNum.status === 1) {
   unicornNum.status ++
   document.getElementById(unicornNum.id).src = img3
 }
 else if (unicornNum.status === 2) {
  unicornNum.status ++
  document.getElementById(unicornNum.id).src = img4
}

else if (unicornNum.status === 3) {
  unicornNum.status ++
  alert(unicornNum.name + " says thank you")

}



} 


 

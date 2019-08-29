var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function() {
  hard.classList.remove("selected");
  easy.classList.add("selected");

})

hard.addEventListener("click", function() {
  easy.classList.remove("selected");
  hard.classList.add("selected");
})


resetButton.addEventListener("click", function (){
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.background = "#232323";
});

colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    //compare color to pickedColor
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again"
    }
  });
}

function changeColors(color) {
  //loop through all the squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = []
  //repeat num times

  for (var i= 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor())
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a red from -255, green from 255, blue from 255
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  "rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

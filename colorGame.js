var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		// below line is ternary operator - shortened form of if statement
		this.textContent === "Easy" ? numSquares = 3: numSquares=6;
		reset();
	});
}

function reset(){	// generate new colors
	colors = generateRandomColors(numSquares);
	// pick new random color
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	// update span to empty string
	messageDisplay.textContent = "";
	// change colors of squares
	for(var i = 0; i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
	reset();
});

for (var i = 0; i < squares.length; i++){
	// add colors to squares
		squares[i].style.backgroundColor = colors[i];
		// add event listeners
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor
			// compare color to picked color
			if(clickedColor === pickedColor){
				alert("correct");
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;
			} else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
}

function changeColors(color) {
	// loop through all the squares to match given color
	for(var i = 0; i<squares.length; i ++){
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]; 
}

function generateRandomColors(num){
	// make array
	var arr = [];
	// add num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
		// get random color and push into arr
	}
	return arr;
}

function randomColor(){
	// pick red, green and blue from 0-255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g +", " + b +")";
}

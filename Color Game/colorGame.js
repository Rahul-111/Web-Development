var numsquare =6;
var colors=generateRandomColor(numsquare);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 =document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numsquare=3;
	colors = generateRandomColor(numsquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numsquare=6;
	colors = generateRandomColor(numsquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
	}
});
resetButton.addEventListener("click",function(){
	// generate all new colors
	colors = generateRandomColor(numsquare);
	//pick a new random color from arrat
	pickedColor=pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent=pickedColor;
	//change color of square
    this.textContent="New Colors";
    messageDisplay.textContent="";
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}

	h1.style.background="steelblue"
})

for(var i=0;i<squares.length;i++){
    //add initial colors to squares
    squares[i].style.backgroundColor=colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click",function(){
    	//alert("clicked a square");
    	//grab color of clicked square
    	var clickedColor = this.style.backgroundColor;
    	//compare color to pickedColor
    	if(clickedColor===pickedColor){
    		messageDisplay.textContent="Correct!";
    		resetButton.textContent="Play Again?";
    		h1.style.backgroundColor=clickedColor;
    		changeColors(clickedColor);
    	}
    	else{
    		this.style.backgroundColor="#232323";
    		messageDisplay.textContent="Try Again";	
    	}
    });
}

function changeColors(color){
	//loop through all squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColor(num){
	//make an array
	var arr=[]
	//add num random colors to arr
	for(var i=0;i<num;i++){
		//get random color and push into arr
		arr.push(randomColor());
	}

	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r=Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g=Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b=Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
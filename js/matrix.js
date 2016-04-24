var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");

//making the canvas full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//kitten characters - taken from the unicode charset
var kitten = "KittenCodeskITTENcODES";
//converting the string into an array of single characters
kitten = kitten.split("");

var font_size = 10;
var columns = canvas.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(226,230,228, 0.05)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#576b4e"; //Dark green text
	ctx.font = font_size + "px 'Ubuntu'";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random kitten character to print
		var text = kitten[Math.floor(Math.random()*kitten.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
			drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
	}
}

//speed of the falling letters
setInterval(draw, 50);
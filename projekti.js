// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>  // linku per jquery

$.getScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" 
 );

 // editimi fotove

 $(".left, .right").attr("border", "3px solid black")




// funksioni per smooth scroll te te gjitha linqet
$(document).ready(function(){

    $("a").on('click', function(event) {
  
     
      if (this.hash !== "") {
        event.preventDefault();
  
        
        var hash = this.hash;
  
       
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      } 
    });
  });
  

// Funksioni per animimin e paragrafit hyres
function
animate_string(id)
{
  var element = document.getElementById(id);
  var textNode = element.childNodes[0];
var text = textNode.data;
setInterval( 
  function(){
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;

  }, 300
)
}



// funksioni per bore ne background

let canvas, ctx, w, h, snows, snows2;

function init() {
	canvas = document.querySelector("#canvas");
	ctx = canvas.getContext("2d");

	resizeReset();
	animationLoop();
}



function resizeReset() {
	w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;

	snows = [];
	for (let i = 0; i < 500; i++) {
		snows.push(new Snow());
	}
	snows2 = [];
	for (let i = 0; i < 500; i++) {
		snows2.push(new Snow2());
	}
}

function animationLoop() {
	ctx.clearRect(0, 0, w, h);
	drawScene();
	requestAnimationFrame(animationLoop);
}

function drawScene() {
	for (let i = 0; i < snows.length; i++) {
		snows[i].update();
		snows[i].draw();
	}
	for (let i = 0; i < snows2.length; i++) {
		snows2[i].update();
		snows2[i].draw();
	}
}

function getRandomInt(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

class Snow {
	constructor() {
		this.reset();
		this.rgb = "52, 235, 236"; // change snow color
	}
	reset() {
		this.x = getRandomInt(0, w);
		this.xc = ((this.x - (w / 2)) / (w / 2)) / 2;
		this.y = getRandomInt(-(h * 0.3), h);
		this.yc = getRandomInt(10, 15) / 10;
		this.size = getRandomInt(10, 20) / 10;
		this.a = getRandomInt(-10, 0) / 10;
		this.ac = getRandomInt(3, 5) / 100;
	}
	draw() {
		ctx.beginPath(); // since canvas works only with rectangles and paths
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.fillStyle = `rgba(${this.rgb}, ${this.a})`;
		ctx.strokeStyle = `rgba(${this.rgb}, ${this.a})`;
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
	update() {
		this.x += this.xc;
		this.y += this.yc;
		this.a += this.ac;
		if (this.a > 2) {
			this.ac *= -1;
		} else if (this.a < 0 && this.ac < 0) {
			this.reset();
		}
	}
}

class Snow2 {
	constructor() {
		this.reset();
		this.rgb = "52, 235, 236";
	}
	reset() {
		this.x = getRandomInt(0, w);
		this.y = getRandomInt(0, h);
		this.size = getRandomInt(0, 5) / 10;
		this.a = getRandomInt(-10, 0) / 10;
		this.ac = 0.01;
	}
	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.fillStyle = `rgba(${this.rgb}, ${this.a})`;
		ctx.strokeStyle = `rgba(${this.rgb}, ${this.a})`;
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
	update() {
		this.y -= 0.1;
		this.a += this.ac;
		if (this.a > 1.5) {
			this.ac *= -1;
		} else if (this.a < 0 && this.ac < 0) {
			this.reset();
		}
	}
}

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", resizeReset);


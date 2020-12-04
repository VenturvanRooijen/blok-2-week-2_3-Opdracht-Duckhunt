var container = document.getElementById("container");
var duck = document.getElementById("duck");
var hit = document.getElementById("hit");
var mis = document.getElementById("mis");
var dir = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
var hitCounter = 0;
var missCounter = 0;
var posLeft = 600;
var posTop = 300;

function moveDuck() {
	var number = Math.floor(Math.random() * dir.length);
	var direction = dir[number];

	if(direction == "N") {
		if(posTop > 0) {
		posTop = posTop - 75;
	};
	duck.style.top = posTop + "px";
}
	else if(direction == "NE") {
		if (posTop > 0 && posLeft < 1100) {
		posLeft = posLeft + 75;
		posTop = posTop - 75;
	};
	duck.style.left = posLeft + "px";
	duck.style.top = posTop + "px";
}
	else if(direction == "E") {
		if(posLeft < 1100) {
		posLeft = posLeft + 75;
	};
	duck.style.left = posLeft + "px";
}
	else if(direction == "SE") {
		if(posTop < 500 && posLeft < 1100) {
		posLeft = posLeft + 75;
		posTop = posTop + 75
	};
	duck.style.left = posLeft + "px";
	duck.style.top = posTop + "px";
}
	else if(direction == "S") {
		if(posTop < 500) {
		posTop = posTop + 75;
	};
	duck.style.top = posTop + "px";
}
	else if(direction == "SW") {
		if(posTop < 500 && posLeft > 0) {
		posLeft = posLeft - 75;
		posTop = posTop + 75;
	};
	duck.style.left = posLeft + "px";
	duck.style.top = posTop + "px";
}
	else if(direction == "W") {
		if(posLeft > 0) {
		posLeft = posLeft - 75;
	};
	duck.style.left = posLeft + "px";
}
	else if(direction == "NW") {
		if(posTop > 0 && posLeft > 0) {
		posLeft = posLeft - 75;
		posTop = posTop - 75;
	};
	duck.style.left = posLeft + "px";
	duck.style.top = posTop + "px";
}
}



setInterval(function() {
	moveDuck();
}, 800);


function raak(e) {
	hitCounter++;
	hit.innerHTML = "hit: " + hitCounter;
	dead();
	e.stopPropagation();

}

function miss(e) {
	missCounter++;
	mis.innerHTML = "miss: " + missCounter;
	e.stopPropagation();
}

function dead() {
	duck.style.visibility = "hidden"
	setTimeout(visible, 3000)

}

function visible() {
	duck.style.visibility = "visible";
}
$(document).ready(function() {
	makeGrid(5);
	$('.square').mouseenter(function(){
		$(this).css("background", "#FF0066");
	});
	$('.default').click(function() {
		setGrid();
		$('.square').unbind();
		$('.square').mouseenter(function(){
			$(this).css("background", "teal");
		});
	});
	$('.choose').click(function() {
		setCustomGrid();
	});	

	$('.random').click(function() {
		setGrid();
		$('.square').unbind();
		$('.square').mouseenter(function(){
			$(this).css("background", randomColor());
		});
	});

	$('.clear').click(function() {
		clear();
	});
	
});
function makeGrid(n,color) {
	var boxSize = (600-4*n)/n;
	var wrap = $(".wrap").html("");
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			wrap.append($("<div></div>").addClass("square").height(boxSize).width(boxSize));
		}
		wrap.append($("<div></div>").css("clear","both"));
	}
}

function setGrid() {
	var sizeOfGrid = prompt("How big do you want your grid?:");
	makeGrid(sizeOfGrid);

}
function setCustomGrid() {
	var sizeOfGrid = prompt("How big do you want your grid?:");
	var color = prompt("What color do you want your grid?:");
	makeGrid(sizeOfGrid);

	$('.square').unbind();
	$('.square').mouseenter(function(){
		$(this).css("background", color);
	});
}
function clear() {
	$(".square").css("background", "white");
}

function randomColor() {
	var red = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	return "#" + red.toHex() + blue.toHex() + green.toHex();

}

Number.prototype.toHex = function() {
	if (this < 16) {
		return '0' + this.toString(16); 
	}
	return this.toString(16);
}



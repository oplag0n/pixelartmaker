// DOM Elements: 
var inputHeight = $("#input_height");
var inputWidth = $("#input_width");
var canvas = $("#pixel_canvas");
var lastRow = $(".canvas_row").last();
var submitBtn = $(".submit_btn");

var colorPicker = $("#colorPicker");
var currentColor = "#FFFFFF";

// EVENT LISTENER
// Event listener table create 
submitBtn.click(function(event) {
  event.preventDefault();
  makeGrid();
});
// Event listener color selected 
colorPicker.change(function(event) {
	event.preventDefault();
	changeColor();
});
// Event listener table field clicked & painting
$("table").on( "click","td", function() {
// 	
	if($(this).css("background-color") != (hexToRgb(currentColor))) {
		$(this).css("background-color", currentColor);
	} else {
		$(this).css("background-color", "#FFFFFF");
	}
});

// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
function makeGrid() {
// Remove old grid
canvas.find("tr").remove();
canvas.find("td").remove();
// Get input values and store locally 
var height = inputHeight.val();
var width = inputWidth.val();
// Loop to create table:
// amount of rows 
for (var i = 0; i < height; i++) {
	canvas.append("<tr class='canvas_row'></tr>");
	// Elments in each row
	for (var j = 0; j < width; j++) {
      canvas.children().children().last().append("<td class='canvas_cell'></td>");
	}
}
}
// Color Change 
// save the current value in HEX of the color picker
function changeColor() {
	currentColor = colorPicker.val(); 
	}

 
// Convert Hex into rgb values
function hexToRgb(input){
	// remove #
		var hex = input.substring(1,7);
	// to rgb 
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
  // to string
    var newString = "rgb("+r+", "+g+", "+b+")";
    return newString;
}


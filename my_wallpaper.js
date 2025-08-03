//your parameter variables go here!
let rectHeight = 112.5 // Changes height of rectangle
let rectWidth = 100 // Changes width of rectangle 
let squareCorner = 0 // Curves corners of center squares
let rectCorner = 0 // Curves corners of purple rectangle
let lineColour = (255); // Changes line colour 

let squareWidth = 12.5

function setup_wallpaper(pWallpaper) {
//pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;

}

function wallpaper_background() {
  background(0, 0, 0); //black
  
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
fill(112, 8, 60); // fill rectangle purple
rect(0, 50, rectWidth, rectHeight, rectCorner);

//top lines
stroke(lineColour); // fills line colour
line(75, 0, 75, 50);
line(87.5, 0, 87.5, 50);
line(100, 0, 100, 50);
line(112.5, 0, 112.5, 50);
line(125, 0, 125, 50);
line(137.5, 0, 137.5, 50);


//bottom lines
line(75, 150, 75, 200);
line(87.5, 150, 87.5, 200);
line(100, 150, 100, 200);
line(112.5, 150, 112.5, 200);
line(125, 150, 125, 200);
line(137.5, 150, 137.5, 200);


//left lines
stroke(lineColour); // fills line colour
line(0, 75, 50, 75);
line(0, 87.5, 50, 87.5);     
line(0, 100, 50, 100);
line(0, 112.5, 50, 112.5);
line(0, 125, 50, 125);
line(0, 137.5, 50, 137.5);


//middle lines virticle
line(75, 50, 75, 150);
line(87.5, 50, 87.5, 150);
line(100, 50, 100, 150);
line(112.5, 50, 112.5, 150);
line(125, 50, 125, 150);
line(137.5, 50, 137.5, 150);


// middle lines horizontal
line(50, 75, 200, 75);
line(50, 87.5, 200, 87.5);
line(50, 100, 200, 100);
line(50, 112.5, 200, 112.5);
line(50, 125, 200, 125);
line(50, 137.5, 200, 137.5);

if (squareWidth === 12.5) {
  fill(255, 255, 255); // white
} else {
  fill(0); // black
}

//squares
square(75, 75, squareWidth, squareCorner);
square(87.5, 87.5, squareWidth, squareCorner);
square(100, 100, squareWidth, squareCorner);
square(112.5, 112.5, squareWidth, squareCorner);
square(125, 125, squareWidth, squareCorner);



}






















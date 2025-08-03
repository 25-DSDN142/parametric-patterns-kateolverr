//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;

let peachSquare = 25; // this variable is used to set the size of the peach squares
let squareCorner = 0
let circleSize = 1;


function setup_wallpaper(pWallpaper) {
   //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {

  background(0, 0, 0); //black
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//flower1
//top
line(50, 50, 50, 100); 
line(25, 60, 50, 100); 
line(75, 60, 50, 100); 
line(10, 80, 50, 100); 
line(90, 80, 50, 100); 
line(5, 100, 95, 100); 

//bottom
line(50, 100, 40, 120);
line(50, 100, 60, 120); 
line(50, 100, 80, 120);
line(50, 100, 20, 120); 

//stem
line(50, 100, 50, 200); 
noStroke();
fill(245, 230, 144); // fill colour light yellow
fill(207, 183, 118); // fill colour beige

let leafsize;
let innerLeafSize;
if(circleSize == 1){
  leafSize = 10;
  innerLeafSize = 5;
}
else if(circleSize == 2){
  leafSize = 20;  
  innerLeafSize = 10;
}
else{
  leafSize = 30; 
  innerLeafSize = 15; 
}


// outer leafs
circle(50, 50, leafSize); 
circle(25, 60, leafSize);
circle(75, 60, leafSize); 
circle(10, 80, leafSize);
circle(90, 80, leafSize); 
circle(5, 100, leafSize); 
circle(95, 100, leafSize); 

// inner leafs
fill(118, 158, 207); // fill colour dull blue
circle(50, 50, 5); 
circle(25, 60, 5);
circle(75, 60, 5); 
circle(10, 80, 5);
circle(90, 80, 5); 
circle(5, 100, 5); 
circle(95, 100, 5); 

noStroke();

// flower2
circle(150, 120, 60);
stroke(0);
line(150, 90, 150, 150);
line(120, 120, 180, 120);

fill(112, 8, 60); // fill colour dark pink
rect(50, 50, 150, 100);

}
























//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {

  background(255, 255, 255); //white
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  //top row
 noStroke();
 fill(177, 15, 46); // fill colour dark pink
  triangle(0, 50, 25, 0, 50, 50);
fill(87, 0, 0); // fill colour dark red
  triangle(75, 0, 50, 50, 100, 50);
fill(40, 0, 0); // fill colour black
  triangle(125, 0, 150, 50, 100, 50);
  fill(222, 124, 90); // fill colour peach 
triangle(150, 50, 175, 0, 200, 50);

//second row
fill(87, 0, 0); // fill colour dark red
  triangle(0, 50, 50, 50, 25, 100);
fill(40, 0, 0); // fill colour black
  triangle(50, 50, 100, 50, 75, 100);
fill(222, 124, 90); // fill colour peach 
  triangle(100, 50, 150, 50, 125, 100);
 fill(177, 15, 46); // fill colour dark pink
  triangle(150, 50, 200, 50, 175, 100);


//third row
fill(40, 0, 0); // fill colour black
triangle(0, 150, 25, 100, 50, 150);
fill(222, 124, 90); // fill colour peach 
  triangle(75, 100, 50, 150, 100, 150);
 fill(177, 15, 46); // fill colour dark pink
  triangle(125, 100, 150, 150, 100, 150);
fill(87, 0, 0); // fill colour dark red
  triangle(150, 150, 175, 100, 200, 150);
  //forth row
fill(222, 124, 90); // fill colour peach 
  triangle(0, 150, 50, 150, 25, 200);
fill(177, 15, 46); // fill colour dark pink
  triangle(50, 150, 100, 150, 75, 200);
fill(87, 0, 0); // fill colour dark red
  triangle(100, 150, 150, 150, 125, 200);
fill(40, 0, 0); // fill colour black
  triangle(150, 150, 200, 150, 175, 200);


  // row 1 
fill(40, 0, 0); // fill colour black
triangle(0, 0, 0, 50, 25, 0);
fill(222, 124, 90); // fill colour peach
triangle(25,0, 50, 50, 75, 0);
fill(177, 15, 46); // fill colour dark pink
triangle(75, 0, 100, 50, 125, 0);
fill(87, 0, 0); // fill colour dark red
triangle(125, 0, 150, 50, 175, 0);
fill(40, 0, 0); // fill colour black
triangle(175, 0, 200, 50, 200, 0);


//row 2
fill(222, 124, 90); // fill colour peach
triangle(0, 50, 0, 100, 25, 100);
fill(177, 15, 46); // fill colour dark pink
triangle(25, 100, 50, 50, 75, 100);
fill(87, 0, 0); // fill colour dark red
triangle(75, 100, 100, 50, 125, 100);
fill(40, 0, 0); // fill colour black
triangle(125, 100, 150, 50, 175, 100);
fill(222, 124, 90); // fill colour peach
triangle(175, 100, 200, 50, 200, 100);


//row 3
fill(177, 15, 46);
triangle(0, 100, 25, 100, 0, 150);
fill(87, 0, 0); // fill colour dark red
triangle (25, 100, 75, 100, 50, 150);
fill(40, 0, 0); // fill colour black
triangle(75, 100, 125, 100, 100, 150);
fill(222, 124, 90); // fill colour peach
triangle(125, 100, 175, 100, 150, 150);
fill(177, 15, 46); // fill colour dark pink
triangle(175, 100, 200, 150, 200, 100);

//row 4
fill(87, 0, 0);
triangle(0, 150, 0, 200, 25, 200);
fill(40, 0, 0); // fill colour black
triangle(25, 200, 50, 150, 75, 200);
fill(222, 124, 90); // fill colour peach
triangle(75, 200, 100, 150, 125, 200);
fill(177, 15, 46); // fill colour dark pink
triangle(125, 200, 150, 150, 175, 200);
fill(87, 0, 0); // fill colour dark red
triangle(175, 200, 200, 150, 200, 200);


let circleRadius1 = 20; // radius for the circles
let circleRadius2 = 20; // radius for the smaller circles

fill(255, 255, 255); // this sets the fill color to white
ellipse(100, 100, circleRadius1, circleRadius2); // draw a white circle in the center
ellipse(50, 100, circleRadius1, circleRadius2); 
ellipse(75, 50, circleRadius1, circleRadius2);
ellipse(25, 50, circleRadius1, circleRadius2);
ellipse(125, 50, circleRadius1, circleRadius2);
ellipse(150, 100, circleRadius1, circleRadius2);
ellipse(175, 50, circleRadius1, circleRadius2);
ellipse(25, 150, circleRadius1, circleRadius2);
ellipse(50, 200, circleRadius1, circleRadius2);
ellipse(100, 200, circleRadius1, circleRadius2);
ellipse(150, 200, circleRadius1, circleRadius2);
ellipse(175, 150, circleRadius1, circleRadius2);
ellipse(200, 100, circleRadius1, circleRadius2);
ellipse(125, 150, circleRadius1, circleRadius2);
ellipse(75, 150, circleRadius1, circleRadius2);
ellipse(0, 0, circleRadius1, circleRadius2);
ellipse(0, 100, circleRadius1, circleRadius2);
ellipse(0, 200, circleRadius1, circleRadius2);
ellipse(200, 0, circleRadius1, circleRadius2);
ellipse(200, 200, circleRadius1, circleRadius2);
ellipse(50, 0, circleRadius1, circleRadius2);
ellipse(100, 0, circleRadius1, circleRadius2);
ellipse(150, 0, circleRadius1, circleRadius2);





}










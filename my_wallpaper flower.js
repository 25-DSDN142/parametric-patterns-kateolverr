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
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let flowerCentre=40;//orange center
  let innerPetalRadius=30;// inner radius of the flower petals
  let outerPetalRadius=60;// outer radius of the flower petals

  rect(40 ,40, rect_width, rect_height);


fill(240, 53, 93);
fill (212, 28, 67);
circle(50, 100, outerPetalRadius);
circle(50, 50, outerPetalRadius);
circle(100, 100, outerPetalRadius);
circle(100, 50, outerPetalRadius);

    
  fill(240, 53, 93);
    circle(50, 100, 40);
    circle(50, 50, 40);
    circle(100, 100, 40);
    circle(100, 50, 40);


fill(240, 53, 93);
    circle(50, 100, 40);
    circle(50, 50, 40);
    circle(100, 100, 40);
    circle(100, 50, 40);

    
  fill (237, 130, 153); // this sets the fill color to red
    circle(50, 100, innerPetalRadius);
    circle(50, 50, innerPetalRadius);
    circle(100, 100, innerPetalRadius);
    circle(100, 50, innerPetalRadius);


fill(240, 104, 7);
  circle(75, 75, flowerCentre);

fill(1245, 149, 81);
  circle(75, 75, flowerCentre-10);
    }






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










noStroke();

let peachSquare = 25
let squareCorner = 0 


//box 1
fill(177, 15, 46); // fill colour dark pink
  triangle(0, 0, 25, 0, 0, 25);
  fill(222, 124, 90); // fill colour peach
square(25, 0, peachSquare, squareCorner);

fill(87, 0, 0); // fill colour dark red
 quad(25, 0, 25, 25, 0, 50, 0, 25);

 fill(40, 0, 0); // fill colour black
 quad(25, 25, 50, 25, 25, 50, 0, 50);

fill(177, 15, 46); // fill colour dark pink
triangle(25, 50, 50, 50, 50, 25);

//fill(255, 255, 255); // fill colour light red
//elipse(12.5, 12.5, 10, 10);

//box 2
fill(177, 15, 46); // fill colour dark pink
triangle(50, 0, 75, 0, 50, 25);
fill(222, 124, 90); // fill colour peach
square(75, 0, peachSquare, squareCorner);

fill(87, 0, 0); // fill colour dark red
 quad(75, 0, 75, 25, 50, 50, 50, 25);

 fill(40, 0, 0); // fill colour black
 quad(75, 25, 100, 25, 75, 50, 50, 50);

fill(177, 15, 46); // fill colour dark pink
triangle(75, 50, 100, 50, 100, 25);

//box 3
fill(177, 15, 46); // fill colour dark pink
triangle(100, 0, 125, 0, 100, 25);
fill(222, 124, 90); // fill colour peach
square(125, 0, peachSquare, squareCorner);

fill(87, 0, 0); // fill colour dark red
 quad(125, 0, 125, 25, 100, 50, 100, 25); 

  fill(40, 0, 0); // fill colour black
  quad(125, 25, 150, 25, 125, 50, 100, 50);

fill(177, 15, 46); // fill colour dark pink
triangle(125, 50, 150, 50, 150, 25);  

//box 4
fill(177, 15, 46); // fill colour dark pink
triangle(150, 0, 175, 0, 150, 25);
fill(222, 124, 90); // fill colour peach
square(175, 0, peachSquare, squareCorner);

fill(87, 0, 0); // fill colour dark red
 quad(175, 0, 175, 25, 150, 50, 150, 25);

 fill(40, 0, 0); // fill colour black
 quad(175, 25, 200, 25, 175, 50, 150, 50);

fill(177, 15, 46); // fill colour dark pink
triangle(175, 50, 200, 50, 200, 25);

//box 5
fill(177, 15, 46); // fill colour dark pink
triangle(0, 50, 25, 50, 0, 75);
fill(222, 124, 90); // fill colour peach
square(25, 50, peachSquare, squareCorner);

fill(87, 0, 0); // fill colour dark red
 quad(25, 50, 25, 75, 0, 100, 0, 75);

 fill(40, 0, 0); // fill colour black
 quad(25, 75, 50, 75, 25, 100, 0, 100);

fill(177, 15, 46); // fill colour dark pink
triangle(25, 100, 50, 100, 50, 75); 

//box 6       
fill(177, 15, 46); // fill colour dark pink
triangle(50, 50, 75, 50, 50, 75);
fill(222, 124, 90); // fill colour peach
square(75, 50, peachSquare, squareCorner);

fill(87, 0, 0); // fill colour dark red
 quad(75, 50, 75, 75, 50, 100, 50, 75);

 fill(40, 0, 0); // fill colour black
 quad(75, 75, 100, 75, 75, 100, 50, 100);

fill(177, 15, 46); // fill colour dark pink
triangle(75, 100, 100, 100, 100, 75);

//box 7       
fill(177, 15, 46); // fill colour dark pink
triangle(100, 50, 125, 50, 100, 75);
fill(222, 124, 90); // fill colour peach
square(125, 50, peachSquare, squareCorner);      

fill(87, 0, 0); // fill colour dark red
 quad(125, 50, 125, 75, 100, 100, 100, 75);

 fill(40, 0, 0); // fill colour black
 quad(125, 75, 150, 75, 125, 100, 100, 100); 

fill(177, 15, 46); // fill colour dark pink
triangle(125, 100, 150, 100, 150, 75);

//box 8
fill(177, 15, 46); // fill colour dark pink
triangle(150, 50, 175, 50, 150, 75);
fill(222, 124, 90); // fill colour peach
square(175, 50, peachSquare, squareCorner);

fill(87, 0, 0); // fill colour dark red
 quad(175, 50, 175, 75, 150, 100, 150, 75);

 fill(40, 0, 0); // fill colour black
 quad(175, 75, 200, 75, 175, 100, 150, 100);

fill(177, 15, 46); // fill colour dark pink
triangle(175, 100, 200, 100, 200, 75);  

//box 9       
fill(177, 15, 46); // fill colour dark pink
triangle(0, 100, 25, 100, 0, 125);        
fill(222, 124, 90); // fill colour peach    
square(25, 100, peachSquare, squareCorner);  

fill(87, 0, 0); // fill colour dark red
 quad(25, 100, 25, 125, 0, 150, 0, 125);

 fill(40, 0, 0); // fill colour black
 quad(25, 125, 50, 125, 25, 150, 0, 150);

fill(177, 15, 46); // fill colour dark pink
triangle(25, 150, 50, 150, 50, 125);  

//box 10
fill(177, 15, 46); // fill colour dark pink     
triangle(50, 100, 75, 100, 50, 125);  
fill(222, 124, 90); // fill colour peach
square(75, 100, peachSquare, squareCorner);

fill(87, 0, 0); // fill colour dark red
 quad(75, 100, 75, 125, 50, 150, 50, 125);

 fill(40, 0, 0); // fill colour black
  quad(75, 125, 100, 125, 75, 150, 50, 150);

fill(177, 15, 46); // fill colour dark pink
triangle(75, 150, 100, 150, 100, 125);

//box 11
fill(177, 15, 46); // fill colour dark pink
triangle(100, 100, 125, 100, 100, 125);
fill(222, 124, 90); // fill colour peach
square(125, 100, peachSquare, squareCorner);

fill(87, 0, 0); // fill colour dark red
 quad(125, 100, 125, 125, 100, 150, 100, 125);

 fill(40, 0, 0); // fill colour black
 quad(125, 125, 150, 125, 125, 150, 100, 150);

fill(177, 15, 46); // fill colour dark pink
triangle(125, 150, 150, 150, 150, 125);

//box 12    
fill(177, 15, 46); // fill colour dark pink
triangle(150, 100, 175, 100, 150, 125);
fill(222, 124, 90); // fill colour peach
square(175, 100, peachSquare, squareCorner);  

fill(87, 0, 0); // fill colour dark red
 quad(175, 100, 175, 125, 150, 150, 150, 125);

 fill(40, 0, 0); // fill colour black
 quad(175, 125, 200, 125, 175, 150, 150, 150);

fill(177, 15, 46); // fill colour dark pink
triangle(175, 150, 200, 150, 200, 125); 

//box 13
fill(177, 15, 46); // fill colour dark pink
triangle(0, 150, 25, 150, 0, 175);
fill(222, 124, 90); // fill colour peach
square(25, 150, peachSquare, squareCorner); 

fill(87, 0, 0); // fill colour dark red
 quad(25, 150, 25, 175, 0, 200, 0, 175);

 fill(40, 0, 0); // fill colour black
 quad(25, 175, 50, 175, 25, 200, 0, 200);

fill(177, 15, 46); // fill colour dark pink
triangle(25, 200, 50, 200, 50, 175);      

//box 14      
fill(177, 15, 46); // fill colour dark pink       
triangle(50, 150, 75, 150, 50, 175);        
fill(222, 124, 90); // fill colour peach  
square(75, 150, peachSquare, squareCorner);

fill(87, 0, 0); // fill colour dark red
  quad(75, 150, 75, 175, 50, 200, 50, 175);

 fill(40, 0, 0); // fill colour black
 quad(75, 175, 100, 175, 75, 200, 50, 200);

fill(177, 15, 46); // fill colour dark pink
triangle(75, 200, 100, 200, 100, 175);    

//box 15      
fill(177, 15, 46); // fill colour dark pink
triangle(100, 150, 125, 150, 100, 175);     
fill(222, 124, 90); // fill colour peach
square(125, 150, peachSquare, squareCorner);

fill(87, 0, 0); // fill colour dark red   
  quad(125, 150, 125, 175, 100, 200, 100, 175);

  fill(40, 0, 0); // fill colour black
  quad(125, 175, 150, 175, 125, 200, 100, 200); 

fill(177, 15, 46); // fill colour dark pink
triangle(125, 200, 150, 200, 150, 175); 

//box 16
fill(177, 15, 46); // fill colour dark pink
triangle(150, 150, 175, 150, 150, 175);
fill(222, 124, 90); // fill colour peach
square(175, 150, peachSquare, squareCorner); 

fill(87, 0, 0); // fill colour dark red
 quad(175, 150, 175, 175, 150, 200, 150, 175);

 fill(40, 0, 0); // fill colour black
 quad(175, 175, 200, 175, 175, 200, 150, 200);

fill(177, 15, 46); // fill colour dark pink
triangle(175, 200, 200, 200, 200, 175);



}




















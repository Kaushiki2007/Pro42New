var SpaceCraft1, SpaceCraft2, SpaceCraft3, SpaceCraft4;
var backgroundImg;
var issImage;
var iss, spacecraft, hasDocked;

function setup() {
   createCanvas(800,400);
   // createSprite(400, 200, 50, 50);

   iss = createSprite(330,130);
   iss.addImage(issImage);
   iss.scale = 0.25;

   spacecraft = createSprite(285,240);
   spacecraft.addImage(SpaceCraft1);
   spacecraft.scale = 0.15;


}


function preload(){
// insert all the images
SpaceCraft1=loadImage("Docking-undocking/spacecraft1.png");
SpaceCraft2=loadImage("Docking-undocking/spacecraft2.png");
SpaceCraft3=loadImage("Docking-undocking/spacecraft3.png");
SpaceCraft4=loadImage("Docking-undocking/spacecraft4.png");
issImage = loadImage("Docking-undocking/iss.png");
backgroundImg=loadImage("Docking-undocking/spacebg.jpg")
}


function draw() {
  background(backgroundImg);  
  var hasDocked = false;

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    // added the code for up arrow
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
    // added the code for down arrow
    if(keyDown("DOWN_ARROW")){
      spacecraft.y = spacecraft.y +2;
      spacecraft.addImage(SpaceCraft1);
    }
    // Codes for left and right arrow
    if(keyDown("RIGHT_ARROW")){
      spacecraft.x = spacecraft.x +2;
      spacecraft.addImage(SpaceCraft2)
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.x = spacecraft.x -2;
      spacecraft.addImage(SpaceCraft3);
    }

    if(iss.isTouching(spacecraft)){
       var hasDocked = true;
       text("Docking Succesful", 300,300);
    }
  }
  drawSprites();
}
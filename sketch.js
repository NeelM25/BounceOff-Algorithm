var fixRect;
var movRect;

function setup() {
  createCanvas(1200,800);
  fixRect = createSprite(400, 100, 50, 80);
  fixRect.shapeColor = "green";
  fixRect.debug = true;
  fixRect.velocityY = 5;

  movRect = createSprite(400, 800, 80, 30);
  movRect.shapeColor = "green";
  movRect.debug = true;
  movRect.velocityY = -5;
}

function draw() {
  background(0,0,0);

  //movRect.x = World.mouseX;
  //movRect.y = World.mouseY;

  if(movRect.x - fixRect.x <= movRect.width/2 + fixRect.width/2
    && fixRect.x - movRect.x <= movRect.width/2 + fixRect.width/2
    //&& fixRect.y - movRect.y <= movRect.height/2 + fixRect.height/2
    //&& movRect.y - fixRect.y <= movRect.height/2 + fixRect.height/2  
    ){
    //movRect.shapeColor = "red";
    //fixRect.shapeColor = "red";
    movRect.velocityX = movRect.velocityX * (-1);
    fixRect.velocityX = fixRect.velocityX * (-1);
  }
  //else{
    //movRect.shapeColor = "green";
    //fixRect.shapeColor = "green";


  if(fixRect.y - movRect.y <= movRect.height/2 + fixRect.height/2
    && movRect.y - fixRect.y <= movRect.height/2 + fixRect.height/2)
    {
      movRect.velocityY = movRect.velocityY * (-1);
      fixRect.velocityY = fixRect.velocityY * (-1);
    }

  drawSprites();
}
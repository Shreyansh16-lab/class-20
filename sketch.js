var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(700, 200, 80, 30);
  movingRect.velocityX=2;
  fixedRect.velocityX=-2;
}

function draw() {
  background("black");  
  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x -movingRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.y -movingRect.y< fixedRect.height/2+movingRect.height/2 
  && movingRect.y -fixedRect.y< fixedRect.height/2+movingRect.height/2  )
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x -movingRect.x<fixedRect.width/2+movingRect.width/2){
    movingRect.velocityX = movingRect.velocityX*(-1);
    fixedRect.velocityX = fixedRect.velocityX*(-1);

  }
if(fixedRect.y - movingRect.y<fixedRect.height/2+movingRect.height/2
  &&movingRect-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.velocityY= movingRect.velocityY*(-1);
    fixedRect.velocityY= fixedRect.velocityY*(-1);
  }  
  drawSprites();
}

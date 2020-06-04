var moving_rect,fixed_rect;

function setup() {
  createCanvas(800,400);
  moving_rect=createSprite(400, 200, 50, 50);
  moving_rect.shapeColor="#ffaa33";
  fixed_rect=createSprite(200, 200, 50, 50);
  fixed_rect.shapeColor="#ffaa33";
  

}

function draw() {
  background(0);
  moving_rect.x=World.mouseX;
  moving_rect.y=World.mouseY;
  //collision detection
  if(moving_rect.x-fixed_rect.x<moving_rect.width/2+fixed_rect.width/2
    && fixed_rect.x-moving_rect.x<moving_rect.width/2+fixed_rect.width/2
    && moving_rect.y-fixed_rect.y<moving_rect.height/2+fixed_rect.height/2
    && fixed_rect.y-moving_rect.y<moving_rect.height/2+fixed_rect.height/2){
    moving_rect.shapeColor="#ffffff";
    fixed_rect.shapeColor="#ffffff";
    
  }
  else{
    moving_rect.shapeColor="#ffaa33";
    fixed_rect.shapeColor="#ffaa33";
  }


  drawSprites();
}
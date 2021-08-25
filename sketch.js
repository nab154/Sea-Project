var ship;

var sea;
var sea_image;

var ship_moving;


function preload(){

  ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

  sea_image = loadAnimation("sea.png"); 
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(100,300,20,20);
  ship.addAnimation("moving",ship_moving);
  ship.scale=0.2;

  sea = createSprite(200,200,400,20);
  sea.addAnimation("sea",sea_image);
  sea.scale=0.3;
  

  sea.velocityX=-4;

  ship.depth=sea.depth+1;
}

function draw() {
  background("blue");

  if (sea.x < -200){
    sea.x = 400;
  }
  drawSprites();
 
console.log(sea.width)
}
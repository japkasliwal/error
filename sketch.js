var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var apple

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);

garden=createSprite(200,200);
garden.addImage(gardenImg);
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
apple.addImage(appleImg)
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnApples()
  drawSprites();
  rabbit.X = World.mouseX
  
}
function spawnApples(){
if (frameCount%70==0){
apple.velocityY=4
apple = createSprite(200,50,20,20)



}

}
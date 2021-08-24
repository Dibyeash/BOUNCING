var rect1 , rect2


function setup() {
  createCanvas(800,400);
  rect1=createSprite(400,100,50,80);
  rect1.shapeColor="blue"
  rect2=createSprite(400,200,80,30);
  rect2.shapeColor="blue"
  rect1.velocityY = +5
  rect2.velocityY = -5
  rect3=createSprite(300,200,60,90)
  rect3.shapeColor="pink"
  rect3.velocityY=+5
  rect4=createSprite(300,300,80,60)
  rect4.shapeColor="yellow"
  rect4.velocityY=-5
}

function draw() {
  background(255,255,255);  
 bouncing(rect3,rect4)

 drawSprites();
}



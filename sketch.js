var bgImg;
var astronaut;
var sleepAnimation;
var brushAnimation;
var gymAnimation;
var bathAnimation;
var eatAnimation;
var edges;


function setup() {
  createCanvas(800, 400);
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping", sleepAnimation);
  astronaut.scale = 0.1;
  

 edges = createEdgeSprites();
}

function preload() {

  bgImg = loadImage("Images/iss.png");
  sleepAnimation = loadAnimation("Images/sleep.png");
  brushAnimation = loadAnimation("Images/brush.png");
  gymAnimation = loadAnimation ("Images/gym11.png", "Images/gym12.png")
  bathAnimation = loadAnimation("Images/bath1.png", "Images/bath2.png");
  eatAnimation = loadAnimation("Images/eat1.png", "Images/eat2.png");





}

function draw() {
  background(bgImg);

  astronaut.bounceOff(edges);

  if (keyDown(UP_ARROW)) {
    astronaut.addAnimation("brushing", brushAnimation);
    astronaut.changeAnimation("brushing");

  }

  if (keyDown(DOWN_ARROW)) {
    astronaut.addAnimation("excercising", gymAnimation);
    astronaut.changeAnimation("excercising");

  }

  if (keyDown(LEFT_ARROW)) {
    astronaut.addAnimation("bathing", bathAnimation);
    astronaut.changeAnimation("bathing");

  }

  if (keyDown(RIGHT_ARROW)) {
    astronaut.addAnimation("eating", eatAnimation);
    astronaut.changeAnimation("eating");

  }

  if (keyDown("a")) {
    astronaut.velocityX = -6;

  }

  if (keyDown("d")) {
    astronaut.velocityX = 6;

  }



  fill("white");
  textSize(30);
  text("Instructions:", 50, 50);

  fill("red");
  textSize(20);
  text("Up Arrow = Brushing", 50, 80);

  text("Down Arrow = Excercising", 50, 110);

  text("Right Arrow = Bathing", 50, 140);

  text("Left Arrow = Eating", 50, 170);

  
  text("A Key = Left", 50, 200);

  text("D Key = Right", 50, 230);

  
  drawSprites();
}
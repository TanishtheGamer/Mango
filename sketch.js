
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	mango1 = new Box(700,320,70,70);
    mango2 = new Box(920,320,70,70);
    mango3 = new Pig(810, 350);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
 
  drawSprites();
 
}



function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    stone.fly();
}
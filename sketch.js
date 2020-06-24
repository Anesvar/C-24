var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var side,side1,side2
var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}
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
	
	ground=new Ground(400,600,800,10);
	World.add(world, ground);

	
	side1=new Ground(700,520,10,150);
	World.add(world, side1);


	
	side3=new Ground(500,520,10,150);
	World.add(world, side3);

	ball=new Ball(100,550,50);

	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.35,y:-0.35});
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  side1.display();
  side3.display();
  ball.display();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.50,
		friction:0.1,
		density:0.3
		  }
		  ball=Bodies.circle(100,100,20,ball_options);
		  World.add(world,ball);
			rectMode(CENTER);
			ellipseMode(RADIUS);
	Engine.run(engine);

  ground=new Ground(600,690,1200,20);
  left=new Ground(800,620,20,120);
  right=new Ground(1000,620,20,120);
  lborder=new Ground(1190,500,20,1200);
  rborder=new Ground(-1,500,20,1200);
  //top=new Ground(500,-1,20,1200);
}


function draw() {
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  keyPressed()
  ground.display();
  left.display();
  right.display();
  lborder.display();
  rborder.display();
  //top.display();
  Engine.update(engine);
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		hForce();
	}
}
function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.95,y:0.95})
  }
 



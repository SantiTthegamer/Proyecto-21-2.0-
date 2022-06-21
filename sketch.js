var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	
	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
groundObj = new Ground(width/2,670,width,20);
leftSide = new Ground (1100,600,20,120);
rightSide = new Ground (1350,600,20,120);

	Engine.run(engine);
  
	ball = Bodies.circle(200,100,20,ball_options)
    World.add(world,ball);
	ellipseMode(RADIUS);

}


function draw() {
  background(0);
  groundObj.show ();
  leftSide.show ();
  rightSide.show ();
 
  ellipse(ball.position.x,ball.position.y,20);
}

function keyPressed() {
	if (keyCode === 38){
		Matter.Body.applyForce(ball,ball.position,{x:20,y:-100})
	}
}


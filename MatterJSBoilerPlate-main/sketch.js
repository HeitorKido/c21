
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
    
	//Create the Bodies Here.
     var ball_options={
		isStatic:false,
		restitution:0.3,
		frition:0,
		density:1.2
	 }
	 ball= Bodies.circle(260,100,40/2,ball_options)
	 World.add(world,ball)
    groundObj=new ground(width/2,670,width,20)
	leftSide = new ground(1100,600,20,120);
    leftSide2 = new ground(600,600,20,120);
	Engine.run(engine);
  
	
}



function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display()
  leftSide.display()
  leftSide2.display(	)
  ellipse(ball.position.x,ball.position.y,20,20)

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:40,y:-40})
	}
}




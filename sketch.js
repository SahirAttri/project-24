
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   paper = new Paper(100,600,10)
   ground = new Ground(400,680,800,20)

   left = new Dustbin(580,620,20,100)
   down = new Dustbin(640,660,100,20)
   right = new Dustbin(700,620,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine)

  paper.display()
  ground.display()
  left.display()
  down.display()
  right.display()

 
}

function keyPressed(){

if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})

 }
}


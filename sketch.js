
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundSprite;
var plinko = [];



function setup() {
	createCanvas(480,800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(240,750,480,20);

	ground2 = new Ground(60,650,10,200);

	ground3 = new Ground(140,650,10,200);

	ground4 = new Ground(220,650,10,200);

	ground5 = new Ground(300,650,10,200);

	ground6 = new Ground(380,650,10,200);

	
	  

	Engine.run(engine);

}


function draw() {
 // rectMode(CENTER);
  background("black");
  //ellipseMode(RADIUS)

  ground.display();

  ground2.display();

  ground3.display();

  ground4.display();

  ground5.display();

  ground6.display();

  for(var j = 40; j<=width; j=j+50){
	  plinko.push(new Plinko(j,75,10))
  }

  
 

  
  drawSprites();



  
	
	
 
 
}

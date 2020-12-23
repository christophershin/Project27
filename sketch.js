
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof,rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 bobObject1= new BobObject1(100,380,30,30);
 bobObject2= new BobObject2(150,380,30,30);
 bobObject3= new BobObject3(200,380,30,30);
 bobObject4= new BobObject4(250,380,30,30);
 bobObject5= new BobObject5(300,380,30,30);

 roof= new Roof(200,200,100,30)

 rope= new Rope(roof.body)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  function Keydown(UP_ARROW){
	  bobObject1.setVelocityY= 5;
  }


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  rope.display();

  drawSprites();
 
}






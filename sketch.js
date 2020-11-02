
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite;
var packageBody,ground
var  packageSprite,packageIMG;
var mainBox, rightBox, leftBox;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var bounce = {
		restitution : 0.5 
		}

	mainBox = new Box(400,650,200,20);
	rightBox = new Box(510,590,20,150);
	leftBox = new Box(310,590,20,150);

	packageSprite=createSprite(width/2, 80, 10, bounce);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	World.add(world, packageSprite);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic: true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  keyPressed();
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  mainBox.display();
  rightBox.display();
  leftBox.display();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)
  }
}

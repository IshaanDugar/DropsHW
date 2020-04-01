const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var drop;

function setup() {

  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  drop = new Drops(20, 20, 20, 40);

}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  if(frameCount % 20 === 0){
    var drop;
    var randX = (50, 350);
    var randY = (50, 350);
    drop = new Drops(randX, randY, 20, 40);
    drop.display();
  }

}
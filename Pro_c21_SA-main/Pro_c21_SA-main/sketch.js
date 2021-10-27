const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bt1
var bt2
let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  var ball_options = { restitution: 0.95 } 
  ball = Bodies.circle(200,100,20,ball_options); 
  World.add(world,ball);
  bt1=createImg("right.png")
  bt1.position(220,30)
  bt1.size(50,50)
  bt1.mouseClicked(Hforce)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
}
function Hforce () {
  Matter.Body.applyForce(ball,{x:0,y:0},{X:0.05,Y:0})

}

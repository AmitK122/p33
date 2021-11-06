const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var bgImg;
var snow1;

var gameState = "onSling";

function preload() {
  bgImg = loadAnimation("snow1.jpg","snow2.jpg","snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(400, 200, 800, 400);
  bg.addAnimation("snow",bgImg)
  engine = Engine.create();
    world = engine.world;

    snow1 = new Snow(200,50)
}

function draw() {
  background(0);  
  drawSprites();
  snow1.display();

}
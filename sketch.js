const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy,drop

function preload(){
    var maxDrop= 100;

    for (var i = 0; i<100; i++){
        this.body.push(new createDrop(random(0,400),random(0,400))); 
    }
}

function setup(){
    fill(255,0,0);
    var canvas = createCanvas(400,600);

    engine = Engine.create();
    world = engine.world;

    maxDrop.display();

    drawSprities();
}   
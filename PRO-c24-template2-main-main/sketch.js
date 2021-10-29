const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Hammer,stone,Rubber,Iron,Plane;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    Plane = new Plane(600,height,1200,2);
    Hammer = new Hammer(10,100);
    Iron = new iron(300,350);
    Stone = new stone(700,320,100,100);
    Rubber = new Rubber(900,450,70);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    Plane.display();
    Hammer.display();
    stone.display();
    iron.display();
    Rubber.display();
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1;
var divisions =[];
var plinkos = [];
var divisionHeight =300;
function setup() {
  createCanvas(550,700);
  engine = Engine.create();
  world = engine.world;
 ground1=new Ground(350,670,1200,20);
 //division1=new Division(10,530,20,260);
 //division2=new Division(120,530,20,260);
 //division3=new Division(220,530,20,260);
 //division4=new Division(320,530,20,260);
// division5=new Division(420,530,20,260);
 //division6=new Division(520,530,20,260);

for (var k= 0; k <= width;k = k + 90){
  divisions.push(new Divisions(k ,height-divisionHeight/1.8,10,divisionHeight));
}
for (var j =40;j<=width;j =j+50){
    plinkos.push(new Plinko(j,75));
}
for (var j =15;j<width;j =j+75){
    plinkos.push(new Plinko(j,175));
}
for (var j =75;j<width;j =j+75){
  plinkos.push(new Plinko(j,375));
}


}

function draw() {
  background("lightblue");
  ground1.display(); 
 // division1.display(); 
 // division2.display(); 
  //division3.display();
  //division4.display();
 // division5.display();
  //division6.display();


  for (var k = 0; k <divisions.length;k++){
       divisions[k].display();
  }
  for (var j = 0; j < plinkos.length; j++){
      plinkos[j].display();
  }


  drawSprites();
}


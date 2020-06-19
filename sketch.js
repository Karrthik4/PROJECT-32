const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon, polygonImg;

var score = 0;

function preload(){
  polygonImg = loadImage("Hexagon.png");
}

function setup() {
  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,585,1200,30);

  platform1 = new Ground(500,500,250,10);
  platform2 = new Ground(900,400,200,10);
  
  //First Pyramid
  //1st Row
  box1 = new Box(455,480,30,40);
  box2 = new Box(470,480,30,40);
  box3 = new Box(485,480,30,40);
  box4 = new Box(500,480,30,40);
  box5 = new Box(515,480,30,40);
  box6 = new Box(530,480,30,40);
  box7 = new Box(545,480,30,40);  

  //2nd Row
  box8 = new Box(470,460,30,40);
  box9 = new Box(485,460,30,40);
  box10 = new Box(500,460,30,40);
  box11 = new Box(515,460,30,40);
  box12 = new Box(530,460,30,40);

  //3rd Row
  box13 = new Box(485,440,30,40);
  box14 = new Box(500,440,30,40);
  box15 = new Box(515,440,30,40);

  //4th Row
  box16 = new Box(500,420,30,40);

  //Second Pyramid
  //1st Row
  box17 = new Box(870,380,30,40);
  box18 = new Box(885,380,30,40);
  box19 = new Box(900,380,30,40);
  box20 = new Box(915,380,30,40);
  box21 = new Box(930,380,30,40);

  //2nd Row
  box22 = new Box(885,360,30,40);
  box23 = new Box(900,360,30,40);
  box24 = new Box(915,360,30,40);

  //3rd Row
  box25 = new Box(900,340,30,40);

  var polygon_options ={
    'restitution':0.02,
     'friction':0.5, 
     'density':1.2
    }
  polygon = Bodies.circle(200,200,40,polygon_options);
  World.add(world,polygon);
  
  slingshot = new Slingshot(this.polygon,{x:100,y:200});

}

function draw() {
  background("#11254D");  
  Engine.update(engine);

  ground.display();

  platform1.display();
  platform2.display();

  fill("#83CDEB");
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();  
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();

  fill("pink");
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();  
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();

  fill("#31E0D0");
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();

  fill("#808080");
  box16.display();
  box16.score();

  fill("#83CDEB");
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();

  fill("#31E0D0");
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  box24.display();
  box24.score();

  fill("pink");
  box25.display();
  box25.score();

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 50, 40);

  slingshot.display();

  fill("red");
  textSize(20);
  text("Drag The Hexagonal Stone And Release It, To Launch It Towards The Blocks",300,50);

  textSize(20);
  fill("white"); 
  text("Score:"+score, 1050,100);

}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}
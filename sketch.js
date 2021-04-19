
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stage;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14block15,block16;
var polygon,sling;
var bg = "bg.png";
var backgroundImg;
function setup() {
  createCanvas(800,500);
  
  engine = Engine.create();
	world = engine.world;

  setTime();
  // ground = Bodies.rectangle(width/2, height-10, width, 10 , {isStatic:true} );
  stage = Bodies.rectangle(width/2+40, height-50, 400, 10 , {isStatic:true} );
  // World.add(world, ground);
  World.add(world, stage);

  polygon = new Poly(100,200)
  sling = new rope(polygon.body,{x:100,y:180})


  block1 = new Block(320,420)
  block2 = new Block(360,420)
  block3 = new Block(400,420)
  block4 = new Block(440,420)
  block5 = new Block(480,420)
  block6 = new Block(520,420)
  block7 = new Block(560,420)
  block8 = new Block(360,370)
  block9 = new Block(400,370)
  block10 = new Block(440,370)
  block11= new Block(480,370)
  block12= new Block(520,370)
  block13 = new Block(400,350)
  block14 = new Block(440,350)
  block15= new Block(480,350)
  block16= new Block(440,320)


  Engine.run(engine);
}

function draw() {
  rectMode(CENTER)
  if(backgroundImg)
  background(backgroundImg);  
  drawSprites();
  fill("white")
  text(mouseX+","+mouseY,width-50,height-20)
  text("Press 'space' to reAttach",width/2-40,50)

  polygon.display();
  fill("pink")
  rectMode(CENTER)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("cyan")
  rectMode(CENTER)
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("pink")
  block13.display();
  block14.display();
  block15.display();
  fill("cyan")
  block16.display();

  sling.display();
  
  fill(255,200,0)
  // rect(ground.position.x,ground.position.y,width, 10)
  rect(stage.position.x,stage.position.y,300, 10)

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX , y:mouseY})
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:100,y:160})
    sling.attach(polygon.body);
  }
}

async function setTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var response2 = await response.json();

  var dt = response2.datetime;
  var time = dt.slice(11,13)

  console.log(time)

  if(time >= 6 && time <= 19){
      bg = "bg.png"
  } else {
      bg = "bg2.jpg"
  }
  backgroundImg = loadImage(bg);
}
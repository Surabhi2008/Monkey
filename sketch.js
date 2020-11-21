var monkey , monkey_running
var banana ,bananaImage, stone, stoneImage
var FoodGroup, obstacleGroup
var Survival_Time=0 
var ground,groundImage
var  invisibleGround
var banana,bananaImage

function preload(){
  
  
  monkey =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 groundImage=loadImage("ground2.png")
}



function setup() {
  
monkey1=createSprite(66,334,10,10)
  monkey1.addAnimation("running",monkey)
  monkey1.scale=0.1
  
 ground()
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
   
  var Survival_Time=0
}


function draw() {
createCanvas(400, 400);
  background("pink")
 
  text(" Survival_Time" +Survival_Time,282,48);
   Survival_Time=Math.round( Survival_Time+(frameCount/600))
  
  if(keyDown("space")&& monkey1.y>=250) {
    monkey1.velocityY = -12;
  }
  
   monkey1.velocityY = monkey1.velocityY + 0.8
  
   banana();
  if (ground.x < 0){
    ground.x = ground.width/2;}
  
   if(Survival_Time===400){
     stone.velocityX=-20
   }
  
  monkey1.collide(ground)
   stone()
  drawSprites()
}

function banana(){
   if(World.frameCount%80===0){var banana=createSprite(600,165,10,40)
  banana.addImage(bananaImage)
  banana.y=Math.round(random(70,300))
  banana.scale=0.1
  banana.velocityX=-8
 
}}


function stone(){
  if(World.frameCount%80===0){
   var stone=createSprite(390,355,400,10)
   stone.velocityX=-(20+(Survival_Time/600))
    stone.addImage(stoneImage)
    stone.scale=0.1
    stone.velocityX=-10
  
  }
}

function ground(){
   ground = createSprite(306,370,400,20);
  ground.addImage(groundImage)
 ground.x = ground.width /2;
  ground.velocityX = -4;
}



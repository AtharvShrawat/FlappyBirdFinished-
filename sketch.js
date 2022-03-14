var backgroundImg, back, bird, birdImg, topPole,topPoleImg,bottomPole,bottomPoleImg,score,gameOver,gameOverImg,sound
var PLAY = 1 
var END = 0
var gameState = PLAY 
var topGroup,bottomGroup

function preload() {
  backgroundImg = loadImage("Background.png")
  birdImg = loadImage("Bird.png")
  topPoleImg = loadImage("Top Pole.png")
  bottomPoleImg = loadImage('Bottom Pole.png')
  gameOverImg = loadImage("GameOVer.png")
  //sound = loadSound("Sound.mp3")
}

function setup() {
  createCanvas(800,800);
  back = createSprite(400,400)
  back.addImage(backgroundImg)
  back.scale = 2
  bird = createSprite(100,300,50,50)
  bird.addImage(birdImg)
  bird.scale = 0.2
  gameOver = createSprite(400,400,20,20)
  gameOver.addImage(gameOverImg)
  gameOver.visible = false
  //poles = createSprite(300,100,20,50)
  //poles.addImage(polesImg)
  score = 0
  topGroup = createGroup()
  bottomGroup = createGroup()
}

function draw() 
{
   background(30);
   if(gameState === PLAY) {

   
   score = Math.round(frameCount/40)
  if(keyDown("space")) {
    bird.velocityY = -10
    //sound.play()
  }
  back.velocityX = -1
  if(back.x < 400) {
    back.x = back.x + width/2
  }

  bird.velocityY = bird.velocityY+1 
  spawnTopPoles()
  spawnBottomPoles()
  if(topGroup.isTouching(bird)) {
    gameState = END
  }
  if(bottomGroup.isTouching(bird)) {
    gameState = END
  }
}
else {
  if(gameState === END) {
  back.velocityX = 0
  bird.velocityY = 0
  gameOver.visible = true
  }
}
  drawSprites();
  textSize(20) 
  fill("blue")
  text("Score: "+score,700,20)

  

}



function spawnTopPoles() {
  if(frameCount%70 === 0) {
    topPole = createSprite(800,10,20,50)
    topPole.addImage(topPoleImg)
    topPole.scale = 0.4
    topPole.velocityX = -5
    topGroup.add(topPole)
  }
}

function spawnBottomPoles() {
  if(frameCount%70  === 0) {
    bottomPole = createSprite(800,780,20,50)
    bottomPole.addImage(bottomPoleImg)
    bottomPole.scale = 0.9
    bottomPole.velocityX = -5  
    bottomGroup.add(bottomPole)
  }
}
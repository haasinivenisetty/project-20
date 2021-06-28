function preload() {

  bg = loadImage("images/iss.png")
  sleep = loadAnimation("images/sleep.png")
  brush = loadAnimation("images/brush.png")
  gym = loadAnimation("images/gym11.png", "images/gym12.png")
  eat = loadAnimation("images/eat1.png", "images/eat2.png")
  drink = loadAnimation("images/drink1.png", "images/drink2.png")
  move = loadAnimation("images/move.png", "images/move1.png")
  bath = loadAnimation("images/bath1.png", "images/bath2.png")

}


function setup() {
  createCanvas(800, 400);
  astronut = createSprite(300, 230, 50, 50);
  astronut.addAnimation("sleeping", sleep)
  astronut.scale = 0.1
}



function draw() {
  background(bg);
  drawSprites();
  textSize(20)
  fill("white")
  text("instructions", 20, 35)
  textSize(15)
  text("up arrow=brushing", 20, 55)
  text("down arrow=gyming", 20, 70)
  text("left arrow=eating", 20, 85)
  text("right arrow=bathing", 20, 100)
  text("m key=moving", 20, 115)
  edges = createEdgeSprites()
  astronut.bounceOff(edges)
  if (keyDown("UP_ARROW")) {
    astronut.addAnimation("brushing", brush)
    astronut.changeAnimation("brushing")
    astronut.y = 350
    astronut.velocityX = 0
    astronut.velocityY = 0



  }
  if (keyDown("DOWN_ARROW")) {
    astronut.addAnimation("gyming", gym)
    astronut.changeAnimation("gyming")
    astronut.y = 350
    astronut.velocityX = 0
    astronut.velocityY = 0



  }
  if (keyDown("LEFT_ARROW")) {
    astronut.addAnimation("eating", eat)
    astronut.changeAnimation("eating")
    astronut.x = 150
    astronut.y = 350
    astronut.velocityX = 0
    astronut.velocityY = 0



  }
  if (keyDown("RIGHT_ARROW")) {
    astronut.addAnimation("bathing", bath)
    astronut.changeAnimation("bathing")
    astronut.y = 300
    astronut.velocityX = 0
    astronut.velocityY = 0



  }
  if (keyDown("m")) {
    astronut.addAnimation("moving", move)
    astronut.changeAnimation("moving")
    astronut.x=200
    astronut.y=200
    astronut.velocityX = 1
    astronut.velocityY = 1



  }




}
let player1, player2;
let startLine, finishLine;
let game = false
const mulaiButton = {
  x: 300,
  y: 200,
  w: 75,
  h: 50,
  tampilkan: function() {
    rectMode(CENTER)
    fill(0, 255, 0)
    rect(this.x, this.y, this.w, this.h)
    fill(0)
    textAlign(CENTER)
    textSize(20)
    text("MULAI", this.x, this.y)
  }
}

function setup() {
  createCanvas(600, 400);
  player1 = new Player("Player 1", 70, 100, color(255, 0, 0))
  player2 = new Player("Player 2", 70, 300, color(0, 0, 255))
}

function draw() {
  background('#eccb98');
  startLine = garisVertikal(100, 30)
  finishLine = garisVertikal(width-100, 30)
  
  if (!game) mulaiButton.tampilkan()
  
  player1.gambar()
  player2.gambar()
  
  if (player1.finish(width-100)) {
    menang(player1)
  }
  if (player2.finish(width-100)) {
    menang(player2)
  }
}
function garisVertikal(x, y) {
  line(x, y, x, height-y)
}

function menang(player) {
  game = false
  fill(player.warna)
  textSize(25)
  text(player.nama + " Menang!", width/2, 50)
}

function mulai() {
  game = true
  player1.x = 70
  player2.x = 70
  player1.kecepatan = 10
  player2.kecepatan = 10
}

function mouseClicked() {
  if (dist(mouseX, mouseY, mulaiButton.x, mulaiButton.y) < mulaiButton.w/2) {
    mulai()
  }
}

function keyPressed() {
  if (game) {
    if (key == 'd') {
      player1.loncat()
    }
    if (keyCode == RIGHT_ARROW) {
      player2.loncat()
    }  
  }
}
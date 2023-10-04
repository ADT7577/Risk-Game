//Alexsa <3 

let spamImg;
let rottenImg;
let freshImg;
let spam = { x: 200, y: 450, w: 250, h: 250, img: null };
let gameState = 'idle';
let score = 0;
let button;
// let a = 'Rules'
// let b = 'Click on the can of SPAM.'
// let c = 'You gain 1+ point for every FRESH can of SPAM. Click on "BET" if you think the next can of SPAM will be FRESH.'
// let d =''

function preload() {
  spamImg = loadImage('Spam.PNG');
  rottenImg = loadImage('Rotten.PNG');
  freshImg = loadImage('Fresh.PNG');
}

function setup() {
  createCanvas(400,820);
  spam.img = spamImg;
  
  button = createButton('BET');
  button.size(60, 40);
  button.style('background-color', 'Light Grey');
  button.position(width/2.5, height -150);
  button.mousePressed(resetGame);
}

function draw() {
  background(255);
  
  // Title and instruction
  textSize(26);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill (0,0,204);
  text('SPAM GAME', width / 2, height / 10);
  
  textStyle(BOLDITALIC);
  textSize(14);
  textAlign(CENTER)
  fill (0)
  text('Rules', width/4, -10, 200, 300);
  
  textStyle(NORMAL)
  text('Click on the can of SPAM.', width/4, 20, 200, 300);
  text('You gain 1+ point for every FRESH can of SPAM.', width/5, 45, 250, 300);
  text('Click on "BET" if you think the next can of SPAM will be FRESH.', width/5, 80, 250, 300);
  
  textStyle(ITALIC)
  fill(250,0,0);
  text('However, if you get a ROTTEN can of SPAM, you will lose all your points', width/5, 115, 250, 300);
  
  
  
  // Draw the SPAM
  image(spam.img, spam.x - spam.w/2, spam.y - spam.h/2, spam.w, spam.h);
  
  // Display result text
  textSize(12);
  fill(0,150,0)
  textStyle(BOLD);
  if (gameState === 'won') {
    text('You won', width / 2, spam.y + spam.h/2 + 10);
  } else if (gameState === 'lost') {
    fill (200,0,0);
    text('You lost', width / 2, spam.y + spam.h/2 + 10);
  }
  
  // Display the score
  textAlign(LEFT, CENTER);
  text('Score: ' + score, 10, height - 20);
}

function mousePressed() {
  // Check if the SPAM is clicked
  if (mouseX > spam.x - spam.w/2 && mouseX < spam.x + spam.w/2 && mouseY > spam.y - spam.h/2 && mouseY < spam.y + spam.h/2 && gameState === 'idle') {
    // Determine whether the SPAM is fresh or rotten (1/5 probability of rotten)
    if (random() < 1/5) {
      spam.img = rottenImg;
      gameState = 'lost';
      score = 0;  // Reset the score if rotten
    } else {
      spam.img = freshImg;
      gameState = 'won';
      score++;
    }
  }
}

function resetGame() {
  spam.img = spamImg;
  gameState = 'idle';
}

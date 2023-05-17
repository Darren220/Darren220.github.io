let audio = new Audio('tenderness.mp3');
audio.loop = true;
let fight = new Audio('bigwar.mp3');
let scene = 0;
let stop = false;

let empty1 = true;
let empty2 = true;
let empty3 = true;
let empty4 = true;
let empty5 = true;
let empty6 = true;
let empty7 = true;

let s1 = 0;
let s2 = 0;
let s3 = 0;
let s4 = 0;
let s5 = 0;
let s6 = 0;
let s7 = 0;
let s8 = 0;

let dialog = [];
let dragD = null;

let emptya = true;
let emptyb = true;
let emptyc = true;
let emptyd = true;
let emptye = true;
let dialog1 = [];
let dragD1 = null;

let topLayer;
let b3;
let re;
let ha;
let ru;
let icanfli = 0;

let cur = 0;
let click = 0;
let count = 0;

let g = 10;
let record = 0;
let canflip = 0;
let cur1 = 0;

let topLayer1;
let b6;
let ha1;

let frog;
let stones = [];
let fish = [];
let gameState = 'play';

let dark = 0;
let played = false;
let timing = 0;
let end = 0;
//let fight;

let empty11 = true;
let empty22 = true;
let empty33 = true;
let empty44 = true;
let empty55 = true;
let empty66 = true;
let empty77 = true;
let empty88 = true;
let dialog2 = [];
let dragD2 = null;

function preload() {
  try {
    b0 = loadImage("b0.png")
    back = loadImage("b1.png");
    flip = loadImage("flip.png");
    sofa = loadImage("sofa.png");
    plant = loadImage("plant.png");
    lamp = loadImage("lamp.png");
    table = loadImage("table.png");
    cup = loadImage("cup.png");
    flower = loadImage("flower.png");
    photo = loadImage("photo.png");
    err = loadSound("err.wav");
    drop = loadSound("drop.wav");
    slot = loadSound("slot.wav");
    turn = loadSound("turn.wav");
    //bgmusic = loadSound("tenderness.MP3");
    //fight = loadSound("bigwar.MP3");
    back2 = loadImage("b2.png");
    p1 = loadImage("piece1.png");
    p2 = loadImage("piece2.png");
    p3 = loadImage("piece 3.png");
    p4 = loadImage("piece 4.png");
    p5 = loadImage("piece5.png");
    flip = loadImage("flip.png");
    back3 = loadImage("b3.png");
    re = loadImage("bottom.png");
    ha = loadImage('top.png');
    ru = loadImage('new.png');
    backgroundImage = loadImage('b4.png');
    bgp = loadImage('bgp.png');
    bgc = loadImage('bgc.png');
    bgt = loadImage('bgt.png');
    bgg = loadImage('bgg.png');
    m1 = loadImage('mark1.png');
    mb = loadImage('mb.png');
    mc = loadImage('mc.png');
    mp = loadImage('mp.png');
    mt = loadImage('mt.png');
    glow1 = loadImage('glow1.png');
    //p1 = loadImage('WechatIMG950 1.png');
    b5 = loadImage('b5.png');
    myw = loadImage('myw.png'); myp = loadImage('myp.png');
    tp = loadImage('tp.png');
    comm = loadImage('comment.png');
    flip = loadImage("flip.png");
    b6 = loadImage("b6.png");
    ha1 = loadImage('mess.png');
    b7 = loadImage('b7.png');
    fro = loadImage('frog.png');
    mouth = loadImage('stone.png');
    foot1 = loadImage('foot1.png');
    foot2 = loadImage('foot2.png');
    over = loadImage("over.png");
    win = loadImage("win.png");
    ba7 = loadImage('ba7.png');
    thought = loadImage('thought.png');
    b8 = loadImage('b8.png');
    long = loadImage("long.png");
    no = loadImage("no.png");
    li = loadImage("li.png");
    b46 = loadImage("b46.png");
    b1 = loadImage("box1.png");
    b2 = loadImage("box2.png");
    b3 = loadImage("box2.png");
    b4 = loadImage("box2.png");
    sch = loadImage("sch.png");
    fri = loadImage("fri.png");
    swim = loadImage("swim.png");
    lib = loadImage("lib.png");
    gou = loadImage("gou.png");
    mp3 = loadImage("mp3.png");
    final = loadImage("final.png");
  } catch (error) {
    console.error("Error loading file:", error);
  }
}

function setup() {
  createCanvas(1920, 1080);
  w = width;
  h = w * 1080 / 1920;
  x = w / 1920;
  y = h / 1080;
  dialog.push(new ImageDragObject(1087 * x, 644 * y, x, y, sofa));
  dialog.push(new ImageDragObject(1188 * x, 774 * y, x, y, plant));
  dialog.push(new ImageDragObject(845 * x, 596 * y, x, y, lamp));
  dialog.push(new ImageDragObject(929 * x, 715 * y, x, y, table));
  dialog.push(new ImageDragObject(1118 * x, 766 * y, x, y, cup));
  dialog.push(new ImageDragObject(1040 * x, 746 * y, x, y, flower));
  dialog.push(new ImageDragObject(1252 * x, 773 * y, x, y, photo));

  dialog2.push(new ImageDragObject(632 * x, 762 * y, x, y, long));
  dialog2.push(new ImageDragObject(756 * x, 645 * y, x, y, no));
  dialog2.push(new ImageDragObject(669 * x, 703 * y, x, y, li));
  dialog2.push(new ImageDragObject(658 * x, 586 * y, x, y, b46));
  dialog2.push(new ImageDragObject(1100 * x, 237 * y, x, y, sch));
  dialog2.push(new ImageDragObject(1032 * x, 335 * y, x, y, fri));
  dialog2.push(new ImageDragObject(864 * x, 394 * y, x, y, swim));
  dialog2.push(new ImageDragObject(909 * x, 277 * y, x, y, lib));

  // for(let i = 3; i >= 0; i --) {
  // dialog.push(new ImageDragObject(853*x, 709*y, x, y, sch));
  // dialog.push(new ImageDragObject(1029*x, 709*y, x, y, fri));}
  // for(let i = 7; i >= 0; i --) {
  // dialog.push(new ImageDragObject(853*x, 791*y, x, y, study));
  // dialog.push(new ImageDragObject(943*x, 791*y, x, y, shop));
  // dialog.push(new ImageDragObject(1033*x, 791*y, x, y, jog));
  // dialog.push(new ImageDragObject(1123*x, 791*y, x, y, swim));}
  //bgmusic.play();
  //bgmusic.loop();
  // slot.setVolume(1.5);
  // err.setVolume(0.75);
  dialog1.push(new ImageDragObject(1013, 602, x, y, p1));
  dialog1.push(new ImageDragObject(994, 361, x, y, p2));
  dialog1.push(new ImageDragObject(736, 266, x, y, p3));
  dialog1.push(new ImageDragObject(851, 555, x, y, p4));
  dialog1.push(new ImageDragObject(1184, 192, x, y, p5));
  topLayer = createGraphics(1080, 760);
  topLayer.image(ha, 0, 0, 1080, 760);
  topLayer.strokeWeight(150);
  topLayer.blendMode(REMOVE);
  if (250 <= mouseX && mouseX <= 290 + 1080 && 120 <= mouseY && mouseY <= 150 + 760) {
    noCursor();
  }
  topLayer1 = createGraphics(1080, 760);
  topLayer1.image(ha1, 0, 0, 1080, 760);
  topLayer1.strokeWeight(150);
  topLayer1.blendMode(REMOVE);
  if (250 <= mouseX && mouseX <= 290 + 1080 && 120 <= mouseY && mouseY <= 150 + 760) {
    noCursor();
  }
  resetGame();
}

function resetGame() {
  frog = new Frog(1143, 297);
  stones.push(new Stone(859, 390, 117, 57));
  stones.push(new Stone(948, 408, 117, 57));
  stones.push(new Stone(871, 443, 117, 57));
  //stones.push(new Stone(1151, 601, 117, 57));
  stones.push(new Stone(900, 648, 117, 57));
  stones.push(new Stone(973, 710, 117, 57));
  stones.push(new Stone(859, 390, 117, 57));
  //stones.push(new Stone(1200, 414, 143, 73));
  stones.push(new Stone(864, 717, 73, 36));
  stones.push(new Stone(929, 714, 57, 28));
  fish.push(new Fish(1206, 590 - 83, 104, 83, foot1));
  fish.push(new Fish(941, 586, 75 * 0.8, 60 * 0.8, foot2));
  fish.push(new Fish(921, 665, 57 * 0.8, 45 * 0.8, foot2));
}

function resetGame1() {
  frog.x = 1143;
  frog.y = 297;
  gameState = 'play';
}

document.addEventListener('click', function () {
  // Call the play() method inside the event listener
  audio.play();
  audio.loop();
});

fight.addEventListener('ended', function () {
  end = 1; // Log a message when the audio has ended
  cur = millis();
});

function draw() {
  //console.log(s1,s2,s3,s4,s5,s6,s7,s8);
  if (scene == 0) {
    image(b0, 0, 0, 1920, 1080);
  }
  image(mp3, 1203, 452, 652, 716);
  if (scene == 1) {
    w = width;
    h = w * 1080 / 1920;
    x = w / 1920;
    y = h / 1080;
    image(back, 0, 0, w, h);
    if (empty1 == false && empty2 == false && empty3 == false && empty4 == false &&
      empty5 == false && empty6 == false && empty7 == false) { image(flip, 1185 * x, 724 * y, 200 * x, 200 * y); stop = true; }
    //image(no, 756*x, 645*y, 43*x, 35*y);
    //image(li, 669*x, 703*y, 129*x, 35*y);
    //image(b46, 658*x, 586*y, 141*x, 35*y);
    for (let p of dialog) {
      // Points
      //circle(p.x, p.y, dragRadius * 2);
      // Text
      p.show();
    }
  }
  if (scene == 2) {
    w = width;
    h = w * 1080 / 1920;
    x = w / 1920;
    y = h / 1080;
    console.log(mouseX, mouseY);
    image(back2, 0, 0, 1920, 1080);
    if (emptya == false && emptyb == false && emptyc == false && emptyd == false &&
      emptye == false) { image(flip, 1185 * x, 724 * y, 200 * x, 200 * y); }
    //image(no, 756*x, 645*y, 43*x, 35*y);
    //image(li, 669*x, 703*y, 129*x, 35*y);
    //image(b46, 658*x, 586*y, 141*x, 35*y);
    for (let p of dialog1) {
      // Points
      //circle(p.x, p.y, dragRadius * 2);
      // Text
      p.show();
    }
  }
  if (scene == 3) {
    console.log(millis() - cur);
    image(back3, 0, 0, 1920, 1080);
    //image(ha, 425, 160, width/4, height/3);
    image(re, 277, 135, 1080, 760);
    if (mouseIsPressed) {
      topLayer.line(pmouseX - 277, pmouseY - 135, mouseX - 277, mouseY - 135);
    }

    image(topLayer, 277, 135);
    if (255 <= mouseX && mouseX <= 290 + 1080 && 120 <= mouseY && mouseY <= 150 + 760) {
      image(ru, mouseX, mouseY, 100, 100);
    }
    if (icanfli == 1) { image(flip, 1185, 724, 200, 200); }
  }
  if (scene == 4) {
    console.log(mouseX, mouseY, count);
    image(backgroundImage, 0, 0, 1920, 1080);
    if (ptInRect(mouseX, mouseY, 1122, 302, 1122 + 82, 378)) {
      image(bgp, 0, 0, 1920, 1080);
    }
    if (ptInRect(mouseX, mouseY, 1278 - 56, 490, 1278, 520)) {
      image(bgc, 0, 0, 1920, 1080);
    }
    if (ptInRect(mouseX, mouseY, 1171, 376, 1304, 497)) {
      image(bgt, 0, 0, 1920, 1080);
    }
    if (ptInRect(mouseX, mouseY, 1087, 497, 1087 + 61, 547)) {
      image(bgg, 0, 0, 1920, 1080);
    }
    if (click == 0) {
      image(m1, 896, 627, 385, 174);
      noStroke();
      fill(255, 255, 255, 255 - (millis() - cur) / 10);
      rect(896, 627, 385, 174);
    }
    if (click == 1) {
      image(mp, 896, 627, 385, 174);
      noStroke();
      fill(255, 255, 255, 255 - (millis() - cur) / 10);
      rect(896, 627, 385, 174);
    }
    if (click == 2) {
      image(mc, 896, 627, 385, 174);
      noStroke();
      fill(255, 255, 255, 255 - (millis() - cur) / 10);
      rect(896, 627, 385, 174);
    }
    if (click == 3) {
      image(mt, 896, 627, 385, 174);
      noStroke();
      fill(255, 255, 255, 255 - (millis() - cur) / 10);
      rect(896, 627, 385, 174);
    }
    if (click == 4) {
      image(mb, 896, 627, 385, 174);
      noStroke();
      fill(255, 255, 255, 255 - (millis() - cur) / 10);
      rect(896, 627, 385, 174);
    }
    if (count >= 4) {
      image(flip, 1185, 724, 200, 200);
    }
  }
  if (scene == 5) {
    image(b5, 0, 0, 1920, 1080);
    g = g - (millis() - record) / 200;
    if (g <= 2) {
      g = 2;
    }
    if (g >= 18) {
      g = 18;
      canflip = 1;
    }
    push();
    translate(1051, 328);
    imageMode(CENTER);
    if (ptInRect(mouseX, mouseY, 864, 242, 864 + 446, 242 + 183)) {
      image(myw, 0, 0, 96 + g, 127 + g * 127 / 96);
    } else { image(myp, 0, 0, 85 + g, 116 + g * 116 / 85); }
    pop();
    push();
    translate(1137, 328);
    imageMode(CENTER);
    image(tp, 0, 0, 115 - g, 165 - g * 165 / 115);
    pop();
    if (canflip == 1) {
      image(flip, 1185, 724, 200, 200);
      image(comm, 864, 790, 340, 71);
      // noStroke();
      // fill(254, 249, 244, 255 - (millis() - cur) / 10);
      // rect(864, 790, 340, 71);
    }
  }
  if (scene == 6) {
    image(b7, 0, 0, 1920, 1080);

    if (gameState === 'play') {
      frog.show();
      frog.move();

      for (let i = 0; i < stones.length; i++) {
        stones[i].show();
        if (frog.collide(stones[i])) {
          console.log(frog.x, frog.y);
          gameState = 'gameover';
          console.log(i, stones[i].x);
        }
      }

      for (let i = 0; i < fish.length; i++) {
        fish[i].show();
        fish[i].move();
        if (frog.collide(fish[i])) {
          gameState = 'gameover';
          console.log(i, fish[i].x);
        }
      }

      if (frog.y > 710 && frog.x > 1090) {
        gameState = 'win';
      }
    } else if (gameState === 'gameover') {
      image(over, 918, 430, over.width, over.hieght);
      setTimeout(resetGame1, 1500);
    } else if (gameState === 'win') {
      image(win, 918, 460, win.width, win.hieght);
      image(flip, 1185, 724, 200, 200);
    }
  }
  if (scene == 7) {
    //cur = millis();
    console.log((millis() - cur) / 30 >= 255);
    console.log(played);
    image(ba7, 0, 0, 1920, 1080);
    noStroke();
    fill(0, 0, 0, (millis() - cur) / 30);
    rect(0, 0, 1920, 1080);
    if ((millis() - cur) / 30 >= 255 && !played) {
      audio.pause();
      fight.play();
      played = true;
    }
    if (end == 1) {
      audio.play();
      end = -1;
    }
    if (end == -1) {
      image(ba7, 0, 0, 1920, 1080);
      image(thought, 0, 895, 1920, 185);
      image(flip, 1185, 724, 200, 200);
      noStroke();
      fill(0, 0, 0, 255 - ((millis() - cur) / 30));
      rect(0, 0, 1920, 1080);
    }
  }

  if (scene == 8) {
    w = width;
    h = w * 1080 / 1920;
    x = w / 1920;
    y = h / 1080;
    image(b8, 0, 0, w, h);
    if (empty11) { image(b1, 390 * x, 311 * y, 164 * x, 93 * y); }
    if (empty22) { image(b2, 390 * x, 490 * y, 161 * x, 33 * y); }
    if (empty33) { image(b3, 390 * x, 660 * y, 161 * x, 33 * y); }
    if (empty44) { image(b4, 390 * x, 797 * y, 161 * x, 33 * y); }
    if (empty11 == false && empty22 == false && empty33 == false && empty44 == false) {
      image(gou, 627, 648, 155, 155);
    }
    if (empty11 == false && empty22 == false && empty33 == false && empty44 == false &&
      empty55 == false && empty66 == false && empty77 == false && empty88 == false) { image(flip, 1185 * x, 724 * y, 200 * x, 200 * y); }
    //image(no, 756*x, 645*y, 43*x, 35*y);
    //image(li, 669*x, 703*y, 129*x, 35*y);
    //image(b46, 658*x, 586*y, 141*x, 35*y);
    for (let p of dialog2) {
      // Points
      //circle(p.x, p.y, dragRadius * 2);
      // Text
      p.show();
    }
  }

  if (scene == 9) {
    image(b6, 0, 0, width, height);

    //image(ha, 425, 160, width/4, height/3);
    //image(re, 277, 135, 1080, 760);
    if (mouseIsPressed) {
      topLayer1.line(pmouseX - 277, pmouseY - 135, mouseX - 277, mouseY - 135);
    }

    image(topLayer1, 277, 135);
    if (255 <= mouseX && mouseX <= 290 + 1080 && 120 <= mouseY && mouseY <= 150 + 760) {
      image(ru, mouseX, mouseY, 100, 100);
    }
  }
  image(mp3, 1203, 452, 654, 716);
  if (scene == 10) {
    image(final, 0, 0, 1920, 1080);
  }
}

function mouseClicked() {
  g = g + 10;
  record = cur1 = millis();
  //canflip = 1;
  if (scene == 0) { scene = 1; }
}

function mousePressed() {
  if (scene == 1 && !stop) {
    // const isPressed = dialog[0].mouseInside();
    // const isPressed2 = dialog[1].mouseInside();
    // const isPressed3 = dialog[2].mouseInside();
    // const isPressed4 = dialog[3].mouseInside();
    for (let i = dialog.length - 1; i >= 0; i--) {
      const isPressed = dialog[i].mouseInside();

      if (isPressed) {
        dragD = dialog.splice(i, 1)[0];
        // bring the drag point to the front
        dialog.push(dragD);

        break;
      }
    }
  }
  if (scene == 1 && ptInRect(mouseX, mouseY, 1185, 724, 1185 + 200, 724 + 200) && empty1 == false && empty2 == false && empty3 == false && empty4 == false &&
    empty5 == false && empty6 == false && empty7 == false) {
    scene = 2;
  }
  if (scene == 2) {
    for (let i = dialog1.length - 1; i >= 0; i--) {
      const isPressed = dialog1[i].mouseInside();

      if (isPressed) {
        dragD1 = dialog1.splice(i, 1)[0];
        // bring the drag point to the front
        dialog1.push(dragD1);

        break;
      }
    }
  }
  if (scene == 2 && ptInRect(mouseX, mouseY, 1185, 724, 1185 + 200, 724 + 200) && emptya == false && emptyb == false && emptyc == false && emptyd == false &&
    emptye == false) {
    scene = 3;
    cur = millis();
  }
  if (scene == 3) {
    icanfli = 1;
  }
  if (scene == 3 && ptInRect(mouseX, mouseY, 1185, 724, 1185 + 200, 724 + 200) && icanfli == 1 && millis() - cur >= 5000) {
    scene = 4;
  }
  if (scene == 4) {
    cur = millis();
    if (ptInRect(mouseX, mouseY, 1122, 302, 1122 + 82, 378)) {
      click = 1;
      count++;
    }
    if (ptInRect(mouseX, mouseY, 1278 - 56, 490, 1278, 520)) {
      click = 2;
      count++;
    }
    if (ptInRect(mouseX, mouseY, 1171, 376, 1304, 497)) {
      click = 3;
      count++;
    }
    if (ptInRect(mouseX, mouseY, 1087, 497, 1087 + 61, 547)) {
      click = 4;
      count++;
    }
  }
  if (scene == 4 && ptInRect(mouseX, mouseY, 1185, 724, 1185 + 200, 724 + 200) && count >= 4) {
    scene = 5;
  }
  if (scene == 5 && ptInRect(mouseX, mouseY, 1185, 724, 1185 + 200, 724 + 200) && canflip == 1) {
    scene = 6;
  }
  if (scene == 6 && ptInRect(mouseX, mouseY, 1185, 724, 1185 + 200, 724 + 200) && gameState === 'win') {
    scene = 7;
  }
  if (scene == 7 && timing == 0) {
    cur = millis();
    timing = 1;
  }
  if (scene == 7 && end == -1 && ptInRect(mouseX, mouseY, 1185, 724, 1185 + 200, 724 + 200)) {
    scene = 8;
  }
  if (scene == 8) {
    for (let i = dialog2.length - 1; i >= 0; i--) {
      const isPressed = dialog2[i].mouseInside();

      if (isPressed) {
        dragD2 = dialog2.splice(i, 1)[0];
        // bring the drag point to the front
        dialog2.push(dragD2);

        break;
      }
    }
  }
  if (scene == 8 && ptInRect(mouseX, mouseY, 1185, 724, 1185 + 200, 724 + 200) && empty11 == false && empty22 == false && empty33 == false && empty44 == false &&
    empty55 == false && empty66 == false && empty77 == false && empty88 == false) {
    scene = 9;
    cur = millis();
  }
  if (scene == 9 && millis() - cur >= 4000) {
    scene = 10;
  }


}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    frog.jump(-1);
  } else if (keyCode === DOWN_ARROW) {
    frog.jump(1);
  } else if (keyCode === LEFT_ARROW) {
    frog.jump(0, -1);
  } else if (keyCode === RIGHT_ARROW) {
    frog.jump(0, 1);
  }
}

function mouseDragged() {
  if (!stop) {
    if (dragD) {
      dragD.x = mouseX;
      dragD.y = mouseY;
    }
  }
  if (dragD1) {
    dragD1.x = mouseX;
    dragD1.y = mouseY;
  }
  if (dragD2) {
    dragD2.x = mouseX;
    dragD2.y = mouseY;
  }
}

function mouseReleased() {
  if (dragD1 != null && dragD1.img == p1) {
    if (dragD1.x >= 814 && dragD1.x <= 834 && dragD1.y >= 252 && dragD1.y <= 272) {
      dragD1.x = 824;
      dragD1.y = 262;
      emptya = false;
      sent.play();
    } else {
      dragD1.x = 1015;
      dragD1.y = 593;
      err.play();
    }
  }
  else {
    if (dragD1 != null && dragD1.img == p2) {
      if (dragD1.x >= 0 && dragD1.x <= 1352 && dragD1.y >= 0 && dragD1.y <= 281) {
        //console.log(dragD1.x >= 1312 && dragD1.x <= 1352 && dragD1.y >= 241 && dragD1.y <= 281)
        dragD1.x = 1132;
        dragD1.y = 260;
        emptyb = false;
        //sent.play();
      } else {
        dragD1.x = 994;
        dragD1.y = 361;
        //err.play();
      }
    }
    else {
      if (dragD1 != null && dragD1.img == p3) {
        if (dragD1.x >= 1112 && dragD1.x <= 1152 && dragD1.y >= 488 && dragD1.y <= 528) {
          dragD1.x = 1132;
          dragD1.y = 508;
          emptyc = false;
          //sent.play();
        } else {
          dragD1.x = 736;
          dragD1.y = 266;
          //err.play();
        }
      }
      else {
        if (dragD1 != null && dragD1.img == p4) {
          if (dragD1.x >= 917 && dragD1.x <= 957 && dragD1.y >= 486 && dragD1.y <= 526) {
            dragD1.x = 937;
            dragD1.y = 506;
            emptyd = false;
            //sent.play();
          } else {
            dragD1.x = (851);
            dragD1.y = (555);
            //err.play();
          }
        }
        else {
          if (dragD1 != null && dragD1.img == p5) {
            if (dragD1.x >= 803 && dragD1.x <= 843 && dragD1.y >= 489 && dragD1.y <= 529) {
              dragD1.x = 823;
              dragD1.y = 509;
              emptye = false;
              //sent.play();
            } else {
              dragD1.x = (1184);
              dragD1.y = (192);
              //err.play();
            }
          }
        }
      }
    }
  }


  dragD1 = null;
  if (!stop) {
    if (dragD != null && dragD.img == sofa) {
      if (dragD.x >= 849 * dragD.a && dragD.x <= 1104 * dragD.a && dragD.y >= 370 * dragD.b && dragD.y <= 481 * dragD.b) {
        //dragD.x = 390*dragD.a;
        //dragD.y = 311*dragD.b;
        empty1 = false;
        drop.play();
      } else {
        dragD.x = 1087 * dragD.a;
        dragD.y = 644 * dragD.b;
        err.play();
      }
    }
    else {
      if (dragD != null && dragD.img == lamp) {
        if (dragD.x >= 849 * dragD.a && dragD.x <= 1158 * dragD.a && dragD.y >= 247 * dragD.b && dragD.y <= 335 * dragD.b) {
          //dragD.x = 510*dragD.a;
          //dragD.y = 490*dragD.b;
          empty2 = false;
          drop.play();
          //sent.play();
        } else {
          dragD.x = 845 * dragD.a;
          dragD.y = 596 * dragD.b;
          err.play();
        }
      }
      else {
        if (dragD != null && dragD.img == table) {
          if (dragD.x >= 849 * dragD.a && dragD.x <= 1198 * dragD.a && dragD.y >= 349 * dragD.b && dragD.y <= 456 * dragD.b) {
            // dragD.x = 430*dragD.a;
            // dragD.y = 660*dragD.b;
            empty3 = false;
            drop.play();
          } else {
            dragD.x = 929 * dragD.a;
            dragD.y = 715 * dragD.b;
            err.play();
          }
        }
        else {
          if (dragD != null && dragD.img == flower) {
            if (dragD.x >= 817 * dragD.a && dragD.x <= 1262 * dragD.a && dragD.y >= 280 * dragD.b && dragD.y <= 490 * dragD.b) {
              // dragD.x = 410*dragD.a;
              // dragD.y = 797*dragD.b;
              empty4 = false;
              drop.play();
            } else {
              dragD.x = 1040 * dragD.a;
              dragD.y = 746 * dragD.b;
              err.play();
            }
          }
          else {
            if (dragD != null && dragD.img == cup) {
              if (dragD.x >= 845 * dragD.a && dragD.x <= 1262 * dragD.a && dragD.y >= 300 * dragD.b && dragD.y <= 509 * dragD.b) {
                // dragD.x = 410*dragD.a;
                // dragD.y = 797*dragD.b;
                empty5 = false;
                drop.play();
              } else {
                dragD.x = 1118 * dragD.a;
                dragD.y = 776 * dragD.b;
                err.play();
              }
            }
            else {
              if (dragD != null && dragD.img == photo) {
                if (dragD.x >= 846 * dragD.a && dragD.x <= 1267 * dragD.a && dragD.y >= 246 * dragD.b && dragD.y <= 396 * dragD.b) {
                  // dragD.x = 410*dragD.a;
                  // dragD.y = 797*dragD.b;
                  empty6 = false;
                  drop.play();
                } else {
                  dragD.x = 1252 * dragD.a;
                  dragD.y = 773 * dragD.b;
                  err.play();
                }
              }
              else {
                if (dragD != null && dragD.img == plant) {
                  if (dragD.x >= 845 * dragD.a && dragD.x <= 1267 * dragD.a && dragD.y >= 402 * dragD.b && dragD.y <= 515 * dragD.b) {
                    // dragD.x = 410*dragD.a;
                    // dragD.y = 797*dragD.b;
                    empty7 = false;
                    drop.play();
                  } else {
                    dragD.x = 1188 * dragD.a;
                    dragD.y = 774 * dragD.b;
                    err.play();
                  }
                }
              }
            }
          }
        }
      }
    }
    dragD = null;
    // dragD2 = null;
    // dragD3 = null;
    // dragD4 = null;
  }
  if (dragD2 != null && dragD2.img == long) {
    if (dragD2.x >= 380 && dragD2.x <= 400 && dragD2.y >= 301 && dragD2.y <= 321) {
      dragD2.x = 390;
      dragD2.y = 311;
      empty11 = false;
      sent.play();
    } else {
      dragD2.x = 632;
      dragD2.y = 762;
      err.play();
    }
  }
  else {
    if (dragD2 != null && dragD2.img == no) {
      if (dragD2.x >= 380 && dragD2.x <= 520 && dragD2.y >= 480 && dragD2.y <= 500) {
        dragD2.x = 510
        dragD2.y = 490
        empty22 = false;
        sent.play();
      } else {
        dragD2.x = 756;
        dragD2.y = 645;
        err.play();
      }
    }
    else {
      if (dragD2 != null && dragD2.img == li) {
        if (dragD2.x >= 380 && dragD2.x <= 440 && dragD2.y >= 650 && dragD2.y <= 670) {
          dragD2.x = 430;
          dragD2.y = 660;
          empty33 = false;
          sent.play();
        } else {
          dragD2.x = 669;
          dragD2.y = 703;
          err.play();
        }
      }
      else {
        if (dragD2 != null && dragD2.img == b46) {
          if (dragD2.x >= 380 && dragD2.x <= 420 && dragD2.y >= 787 && dragD2.y <= 807) {
            dragD2.x = 410
            dragD2.y = 797
            empty44 = false;
            sent.play();
          } else {
            dragD2.x = 658;
            dragD2.y = 586;
            err.play();
          }
        }
        else {
          if (dragD2 != null && dragD2.img == sch) {
            if (dragD2.x >= 967 && dragD2.x <= 1007 && dragD2.y >= 521 && dragD2.y <= 561) {
              dragD2.x = 987
              dragD2.y = 541
              empty55 = false;
              sent.play();
            } else {
              dragD2.x = 1100;
              dragD2.y = 237;
              err.play();
            }
          }
          else {
            if (dragD2 != null && dragD2.img == fri) {
              if (dragD2.x >= 967 && dragD2.x <= 1007 && dragD2.y >= 592 && dragD2.y <= 632) {
                dragD2.x = 987
                dragD2.y = 612
                empty66 = false;
                sent.play();
              } else {
                dragD2.x = 1032;
                dragD2.y = 335;
                err.play();
              }
            }
            else {
              if (dragD2 != null && dragD2.img == lib) {
                if (dragD2.x >= 1142 && dragD2.x <= 1182 && dragD2.y >= 521 && dragD2.y <= 561) {
                  dragD2.x = 1162
                  dragD2.y = 541
                  empty77 = false;
                  sent.play();
                } else {
                  dragD2.x = 909;
                  dragD2.y = 277;
                  err.play();
                }
              }
              else {
                if (dragD2 != null && dragD2.img == swim) {
                  if (dragD2.x >= 1142 && dragD2.x <= 1182 && dragD2.y >= 592 && dragD2.y <= 632) {
                    dragD2.x = 1162
                    dragD2.y = 612
                    empty88 = false;
                    sent.play();
                  } else {
                    dragD2.x = 864;
                    dragD2.y = 394;
                    err.play();
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  dragD2 = null;
}

function mouseInBox(x, y, w, h) {
  return mouseX >= x && mouseX < x + w &&
    mouseY >= y && mouseY < y + h;
}

class ImageDragObject {
  constructor(x, y, a, b, img) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.b = b;
    this.img = img;
  }

  mouseInside() {
    return mouseInBox(this.x, this.y, this.img.width * (this.a), this.img.height * (this.b));
  }

  show() {
    image(this.img, this.x, this.y, this.img.width * (this.a), this.img.height * (this.b));
  }

  show2() {
    image(this.img, this.x, this.y, this.img.width * (this.a) * 1.2, this.img.height * (this.b) * 1.2);
  }

  hovering() {
    return mouseX >= this.x && mouseX <= this.x + this.width &&
      mouseY >= this.y && mouseY <= this.y + this.height;
  }
}

function ptInRect(x, y, left, top, right, bottom) {
  return isBetween(x, left, right) && isBetween(y, top, bottom);
}

function isBetween(x, start, stop) {
  return (start < x && x < stop);
}

class Frog {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 76 * 0.6;
    this.h = 89 * 0.6;
  }

  show() {
    //rect(this.x, this.y, this.w, this.h);
    image(fro, this.x, this.y, this.w, this.h);
  }

  move() {
    if (this.y >= 267 && keyIsDown(UP_ARROW)) {
      this.jump(-1);
    } else if ((this.y + this.h <= 839) && keyIsDown(DOWN_ARROW)) {
      this.jump(1);
    } else if (this.x >= 864 && keyIsDown(LEFT_ARROW)) {
      this.jump(0, -1);
    } else if ((this.x + this.w <= 1310) && keyIsDown(RIGHT_ARROW)) {
      this.jump(0, 1);

    }
  }

  jump(y, x = 0) {
    if (this.y + y * 2 > height - this.h / 2 || this.y + y * 2 < this.h / 2) {
      return;
    }
    if (this.x + x * 2 > width - this.w / 2 || this.x + x * 2 < this.w / 2) {
      return;
    }
    this.x += x * 2;
    this.y += y * 2;
  }

  reset() {
    this.x = 1143;
    this.y = 297;
  }

  collide(object) {
    if (this.x + this.w / 2 < object.x - object.w / 2 ||
      this.x - this.w / 2 > object.x + object.w / 2 ||
      this.y + this.h / 2 < object.y - object.h / 2 ||
      this.y - this.h / 2 > object.y + object.h / 2) {
      return false;
    } else {
      return true;
    }
  }
}

class Stone {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show() {
    image(mouth, this.x, this.y, this.w, this.h);
    //rect(this.x, this.y, this.w, this.h);
  }
}

class Fish {
  constructor(x, y, w, h, pic) {
    this.x = x;
    this.y = y;
    this.ox = x;
    this.oy = y
    this.w = w;
    this.h = h;
    this.pic = pic;
    this.speed = 1;
  }

  show() {
    image(this.pic, this.x, this.y, this.w, this.h);
    //rect(this.x, this.y, this.w, this.h);
  }

  move() {
    if (this.pic == foot1) {
      this.x -= this.speed;
    } else {
      this.x += this.speed;
    }
    if (this.x > 1310 - 75 * 0.8 || this.x < 760 + 104) {
      this.x = this.ox;
      this.y = this.oy;
    }
  }
}

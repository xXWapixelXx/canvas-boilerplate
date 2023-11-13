import platform from '../img/platform.png';
import hills from '../img/hills.png';
import background from '../img/background.png';
import platformSmallTall from '../img/platformSmallTall.png';
import girl from '../img/girl.png';

import roniRunLeft from '../img/roniRunLeft.png';
import roniRunRight from '../img/roniRunRight.png';
import roniStandLeft from '../img/roniStandLeft.png';
import roniStandRight from '../img/roniStandRight.png';

console.log(platform);
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const gravity = 0.5;

class Player {
    constructor() {
        this.speed = 5;
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 80;
        this.height = 150;
        
        this.image = createImage(roniStandRight);
        this.sprites = {
            stand: {
                right: createImage(roniStandRight),
                left: createImage(roniStandLeft),
                cropwidth: 0,
                width: 177,
                left: createImage(roniStandLeft),
                cropwidth: 177,
            },
            run: {
                right: createImage(roniRunRight),
                left: createImage(roniRunLeft),
                cropwidth: 0,
                left: createImage(roniRunLeft),
                cropwidth: 177,
            }
         } 

         this.currentSprite = this.sprites.stand.right;
         this.currentCropwidth = this.sprites.stand.cropwidth;
    }



    draw() {
        c.drawImage(
            this.currentSprite,
            50,
            0,
            this.currentCropwidth,
            400, 
            this.position.x, 
            this.position.y,
            this.width, 
            this.height)
    }
    

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;}
    }   
}

class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }

        this.image = image;
        this.width = image.width;
        this.height = image.height;

    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class GenericObject {
  constructor({ x, y, image }) {
      this.position = {
          x,
          y
      }

      this.image = image;
      this.width = image.width;
      this.height = image.height;

  }

  draw() {
      c.drawImage(this.image, this.position.x, this.position.y)
  }
}

function createImage(imageSrc) {
  const image = new Image()
  image.src = imageSrc
  return image
}

let platformImage = createImage(platform)
let platformSmallTallImage = createImage(platformSmallTall)
let player = new Player();
let platforms = []
let genericObjects = [];
let jumpSound = new Audio('../audio/jump.mp3');
let thankYouSound = new Audio('../audio/thankyou.mp3');
let thankYouSoundCount = 0;
let score = 0;
let scores = 0;



let keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
}

let scrollOffset = 0;

function init() {
    score++;
 platformImage = createImage(platform)

 player = new Player();
 platforms = [
    new Platform({ x: platformImage.width * 4 + 650 - 2 + platformImage.width - platformSmallTallImage.width, y: 450, image: createImage(platformSmallTall)}),
    new Platform({ x: platformImage.width * 4 + 1100 - 2 + platformImage.width - platformSmallTallImage.width, y: 270, image: createImage(platformSmallTall)}),
    new Platform({ x: platformImage.width * 4 + 4550 - 2 + platformImage.width - platformSmallTallImage.width, y: 90, image: createImage(platformSmallTall)}),
    new Platform({ x: platformImage.width * 4 + 5500 - 2 + platformImage.width - platformSmallTallImage.width, y: 280, image: createImage(girl)}),
  new Platform(
    { x: -1, y: 350, image: platformImage    }
), new Platform(
    { x: platformImage.width - 3, y: 470, image: platformImage }
), new Platform({ x: platformImage.width *2 + 100, y: 470, image: platformImage }
), new Platform({ x: platformImage.width *3 + 300, y: 470, image: platformImage },
), new Platform({ x: platformImage.width *4 + 400 - 2, y: 470, image: platformImage }
), new Platform({ x: platformImage.width *5 + 700 - 2, y: 350, image: platformImage }
), new Platform({ x: platformImage.width *6 + 700 - 3, y: 150, image: platformImage }
), new Platform({ x: platformImage.width *8 + 300, y: 470, image: platformImage },
), new Platform({ x: platformImage.width *9 + 400 - 2, y: 470, image: platformImage }
), new Platform({ x: platformImage.width *10 + 700 - 2, y: 350, image: platformImage }
), new Platform({ x: platformImage.width *11 + 700 - 3, y: 150, image: platformImage }
), new Platform({ x: platformImage.width *11 + 1700 - 3, y: 450, image: platformImage })
]; 
 genericObjects = [
  new GenericObject({
    x: -1,
    y: -1,                                                      
    image: createImage(background)
  }),
  new GenericObject({
    x: -1,
    y: -1,
    image: createImage(hills)
  })
];


 scrollOffset = 0;

}

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);
   
    genericObjects.forEach((genericObject) => {
      genericObject.draw()
    })

    platforms.forEach(platform => {
        platform.draw();
    })

    player.update();

        // Draw the score after all the images
    c.font = '20px Arial';
    c.fillStyle = 'white';
    c.textAlign = 'center';
    c.fillText('Death: ' + score, canvas.width / 2, 30);

    c.font = '20px Arial';
    c.fillStyle = 'white';
    c.textAlign = 'left';
    c.fillText('Score: ' + scores, 30, 30);

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = player.speed;
    } else if ((keys.left.pressed && player.position.x > 100) 
    || (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)) {
        player.velocity.x = -player.speed;
    } else {
        player.velocity.x = 0

        if (keys.right.pressed) {
            scrollOffset += player.speed;
            platforms.forEach(platform => {
                platform.position.x -= player.speed;
            })
            genericObjects.forEach((genericObject) => {
              genericObject.position.x -= player.speed * 0.66
            })
    
        } else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= player.speed;
            platforms.forEach(platform => {
                platform.position.x += player.speed * 0.66;
            })

            genericObjects.forEach((genericObject) => {
                genericObject.position.x += 3
              })
        }
    }



    // platform collision detectie
    platforms.forEach(platform => {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y
         && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
        player.velocity.y = 0;
    }
    })
    // win condition
    if (scrollOffset > platformImage.width *4 + 5000 - 2) {
        scores++;
        scrollOffset = 0;

        console.log('you win')
        if (thankYouSoundCount < 2) {
            thankYouSound.play();
            thankYouSoundCount++;
        }
        setTimeout(() => {
            init();
        }, 3000)
    }

    // lose condition
    if (player.position.y > canvas.height) {
        init();
    }
}

init();
animate();

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('left');
            keys.left.pressed = true;   
            player.currentSprite = player.sprites.run.left;
            player.currentCropwidth = player.sprites.run.cropwidth;
            break;

        case 83:
            console.log('down');
            break;

        case 68:
            console.log('right');
            keys.right.pressed = true;
            player.currentSprite = player.sprites.run.right;
            player.currentCropwidth = player.sprites.run.cropwidth;
            break;

        case 87:
            console.log('up');
            jumpSound.play();
            player.velocity.y -= 17;
            break;
    }
})

addEventListener('keyup', ({ keyCode }) => {
    // console.log(keyCode);
    switch (keyCode) {
        case 65:
            console.log('left');
            keys.left.pressed = false;
            break;

        case 83:
            console.log('down');
            break;

        case 68:
            console.log('right');
            keys.right.pressed = false;
            player.currentSprite = player.sprites.stand.right;
            player.currentCropwidth = player.sprites.run.cropwidth;
            break;

        case 87:
            console.log('up');
            break;

        case 32: // Spacebar
            console.log('attack');
            // Add your attack code here
            break;
    }
})

window.addEventListener("load", () => {
    let bgMusic = new Audio('../audio/music.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.2; // Adjust this value as needed
    bgMusic.play();
})
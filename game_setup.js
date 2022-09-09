// Game Setup

// canvas setup
const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
c.fillRect(0,0, canvas.width, canvas.height);
// player movement settings
const gravity = 0.2; // pull on objects after jumping
const horizontal_vel = 7; // aka speed left/right
const vertical_vel = 5; // jumping 

// Key Flags 
const action_keys = {
    a: { pressed: false},
    d: { pressed: false},
    w: { pressed : false},
    Space: {pressed: false},
    ArrowRight: { pressed : false},
    ArrowLeft: { pressed : false},
    ArrowUp: { pressed : false},

};
// other spites
const background = new Sprite({
    position: {x: 0, y:0},
    imageSrc: "./assets/background.png"
})

const shop = new Sprite({
    position: {
        x: 660,
        y: 128
    },
    imageSrc: "./assets/shop_animated.png",
    scale: 2.75,
    frames: 6
});


//
// intial player spawn location
const player1 = new Player(
    { position: {x:100 , y:0}, velocity:{x:0 , y:0},
    imageOffSet: { x: 215,y: 157},
    imageSrc: './assets/player1/Idle.png',
    frames: 8,
    scale: 2.5
    , color: 'blue' // tempsd
    ,sprites: {
        idle: {
            imageSrc: './assets/player1/Idle.png',
            frames: 8,

        },
        run_left: {
            imageSrc: './assets/player1/Run-left.png',
            frames: 8
        },
        run_right: {
            imageSrc: './assets/player1/Run.png',
            frames: 8
        },
        jump: {
            imageSrc: './assets/player1/Jump.png',
            frames: 2
        },
        fall: {
            imageSrc: './assets/player1/Fall.png',
            frames: 2
        },
        attack1: {
            imageSrc: './assets/player1/Attack1.png',
            frames: 6
        },
        attack1_left: {
            imageSrc: './assets/player1/Attack1_left.png',
            frames: 6
        }
    }

  }
);

const player2 = new Player(
    { position: {x:300 , y:0}, velocity:{x:0 , y:0},
      imageOffSet: { x: 215,y: 171},
      imageSrc: './assets/player2/Idle.png',
      frames: 4,
      scale: 2.5
      , color: 'green' // temp
      ,sprites: {
        idle: {
            imageSrc: './assets/player2/Idle.png',
            frames: 4,

        },
        run_left: {
            imageSrc: './assets/player2/Run-left.png',
            frames: 8
        },
        run_right: {
            imageSrc: './assets/player2/Run.png',
            frames: 8
        },
        jump: {
            imageSrc: './assets/player2/Jump.png',
            frames: 2
        },
        fall: {
            imageSrc: './assets/player2/Fall.png',
            frames: 2
        },
        attack1: {
            imageSrc: './assets/player2/Attack1.png',
            frames: 4
        },
        attack1_left: {
            imageSrc: './assets/player2/Attack1_left.png',
            frames: 4
        }
      
    }
    }
);
// End Game Setup
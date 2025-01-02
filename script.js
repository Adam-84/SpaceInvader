let canvas = document.getElementById("plateau");
let ctx = canvas.getContext("2d");

let keyTable = [];
let drawing = 0;


const aliens = [];
let fire = [];

let score = 0;
let lives = 3;
let level = 1;

const ship = {
    x: canvas.width / 2 - 16,
    y: canvas.height - 32, 
    img: document.getElementById("vaisseau")
};

//les tirs_____________________________________________________________________________________________________

const createFire = (offset) => {
    fire.push({
        x: ship.x + offset,
        y: ship.y - 10,
        width: 5,
        height: 10,
        speed: 5
    });
};

const setFire = () => {
    for (let i = 0; i < fire.length; i++) {
        fire[i].y -= fire[i].speed;

        if (fire[i].y < 0) {
            fire.splice(i, 1);
            i--;
        }
    }
};

const drawFire = () => {
    for (let i = 0; i < fire.length; i++) {
        ctx.fillStyle = "greenyellow"; 
        ctx.fillRect(fire[i].x, fire[i].y, fire[i].width, fire[i].height); 
    }
};

//aliens________________________________________________________________________________________________________

const createAliens = () => {
    aliens.length = 0; 
    for (let i = 0; i < 3; i++) { 
        for (let j = 0; j < 5; j++) { 
            aliens.push({
                x: j * 60 + 50,
                y: i * 40 + 30, 
                img: document.getElementById("alien"), 
                direction: 1 
            });
        }
    }
};

const drawAliens = () => {
    for (let i = 0; i < aliens.length; i++) {
        ctx.drawImage(aliens[i].img, aliens[i].x, aliens[i].y);
    }
};

const updateAliens = () => {
    for (let i = 0; i < aliens.length; i++) {
        aliens[i].x += aliens[i].direction; 

        if (aliens[i].x + 32 > canvas.width || aliens[i].x < 0) {
            aliens[i].direction *= -1; 
            aliens[i].y += 10;
            if (aliens[i].y + 32 >= canvas.height) {
                lives--;
                resetAliens();
                if (lives <= 0) {
                    alert("Game Over! Votre score: " + score);
                    document.location.reload();
                }
            }
        }
    }
};

const resetAliens = () => {
    for (let i = 0; i < aliens.length; i++) {
        aliens[i].y = 30; 
    }
};

const checkCollisions = () => {
    for (let i = fire.length - 1; i >= 0; i--) {
        for (let j = aliens.length - 1; j >= 0; j--) {
            if (
                fire[i].x < aliens[j].x + 32 &&
                fire[i].x + fire[i].width > aliens[j].x &&
                fire[i].y < aliens[j].y + 32 &&
                fire[i].y + fire[i].height > aliens[j].y
            ) {
                aliens.splice(j, 1);
                fire.splice(i, 1);
                score += 10;
                break; 
            }
        }
    }

    if (aliens.length === 0) {
        level++;
        alert("Nouveau niveau! Niveau " + level);
        createAliens();
    }
};


createAliens();

//parametre du jeu_____________________________________________________________________________________________

document.addEventListener('keydown', function(event) {
    keyTable[event.keyCode] = true;

    if (event.keyCode === 81) {  
        ship.x -= 5;  
    } else if (event.keyCode === 68) { 
        ship.x += 5; 
    }

    if (event.key === " ") {
        createFire(22);
        createFire(-5);
    }
});

document.addEventListener('keyup', function(event) {
    keyTable[event.keyCode] = false;
});

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    updateAliens();
    drawAliens();

    checkCollisions();

    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("Score: " + score, 10, 20);
    ctx.fillText("Vies: " + lives, 10, 40);
    ctx.fillText("Niveau: " + level, 10, 60);

    ctx.drawImage(ship.img, ship.x, ship.y);
    setFire();
    drawFire();

    window.requestAnimationFrame(draw);
}

$(document).ready(function() {
    draw();
});

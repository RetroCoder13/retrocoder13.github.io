function setVariable(){
    Scale = 1;
    lemonSpeed = 0.5
    score = 0
    previousScore = score
    lives = 5
    previousLife = lives
    game = true
    mouseClick = 0
    blank = true
    movement = true

    playerWidth = Scale * 50;
    playerHeight = Scale * 50;
    lemonWidth = Scale * 50;
    lemonHeight = Scale * 50;
    coinWidth = Scale * 50;
    coinHeight = Scale * 50;

    playerX = (Math.random() * (canvas.width - playerWidth * 2)) + playerWidth;
    playerY = (Math.random() * (canvas.height - playerHeight * 2)) + playerHeight;
    lemonX = (Math.random() * (canvas.width - playerWidth * 2)) + playerWidth;
    lemonY = (Math.random() * (canvas.height - playerHeight * 2)) + playerHeight;
    coinX = (Math.random() * (canvas.width - playerWidth * 2)) + playerWidth;
    coinY = (Math.random() * (canvas.height - playerHeight * 2)) + playerHeight;
}

window.onload=function(){
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    playerTexture = new Image()
    playerTexture.src = 'textures/player.png'
    lemonTexture = new Image()
    lemonTexture.src = 'textures/lemon.png'
    coinTexture = new Image()
    coinTexture.src = 'textures/coin.png'

    setInterval(update,1000/120);

    setVariable()
    playerX = -50
    playerY = -50
    lemonX = -50
    lemonY = -50
    coinX = -50
    coinY = -50
    game = false

    document.addEventListener('mousedown',function(mouse){
        mouseClick = mouse.buttons;
    });
    canvas.addEventListener('mousemove',function(mouse){
        mouseX = mouse.offsetX - playerWidth/2;
        mouseY = mouse.offsetY - playerHeight/2;
    });
    document.addEventListener('keypress',function(keyboard){
        key = keyboard.key;
    });
};

function update(){
    if (blank == true){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        // ctx.fillStyle = "#FFFFFF";
        // player = ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
        // ctx.fillStyle = "#FFFF00";
        // lemon = ctx.fillRect(lemonX, lemonY, lemonWidth, lemonHeight);
        // ctx.fillStyle = "#555500";
        // lemon = ctx.fillRect(coinX, coinY, coinWidth, coinHeight);
        ctx.fillStyle = "#FFFFFF";
        player = ctx.drawImage(playerTexture, x=playerX, y=playerY, width=playerWidth, height=playerHeight);
        lemon = ctx.drawImage(lemonTexture, x=lemonX, y=lemonY, width=lemonWidth, height=lemonHeight);
        coin = ctx.drawImage(coinTexture, x=coinX, y=coinY, width=coinWidth, height=coinHeight);
    };
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "20px OCR A, Courier";
    scoreText = ctx.fillText("Score: " + score, 10, 50);
    livesText = ctx.fillText("Lives: " + lives, 10, 70);

    if (game == true){
        if (movement == true){
            diffMouseX = mouseX - playerX;
            diffMouseY = mouseY - playerY;
            diffLemonX = playerX - lemonX;
            diffLemonY = playerY - lemonY;
            diffCoinX = playerX - coinX;
            diffCoinY = playerY - coinY;

            if (diffMouseX > 0){
                playerX += 1;
            };
            if (diffMouseX < 0){
                playerX -= 1;
            };
            if (diffMouseY > 0){
                playerY += 1;
            };
            if (diffMouseY < 0){
                playerY -= 1;
            };

            if (diffLemonX > 0){
                lemonX += 1 * lemonSpeed;
            };
            if (diffLemonX < 0){
                lemonX -= 1 * lemonSpeed;
            };
            if (diffLemonY > 0){
                lemonY += 1 * lemonSpeed;
            };
            if (diffLemonY < 0){
                lemonY -= 1 * lemonSpeed;
            };

            if (diffCoinX < playerWidth){
                if (diffCoinX > 0){
                    if (diffCoinY < playerHeight){
                        if (diffCoinY > 0){
                            score += 1;
                        };
                    };
                };
            };

            if (diffCoinX < playerWidth){
                if (diffCoinX > - playerWidth){
                    if (diffCoinY < playerHeight){
                        if (diffCoinY > - playerWidth){
                            score += 1;
                        };
                    };
                };
            };


            if (diffLemonX < playerWidth){
                if (diffLemonX > 0){
                    if (diffLemonY < playerHeight){
                        if (diffLemonY > 0){
                            lives -= 1;
                        };
                    };
                };
            };

            if (diffLemonX < playerWidth){
                if (diffLemonX > - playerWidth){
                    if (diffLemonY < playerHeight){
                        if (diffLemonY > - playerWidth){
                            lives -= 1;
                        };
                    };
                };
            };

            if (previousScore < score){
                blank = false
                movement = false
                previousScore = score;
                playerX = Math.random() * (canvas.width - playerWidth * 3);
                playerY = Math.random() * (canvas.height - playerWidth * 3);
                lemonX = Math.random() * (canvas.width - playerWidth * 3);
                lemonY = Math.random() * (canvas.height - playerWidth * 3);
                coinX = Math.random() * (canvas.width - playerWidth * 3);
                coinY = Math.random() * (canvas.height - playerWidth * 3);
                ctx.clearRect(0,0,canvas.width,canvas.height);
                countdown = ctx.fillText("3", canvas.width/2, canvas.height/2);
                setTimeout(function(){
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    countdown = ctx.fillText("2", canvas.width/2, canvas.height/2);
                    setTimeout(function(){
                        ctx.clearRect(0,0,canvas.width,canvas.height);
                        countdown = ctx.fillText("1", canvas.width/2, canvas.height/2);
                        setTimeout(function(){
                            blank = true;
                            movement = true;
                        }, 1000);
                    }, 1000);
                }, 1000);
            };

            if (previousLife > lives){
                blank = false
                movement = false
                previousLife = lives;
                playerX = Math.random() * (canvas.width - playerWidth * 3);
                playerY = Math.random() * (canvas.height - playerWidth * 3);
                lemonX = Math.random() * (canvas.width - playerWidth * 3);
                lemonY = Math.random() * (canvas.height - playerWidth * 3);
                coinX = Math.random() * (canvas.width - playerWidth * 3);
                coinY = Math.random() * (canvas.height - playerWidth * 3);
                ctx.clearRect(0,0,canvas.width,canvas.height);
                countdown = ctx.fillText("3", canvas.width/2, canvas.height/2);
                setTimeout(function(){
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    countdown = ctx.fillText("2", canvas.width/2, canvas.height/2);
                    setTimeout(function(){
                        ctx.clearRect(0,0,canvas.width,canvas.height);
                        countdown = ctx.fillText("1", canvas.width/2, canvas.height/2);
                        setTimeout(function(){
                            blank = true;
                            movement = true;
                        }, 1000);
                    }, 1000);
                }, 1000);
            };

            if (lives == 0){
                game = false;
                playerX = -50
                playerY = -50
                lemonX = -50
                lemonY = -50
                coinX = -50
                coinY = -50
            };
        };
    };
    if (game == false){
        gameOver = ctx.fillText("Click To Play", canvas.width/2, canvas.height/2);
        if (mouseClick == 1){
            setVariable();
        };
    }
    mouseClick = 0;
};
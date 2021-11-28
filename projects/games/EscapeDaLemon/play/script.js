function setVariable(){
    Scale = 1;
    lemonSpeed = 0.5
    score = 0
    previousScore = score
    lives = 5
    previousLife = lives
    game = true

    playerWidth = Scale * 50;
    playerHeight = Scale * 50;
    lemonWidth = Scale * 50;
    lemonHeight = Scale * 50;
    coinWidth = Scale * 50;
    coinHeight = Scale * 50;

    playerX = Math.random() * (canvas.width - playerWidth);
    playerY = Math.random() * (canvas.height - playerWidth);
    lemonX = Math.random() * (canvas.width - playerWidth);
    lemonY = Math.random() * (canvas.height - playerWidth);
    coinX = Math.random() * (canvas.width - playerWidth);
    coinY = Math.random() * (canvas.height - playerWidth);
}

window.onload=function(){
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    setInterval(update,1000/120);

    setVariable()

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
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#FFFFFF";
    player = ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
    ctx.fillStyle = "#FFFF00";
    lemon = ctx.fillRect(lemonX, lemonY, lemonWidth, lemonHeight);
    ctx.fillStyle = "#555500";
    lemon = ctx.fillRect(coinX, coinY, coinWidth, coinHeight);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "20px OCR A, Courier";
    scoreText = ctx.fillText("Score: " + score, 10, 50);
    livesText = ctx.fillText("Lives: " + lives, 10, 70);

    if (game == true){
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
            playerX = Math.random() * (canvas.width - playerWidth);
            playerY = Math.random() * (canvas.height - playerWidth);
            lemonX = Math.random() * (canvas.width - playerWidth);
            lemonY = Math.random() * (canvas.height - playerWidth);
            coinX = Math.random() * (canvas.width - playerWidth);
            coinY = Math.random() * (canvas.height - playerWidth);
            previousScore = score;
        };

        if (previousLife > lives){
            playerX = Math.random() * (canvas.width - playerWidth);
            playerY = Math.random() * (canvas.height - playerWidth);
            lemonX = Math.random() * (canvas.width - playerWidth);
            lemonY = Math.random() * (canvas.height - playerWidth);
            coinX = Math.random() * (canvas.width - playerWidth);
            coinY = Math.random() * (canvas.height - playerWidth);
            previousLife = lives;
        };

        if (lives == 0){
            game = false;
        };
    }
    if (game == false){
        gameOver = ctx.fillText("GAME OVER", canvas.width/2, canvas.height/2);
        if (mouseClick == 1){
            setVariable();
        };
    };
};
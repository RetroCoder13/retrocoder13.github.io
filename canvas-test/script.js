window.onload=function(){
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    setInterval(update,1000/120);
    // document.addEventListener('mousedown',function(mouse){
    //     mouseX = mouse.pageX + ((window.width - canvas.width));
    //     mouseY = mouse.pageY + ((window.height - canvas.height));
    //     mouseClick = mouse.buttons;
    // });
    canvas.addEventListener('mousemove',function(mouse){
        mouseX = mouse.offsetX;
        mouseY = mouse.offsetY;
        mouseClick = mouse.buttons;
    });
    document.addEventListener('keypress',function(keyboard){
        key = keyboard.key;
    });
    playerX = 10;
    playerY = 10;
};

function update(){
    // if (mouseClick == 1){
    //     ctx.fillStyle = "#FF0000";
    //     ctx.fillRect(mouseX,mouseY,10,10);
    // };
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(playerX, playerY, 50, 50);

    diffX = mouseX - playerX;
    diffY = mouseY - playerY;

    if (diffX > 0){
        playerX += 1;
    };
    if (diffX < 0){
        playerX -= 1;
    };
    if (diffY > 0){
        playerY += 1;
    };
    if (diffY < 0){
        playerY -= 1;
    };
};
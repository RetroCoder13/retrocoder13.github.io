window.onload=function(){
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    setInterval(update,1000/120);
    document.addEventListener('mousedown',function(mouse){
        mouseX = mouse.clientX - 125;
        mouseY = mouse.clientY - 45;
        mouseClick = mouse.buttons;
    });
    document.addEventListener('mousemove',function(mouse){
        mouseX = mouse.clientX - 125;
        mouseY = mouse.clientY - 45;
        mouseClick = mouse.buttons;
    });
    document.addEventListener('keypress',function(keyboard){
        key = keyboard.key;
    });
    picture = document.getElementById('RetroCoder');
    playerX = 10;
    playerY = 10;
};

function update(){
    // if (mouseClick == 1){
    //     ctx.fillStyle = "#FF0000";
    //     ctx.fillRect(mouseX,mouseY,10,10);
    // };
    ctx.clearRect(0,0,canvas.width,canvas.height);
    player = ctx.drawImage(picture, playerX, playerY, width="50", height="50");
    // if (key == "w"){
    //     key = 'none';
    //     playerY -= 10
    // };
    // if (key == "a"){
    //     key = 'none';
    //     playerX -= 10
    // };
    // if (key == "s"){
    //     key = 'none';
    //     playerY += 10
    // };
    // if (key == "d"){
    //     key = 'none';
    //     playerX += 10
    // };
    diffX = mouseX - playerX;
    diffY = mouseY - playerY;

    // if (key == "w"){
    //     key = 'none';
    //     alert(diffX);
    // };
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
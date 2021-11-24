window.onload=function(){
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    setInterval(update,1000/60);
    canvas.addEventListener('mousemove',function(mouse){
        mouseX = mouse.clientX
        mouseY = mouse.clientY
        mouseClick = mouse.buttons
    })
    canvas.addEventListener('touchmove',function(touch){
        touchX = touch.pageX
        touchY = touch.pageY
        //mouseClick = e.buttons
    })
}

function update(){
    if (mouseClick == 1){
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(mouseX,mouseY,10,10);
    }
    document.write(pageX,pageY)
}
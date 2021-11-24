window.onload=function(){
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    setInterval(update,1000/60);
    canvas.addEventListener('mousemove',function(e){
        mouseX = e.clientX
        mouseY = e.clientY
        mouseClick = e.buttons
    })
}

function update(){
    if (mouseClick == 1){
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(mouseX,mouseY,10,10);
    }
}
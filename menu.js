var menu = false

function toggleMenu(){
    if(menu){
        menu = false
        document.getElementById('menu').style.animation = "pop-out .5s forwards"
        document.getElementById('menu-button').style.animation = "pop-out .5s forwards"
    } else {
        menu = true
        document.getElementById('menu').style.animation = "pop-in .5s forwards"
        document.getElementById('menu-button').style.animation = "pop-in .5s forwards"
    }
}
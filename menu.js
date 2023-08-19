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

var menuData = document.createElement("div")
menuData.id = "menu"
menuData.className = "menu"
menuData.innerHTML = `
<div id="menu-button" class="menu-button">
    <img src="assets/textures/menu.png" width="50" height="50" onclick="toggleMenu()">
</div>
<div id="menu-info" class="menu-info">
    <h1>Links</h1>
    <a href="https://retrocoder13.github.io/" id="link">Home</a>
    <a href="https://retrocoder13.github.io/projects/" id="link">Projects</a>
    <a href="https://retrocoder.itch.io/" id="link">itch.io</a>
    <a href="https://github.com/RetroCoder13/" id="link">GitHub</a>
</div>
`
window.onload = function(){
    document.body.append(menuData)
}
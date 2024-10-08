var menu = false

function toggleMenu(){
    if(menu){
        menu = false
        document.getElementById('menu').style.animation = "pop-out .5s forwards cubic-bezier(0.65, 0, 0.35, 1)"
    } else {
        menu = true
        document.getElementById('menu').style.animation = "pop-in .5s forwards cubic-bezier(0.33, 1, 0.68, 1)"
    }
}

var button = document.createElement("div")
button.id = "menu-button"
button.className = "menu-button"
button.innerHTML = `<img src="https://retrocoder13.github.io/assets/textures/menu.png" width="50" height="50" onclick="toggleMenu()">`
var menuData = document.createElement("div")
menuData.id = "menu"
menuData.className = "menu"
menuData.innerHTML = `
<a href="https://retrocoder13.github.io/" id="link">Home</a>
<a href="https://retrocoder13.github.io/games/" id="link">Games</a>
<a href="https://retrocoder13.github.io/about/" id="link">About</a>
<a href="https://retrocoder.itch.io/" id="link">itch.io</a>
<a href="https://github.com/RetroCoder13/" id="link">GitHub</a>
<a href="https://www.instagram.com/retrocoder13" id="link">Instagram</a>
<a href="https://www.youtube.com/@RetroCoder1313" id="link">YouTube</a>
`
window.onload = function(){
    document.body.append(button)
    document.body.append(menuData)
}

document.addEventListener('mousedown',function(e){
    if(menu == true && (e.clientX < window.innerWidth - 200 || (e.clientX < window.innerWidth - 50 && e.clientY < 50))){
        toggleMenu()
    }
})

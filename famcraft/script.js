var imageClick = 0

function onImageClick(){
    if (imageClick == 0){
        imageClick = 1
        document.getElementById('players').innerHTML = "<h2>Easter Egg</h2>\n<p>You found my Easter Egg hidden within this website, well done</p>"
    } else{
        imageClick = 0
        document.getElementById('players').innerHTML = "<h2>Active Players</h2>\n<p>\n<a href=\"https://retrocoder13.github.io\">RetroCoder</a>\n<br>\n<a href=\"illusifox.itch.io\">illusifox</a>\n<br>\n<a href=\"https://www.reddit.com/user/zaperno372\">Zaperno</a></p>"
    }
}
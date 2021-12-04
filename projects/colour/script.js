function update(){
    var color = document.getElementById('color')
    document.getElementById('body').style.backgroundColor = "#" + color.value;
    color.style.backgroundColor = "#" + color.value;

    if (color.value == ''){
        document.getElementById('body').style.backgroundColor = "#000000";
        color.style.backgroundColor = "#000000";
    };
};

function copyClipboard(){
    navigator.clipboard.writeText(color.value)
}
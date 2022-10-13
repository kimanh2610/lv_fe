const left = document.querySelector(".left"),
    right = document.querySelector(".right"),
    bar = document.querySelector(".bar"),
    editor = document.querySelector(".editor"),
    darkMode = document.querySelector(".btn_dark"),
    lightMode = document.querySelector(".btn_light");

const drag = (e) => {
    e.preventDefault();
    document.selection ? document.selection.empty() :
        window.getSelection().removeAllRanges();
    left.style.width = (e.pageX - bar.offsetWidth / 3) + "px";
    editor.resize();

}
bar.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", drag);
})

bar.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", drag);
})

//Set Dark Mode
darkMode.addEventListener("click", () => {
    document.getElementById("code").style.backgroundColor = "#363836";
    document.getElementById("code").style.color = "#eee";
})

//Set Light Mode
lightMode.addEventListener("click", () => {
    document.getElementById("code").style.backgroundColor = "";
    document.getElementById("code").style.color = "";
})


$(document).ready(function () {
    var e = ace.edit("code");
    e.getSession().setMode("ace/mode/html");
    e.setTheme("ace/theme/xcode");
    e.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        
</body>
</html>`);

    $("#btn").on("click", function () {
        $("#output").html(e.getValue());
    });
});
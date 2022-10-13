const left = document.querySelector(".left"),
    right = document.querySelector(".right"),
    bar = document.querySelector(".bar"),
    editor = document.querySelector(".editor"),
    run = document.querySelector(".btn_run"),
    iframe = document.querySelector(".iframe"),
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

//Run code
run.addEventListener("click", () => {
    const html = editor.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);

})

//Set Dark Mode
darkMode.addEventListener("click", () => {
    editor.style.backgroundColor = "#363836";
    editor.style.color = "#eee";
})

//Set Light Mode
lightMode.addEventListener("click", () => {
    editor.style.backgroundColor = "";
    editor.style.color = "";
})

//live code 
document.getElementById("live").onclick = function () {
    if (this.checked) {
        editor.addEventListener("keyup", () => {
            const html = editor.textContent;
            iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
        })
    }
}
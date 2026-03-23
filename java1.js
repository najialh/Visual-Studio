function moveBox() {
    let box = document.getElementById("box");
    let position = 0;

    let animation = setInterval(frame, 5);

    function frame() {
        if (position >= 300) {
            clearInterval(animation);
        } else {
            position++;
            box.style.left = position + "px";
        }
    }
}

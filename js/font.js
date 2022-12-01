var boxes = document.getElementsByClassName("boxes");

function gen_rand_font() {
    var fonts = ["Luminari, fantasy", "Bradley Hand, cursive", "Courier, monospace", "Georgia, serif", "Optima, sans-serif", "Arial, sans-serif"];
    var elem = Math.floor(Math.random() * fonts.length);
    return fonts[elem];
}

function gen_rand_color() {
    var colors = ["blue", "yellow", "red", "black", "green", "brown", "gray"];
    var elem = Math.floor(Math.random() * colors.length);
    return colors[elem];

}

function update_fonts(boxes) {
    for (let i = 0; i < boxes.length; i++) {
        // coinflip
        if (Math.random() <= 0.5) {
            boxes[i].style.fontFamily = gen_rand_font();
            boxes[i].style.color = gen_rand_color();
        }
    }
}

// window.setInterval(update_fonts(boxes), 10000);

setInterval(() => { update_fonts(boxes); }, 500); 
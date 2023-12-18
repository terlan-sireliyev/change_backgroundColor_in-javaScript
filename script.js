var colors = ['red', 'green', 'yellow', 'gray', 'purple'];
var h1 = document.querySelector('h1');
var body = document.querySelector('body');

function funcRandom(start, end) {
    return Math.floor(Math.random() * (start - end) + end);
}
setInterval(function () {
    var i = funcRandom(0, colors.length);
    body.style.backgroundColor = colors[i];
    for (var e = 0; e < colors.length; e++) {
        h1.innerHTML = `Colorn name: ${colors[i]}`
    }
}, 700)
//megkeresi a startgombot és megnyomásra megnyitja a game oldalt
let starter = document.getElementById("starter");
starter.onclick = function () {
    window.open("./game.html", "_self")
}

function redirectToPage() {
    window.location.href = "./easy.html";
}


let diff;

function redirectToPage(y) {
    window.location.href = y;
}

function setDiff(difficulty){
    diff=difficulty;
    localStorage.setItem("localDiff", diff);
    console.log(diff)
    console.log(localStorage.getItem("localDiff"));
}


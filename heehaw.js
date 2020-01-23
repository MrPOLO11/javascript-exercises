const btnPress = document.getElementById("btn");
const pTag = document.getElementById("placeAnswer");

btnPress.onclick = heeHaw;

function heeHaw() {
    var input = document.getElementById("input").value;

    if(isNaN(input)) {
        window.alert("Invalid input! Please provide a number!");
    }
    else {
        pTag.innerHTML = "";
        for(var i = 1; i <= input; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                pTag.innerHTML += "Hee Haw!<br>";
            } else if (i % 3 === 0) {
                pTag.innerHTML += "Hee!<br>";
            } else if (i % 5 === 0) {
                pTag.innerHTML +="Haw!<br>";
            } else {
                pTag.innerHTML += i + "<br>";
            }
        }
    }
}

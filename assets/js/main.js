function randomzahl() {
    let randomNumColor = Math.floor(Math.random() * 255);
    return randomNumColor;
}
let div = document.getElementsByClassName("colordiv");
function funcmain() {
    let randomNumDiv = Math.floor(Math.random() * 5);
    let red = randomzahl();
    let green = randomzahl();
    let blue = randomzahl();
    for (let el of div) {
        el.style.backgroundColor = `rgb(${randomzahl()}, ${randomzahl()}, ${randomzahl()})`;
    }
    div[randomNumDiv].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById("frage").innerHTML = `Guess what color RGB(${red}, ${green}, ${blue}) is:`;
    for (let el of div) {
        el.addEventListener("click", () => {
            document.getElementById("ergebnis").innerHTML = "versuch noch einmal 👎🏻";
        })
    }
    div[randomNumDiv].addEventListener("click", () => {
        document.getElementById("ergebnis").innerHTML = "Super ";
    })
}
window.onload = funcmain();
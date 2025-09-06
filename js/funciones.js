const h1 = document.querySelector("h1");
const body = document.querySelector("body");

function color() {
    return `rgb(${[0, 0, 0].map(() => Math.floor(Math.random() * 256)).join(",")})`;
}

body.style.backgroundColor = color();

h1.innerHTML = h1.innerText.split("").map(c => {
    return `<span style= "color: ${color()}">${c}</span>`;
}).join("");
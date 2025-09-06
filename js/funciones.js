const h1 = document.querySelector("h1");

function color() {
    return `rgb(${[0, 0, 0].map(() => Math.floor(Math.random() * 256)).join(",")})`;
}

h1.innerHTML = h1.innerText.split("").map(c => {
    return `<span style= "color: ${color()}">${c}</span>`;
}).join("");

const cdiv = document.querySelector(".container");
const gridSize = 16;
const squareSize = (400 / gridSize) + "px";  // Ensure no fractional pixels

for (let i = 0; i < gridSize * gridSize; i++) {
    const sdiv = document.createElement("div");

    sdiv.style.cssText = ` width: ${squareSize}; height: ${squareSize}; box-sizing: border-box; margin: 0px; padding: 0px;`;
    sdiv.classList.add("sketch-div");
    cdiv.appendChild(sdiv);
    addColorChangeListener();
}
function addColorChangeListener() {
    const colorDiv = document.querySelectorAll(".sketch-div");

    colorDiv.forEach(div => {
        div.addEventListener("mouseover", () => {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            div.style.backgroundColor = randomColor;
        });
    });
}
const nbtn = document.querySelector(".new");
nbtn.addEventListener("click", () => {
    const userSize = prompt("please enter the grid size:", "1-100");
    if (userSize >= 1 && userSize < 100) {
        const squareSize = (400 / userSize) + "px";
        cdiv.innerHTML = '';
        for (let i = 0; i < userSize * userSize; i++) {

            const sdiv = document.createElement("div");
            sdiv.style.cssText = ` width: ${squareSize}; height: ${squareSize}; box-sizing: border-box; margin: 0px; padding: 0px;`;
            sdiv.classList.add("sketch-div");
            cdiv.appendChild(sdiv);
        }
        addColorChangeListener();
    }
    else {
        alert("Invalid input");
    }
});

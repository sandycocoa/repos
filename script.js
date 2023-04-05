// Grid
const container = document.getElementById("container");

for (let i = 1; i <= 256; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('gridSquare1');
    gridDiv.addEventListener("mouseover", () => 
        {gridDiv.style.cssText = "background-color: green"});
    gridDiv.addEventListener("mouseout", () =>
        {gridDiv.style.cssText = ""});
    container.appendChild(gridDiv);
}

// New Grid
const resetButton = document.getElementById("new-grid");

function generateGrid(newGrid) {

    container.innerHTML = ""

    const squareSize = 960 / newGrid;

    // Adds new squares to the container
    for (let i = 1; i <= (newGrid * newGrid); i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('gridSquare2');
        gridDiv.style.cssText = `width: ${squareSize}px; height: ${squareSize}px`;
        gridDiv.addEventListener("mouseover", () => 
            {gridDiv.style.backgroundColor = "green"});
        gridDiv.addEventListener("mouseout", () =>
            {gridDiv.style.backgroundColor = ""});
        container.appendChild(gridDiv);

        container.style.cssText = `max-width: 960px; max-height: 960px; grid-template-columns: repeat(${newGrid}, ${squareSize}px);`
    }
}
// Button interactions
resetButton.addEventListener("click", () => {
    let newGrid = prompt("Enter the amount of squares per side.");

    if(newGrid > 0 && newGrid <= 100) {
        generateGrid(newGrid)
    } else {
        alert("Invalid input. Try again with a number between 1 and 100.")
    }
});

const buttonGridSize = document.createElement('button');
document.body.appendChild(buttonGridSize);
buttonGridSize.id = 'button-grid-size';
buttonGridSize.textContent = 'Grid Size'
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

let pixels = document.querySelectorAll('.pixel');

function createGrids(num) {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (let i = 1; i <= num; i++) {    
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 1; j <= num; j++) {
      let pixel = document.createElement('div')
      pixel.className = 'pixel';
      row.appendChild(pixel);
    }
    container.appendChild(row);
  }
}
function brush(event) {
  let pixel = event.target;
  pixel.style.backgroundColor = "black";
}
createGrids(16);
container.addEventListener('mouseover', brush);
buttonGridSize.addEventListener('click', () => {
  let userGridSize = prompt('Ask your grid size (limit to 100): ');
  if (userGridSize >= 100) {
    alert("Error : Grid Size was set over the limit.")
  } else {
    createGrids(userGridSize)
  }
});

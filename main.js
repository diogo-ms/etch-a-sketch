const container = document.createElement('div');
container.id = 'container'
document.body.appendChild(container);

function createGrids(num) {
  for (let i = 0; i <= num; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j <= num; j++) {
      let pixel = document.createElement('div')
      pixel.className = 'pixel';
      row.appendChild(pixel);
    }
    container.appendChild(row);
  }
}

createGrids(17);
console.log(pixel)

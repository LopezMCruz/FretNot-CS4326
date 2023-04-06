const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
  cell.addEventListener('click', (e) => {
    // Remove active class from all cells in the same row
    const row = e.target.closest('.row');
    const cellsInRow = row.querySelectorAll('.cell');
    cellsInRow.forEach(cellInRow => {
      cellInRow.classList.remove('active');
    });

    // Add active class to clicked cell
    e.target.classList.add('active');

    // Update array with value of clicked cell
    const value = e.target.dataset.value;
    const index = e.target.dataset.index;
    fetch('/update-array', {
      method: 'POST',
      body: JSON.stringify({ index: index, value: value }),
      headers: { 'Content-Type': 'application/json' }
    });
  });
});

/** 
const rows = document.querySelectorAll('.row');

  rows.forEach(row => {
    const cells = row.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.addEventListener('click', (e) => {
        const clickedCell = e.target;
        const activeCell = row.querySelector('.cell.active');
        if (activeCell) {
          activeCell.classList.remove('active');
        }
        clickedCell.classList.add('active');
      });
    });
  });
*/

/**
 
 
const cells = document.querySelectorAll('.cell');

let activeCell;

cells.forEach(cell => {
    cell.addEventListener('click', e => {
      // Remove the "active" class from the previously active cell
      if (activeCell) {
        activeCell.classList.remove('active');
      }
  
      // Add the "active" class to the clicked cell
      cell.classList.add('active');
      activeCell = cell;
    });
  });
  **/
/** 
function addClickEvent(elementID){
    const element = document.getElementById(elementID);
    element.addEventListener('click', (e) => {
        fretClick(element);
    });
}
addClickEvent('E1');
addClickEvent('F1');
addClickEvent('Gb1');
addClickEvent('G1');
addClickEvent('Ab1');
addClickEvent('A1');
addClickEvent('Bb1');
addClickEvent('B1');
addClickEvent('C1');
addClickEvent('Db1');
addClickEvent('D1');
addClickEvent('Eb1');
addClickEvent('E2');
addClickEvent('F2');
addClickEvent('Gb2');
addClickEvent('G2');

function e1StringClick(key){
    let E=document.getElementById('E1');
    let F=document.getElementById('F1');
    let Gb1=document.getElementById('Gb1');
    let G=document.getElementById('G1');
    let Ab=document.getElementById('Ab1');
    let A=document.getElementById('A1');
    let Bb=document.getElementById('Bb1');
    let B=document.getElementById('B1');
    let C=document.getElementById('C1');
    let Db=document.getElementById('Db1');
    let D=document.getElementById('D1');
    let Eb=document.getElementById('Eb1');
    let E2=document.getElementById('E2');
    let F2=document.getElementById('F2');
    let Gb2=document.getElementById('Gb2');
    let G2=document.getElementById('G2');
}
**/
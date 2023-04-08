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
    fetch('/update-array', { // calls the /update-array route from server.py
      method: 'POST',
      body: JSON.stringify({ index: index, value: value }),
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      fetch('/get_chord') // calls the /get_chord route from server.py
        .then(response => response.json())
        .then(data => {
          if (data === "No Chord Found") { // this is supposed update on the webpage
                                            // when no chord is found but it's not working yet
              document.getElementById('chord-name').innerHTML = data;
          } else { //else statment pushes the chord json from get_chord to the html block
              document.getElementById('chord-name').innerHTML = data.chord;
          }
        });
    });
  });
});